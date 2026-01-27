"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { toast } from "sonner"

type Testimonial = {
  id: string
  name: string
  company?: string
  review: string
  rating: number
  createdAt?: any
}

export default function TestimonialsPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    review: "",
    rating: "5",
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
      } else {
        router.push("/admin/login")
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  useEffect(() => {
    if (isAuthenticated) {
      fetchTestimonials()
    }
  }, [isAuthenticated])

  const fetchTestimonials = async () => {
    try {
      const testimonialsRef = collection(db, "testimonials")
      const q = query(testimonialsRef, orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      
      const data: Testimonial[] = []
      querySnapshot.forEach((docSnap) => {
        data.push({ id: docSnap.id, ...docSnap.data() } as Testimonial)
      })
      setTestimonials(data)
    } catch (error) {
      console.error("Error fetching testimonials:", error)
      toast.error("Failed to load testimonials")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.review.trim()) {
      toast.error("Name and review are required")
      return
    }

    setIsSubmitting(true)

    try {
      await addDoc(collection(db, "testimonials"), {
        name: formData.name,
        company: formData.company || null,
        review: formData.review,
        rating: parseInt(formData.rating),
        createdAt: serverTimestamp(),
      })

      toast.success("Testimonial added successfully!")
      setFormData({ name: "", company: "", review: "", rating: "5" })
      fetchTestimonials()
    } catch (error) {
      console.error("Error adding testimonial:", error)
      toast.error("Failed to add testimonial")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Delete testimonial from ${name}?`)) {
      return
    }

    try {
      await deleteDoc(doc(db, "testimonials", id))
      setTestimonials(testimonials.filter((t) => t.id !== id))
      toast.success("Testimonial deleted")
    } catch (error) {
      console.error("Error deleting testimonial:", error)
      toast.error("Failed to delete testimonial")
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Manage Testimonials
            </h1>
            <p className="text-sm text-muted-foreground">
              {testimonials.length} testimonial{testimonials.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Button variant="outline" onClick={() => router.push("/admin/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Add Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Add New Testimonial</CardTitle>
              <CardDescription>Add customer reviews and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Customer Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="rating">Rating *</Label>
                  <Select value={formData.rating} onValueChange={(value) => setFormData({ ...formData, rating: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[5, 4, 3, 2, 1].map((r) => (
                        <SelectItem key={r} value={r.toString()}>
                          {r} Star{r !== 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="review">Review *</Label>
                  <Textarea
                    id="review"
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    placeholder="Write the customer's review..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Adding..." : "Add Testimonial"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Testimonials List */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>All Testimonials</CardTitle>
              <CardDescription>Manage existing customer reviews</CardDescription>
            </CardHeader>
            <CardContent>
              {testimonials.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No testimonials yet. Add your first one!
                </div>
              ) : (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {getInitials(testimonial.name)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            {testimonial.company && (
                              <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(testimonial.id, testimonial.name)}
                        >
                          Delete
                        </Button>
                      </div>

                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-sm text-foreground/80 line-clamp-3">{testimonial.review}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
