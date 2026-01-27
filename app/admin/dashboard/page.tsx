"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import { getCategoryStats } from "@/lib/categories-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import type { Category } from "@/lib/categories-data"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userEmail, setUserEmail] = useState("")
  const [addedProducts, setAddedProducts] = useState<Category[]>([])
  const [isLoadingProducts, setIsLoadingProducts] = useState(false)
  const [contacts, setContacts] = useState<any[]>([])
  const [isLoadingContacts, setIsLoadingContacts] = useState(false)
  
  // Get actual category statistics
  const stats = getCategoryStats()

  // Fetch dynamically added products
  const fetchAddedProducts = async () => {
    setIsLoadingProducts(true)
    try {
      const productsRef = collection(db, "products")
      const q = query(productsRef, orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      
      const products: Category[] = []
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data()
        products.push({
          key: data.key || docSnap.id,
          title: data.title,
          desc: data.desc,
          images: data.images,
          altTexts: data.altTexts,
          category: data.category,
          createdAt: data.createdAt,
          docId: docSnap.id, // Store document ID for deletion
        } as Category & { docId: string })
      })
      setAddedProducts(products)
    } catch (error) {
      console.error("Error fetching products:", error)
      toast.error("Failed to load products")
    } finally {
      setIsLoadingProducts(false)
    }
  }

  // Fetch contacts
  const fetchContacts = async () => {
    setIsLoadingContacts(true)
    try {
      const contactsRef = collection(db, "contacts")
      const q = query(contactsRef, orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      
      const contactsData: any[] = []
      querySnapshot.forEach((docSnap) => {
        contactsData.push({
          id: docSnap.id,
          ...docSnap.data()
        })
      })
      setContacts(contactsData)
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setIsLoadingContacts(false)
    }
  }

  useEffect(() => {
    // Check authentication state with Firebase
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true)
        setUserEmail(user.email || "")
        // Fetch data immediately after authentication is confirmed
        await Promise.all([fetchAddedProducts(), fetchContacts()])
      } else {
        router.push("/admin/login")
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push("/admin/login")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const handleDeleteProduct = async (docId: string, productTitle: string) => {
    if (!window.confirm(`Are you sure you want to delete "${productTitle}"?`)) {
      return
    }

    try {
      await deleteDoc(doc(db, "products", docId))
      setAddedProducts(addedProducts.filter((p) => (p as any).docId !== docId))
      toast.success(`"${productTitle}" deleted successfully`)
    } catch (error) {
      console.error("Error deleting product:", error)
      toast.error("Failed to delete product")
    }
  }

  const handleEditProduct = (docId: string) => {
    router.push(`/admin/products/edit/${docId}`)
  }

  if (isLoading || (isAuthenticated && (isLoadingProducts || isLoadingContacts))) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              {userEmail ? `Logged in as ${userEmail}` : "Premium Control Panel"}
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-2">
              <CardDescription>Total Products</CardDescription>
              <CardTitle className="text-3xl">{stats.total}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Across all categories
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-2">
              <CardDescription>Lighting Products</CardDescription>
              <CardTitle className="text-3xl">{stats.lighting}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Indoor lighting solutions
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-2">
              <CardDescription>Smart Home</CardDescription>
              <CardTitle className="text-3xl">{stats.smartHome}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Automation & Smart devices
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-2">
              <CardDescription>Outdoor Products</CardDescription>
              <CardTitle className="text-3xl">{stats.outdoor}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Wall, Bollard & Garden lights
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Button 
                  variant="outline" 
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => router.push("/admin/products/add")}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Product
                </Button>
                <Button 
                  variant="outline" 
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => router.push("/admin/contacts") }
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  View Messages
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle>View Added Products</CardTitle>
                <CardDescription>Manage products you've added via admin panel</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingProducts ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : addedProducts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">No products added yet</p>
                    <Button 
                      onClick={() => router.push("/admin/products/add")}
                      className="gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add Your First Product
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {addedProducts.map((product: any) => (
                      <div key={product.docId} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{product.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {product.category}
                            </Badge>
                            <p className="text-xs text-muted-foreground">
                              {product.images.length} image{product.images.length !== 1 ? 's' : ''}
                            </p>
                            {product.createdAt && (
                              <p className="text-xs text-muted-foreground">
                                {new Date(product.createdAt.seconds * 1000).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditProduct(product.docId)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteProduct(product.docId, product.title)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle>Product Statistics</CardTitle>
                <CardDescription>Overview of your product catalog</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-4xl font-bold text-primary mb-2">{stats.total}</div>
                  <p className="text-muted-foreground">Total Products in Catalog</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-semibold">{stats.lighting}</div>
                      <div className="text-xs text-muted-foreground">Lighting</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-semibold">{stats.smartHome}</div>
                      <div className="text-xs text-muted-foreground">Smart Home</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-semibold">{stats.outdoor}</div>
                      <div className="text-xs text-muted-foreground">Outdoor</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-semibold">{stats.accessories}</div>
                      <div className="text-xs text-muted-foreground">Accessories</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inquiries" className="space-y-4">
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Inquiries</CardTitle>
                <CardDescription>Recent customer messages</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingContacts ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : contacts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">No messages yet</p>
                    <Button 
                      onClick={() => router.push("/admin/contacts")}
                      variant="outline"
                    >
                      View All Messages
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contacts.slice(0, 5).map((contact) => (
                      <div key={contact.id} className="p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium">{contact.firstName} {contact.lastName}</h4>
                            <a 
                              href={`mailto:${contact.email}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {contact.email}
                            </a>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {contact.createdAt ? new Date(contact.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                          </span>
                        </div>
                        <p className="text-sm line-clamp-2">{contact.message}</p>
                        <Button 
                          variant="link" 
                          className="px-0 mt-2" 
                          size="sm"
                          onClick={() => router.push("/admin/contacts")}
                        >
                          View All Messages →
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
