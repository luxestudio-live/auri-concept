"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface ContactMessage {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  subject?: string
  message: string
  createdAt?: string
  status?: string
}

export default function AdminContacts() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [contacts, setContacts] = useState<ContactMessage[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
        fetchContacts()
      } else {
        router.push("/admin/login")
      }
    })
    return () => unsubscribe()
  }, [router])

  async function fetchContacts() {
    setIsLoading(true)
    setError("")
    try {
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"))
      const snapshot = await getDocs(q)
      const rows: ContactMessage[] = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        rows.push({
          id: doc.id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          status: data.status,
          createdAt: data.createdAt?.toDate?.().toISOString?.() || data.createdAt || "",
        })
      })
      setContacts(rows)
    } catch (err) {
      console.error("[contacts] fetch error", err)
      setError("Failed to load contacts")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Contact Inquiries
            </h1>
            <p className="text-sm text-muted-foreground">Manage messages sent via the contact form</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => router.push("/admin/dashboard")}>Back to Dashboard</Button>
            <Button variant="secondary" onClick={fetchContacts} disabled={isLoading}>Refresh</Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {error && (
          <div className="mb-4 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <ContactList contacts={contacts} isLoading={isLoading} />
          </TabsContent>

          <TabsContent value="new" className="space-y-4">
            <ContactList contacts={contacts.filter((c) => (c.status || "new") === "new")} isLoading={isLoading} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function ContactList({ contacts, isLoading }: { contacts: ContactMessage[]; isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    )
  }

  if (!contacts.length) {
    return (
      <Card className="border-border/50 shadow-sm">
        <CardHeader>
          <CardTitle>No messages yet</CardTitle>
          <CardDescription>New contact form submissions will appear here.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {contacts.map((msg) => {
        const created = msg.createdAt ? new Date(msg.createdAt) : null
        return (
          <Card key={msg.id} className="border-border/50 shadow-sm">
            <CardHeader className="pb-2 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <CardTitle className="text-lg">{msg.firstName} {msg.lastName}</CardTitle>
                <Badge variant={msg.status === "new" ? "default" : "outline"}>{msg.status || "new"}</Badge>
              </div>
              <CardDescription>
                {msg.subject || "No subject"}
              </CardDescription>
              {created && (
                <p className="text-xs text-muted-foreground">{created.toLocaleString()}</p>
              )}
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-foreground/90 whitespace-pre-wrap">{msg.message}</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Email: <a className="text-primary hover:underline" href={`mailto:${msg.email}`}>{msg.email}</a></p>
                <p>Phone: <a className="text-primary hover:underline" href={`tel:${msg.phone}`}>{msg.phone}</a></p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
