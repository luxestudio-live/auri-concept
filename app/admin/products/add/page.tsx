"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const CATEGORIES = [
  "Indoor Lighting",
  "Outdoor Lighting",
  "Smart Home",
  "Accessories",
  "Wall Lights",
  "Bollard Lights",
  "Garden Lights",
  "Smart Switches",
  "Smart Locks",
  "Smart Fans",
  "Wires & Cables",
]

export default function AddProduct() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  })
  const [images, setImages] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const fileArray = Array.from(files)
    
    if (fileArray.length < 2) {
      setError("Please select at least 2 images")
      return
    }

    setImages(fileArray)
    
    // Create previews
    const previews = fileArray.map(file => URL.createObjectURL(file))
    setImagePreviews(previews)
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    // Validation
    if (!formData.title || !formData.description || !formData.category) {
      setError("Please fill in all fields")
      return
    }

    if (images.length < 2) {
      setError("Please upload at least 2 images")
      return
    }

    setIsSaving(true)

    try {
      // Function to compress image before upload
      const compressImage = (file: File): Promise<File> => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = (event) => {
            const img = new Image()
            img.src = event.target?.result as string
            img.onload = () => {
              const canvas = document.createElement("canvas")
              let { width, height } = img
              
              // Resize if too large
              const maxWidth = 1920
              const maxHeight = 1080
              if (width > maxWidth || height > maxHeight) {
                const ratio = Math.min(maxWidth / width, maxHeight / height)
                width *= ratio
                height *= ratio
              }
              
              canvas.width = width
              canvas.height = height
              const ctx = canvas.getContext("2d")!
              ctx.drawImage(img, 0, 0, width, height)
              
              canvas.toBlob(
                (blob) => {
                  if (blob) {
                    const compressedFile = new File([blob], file.name, { type: "image/jpeg" })
                    resolve(compressedFile)
                  } else {
                    resolve(file)
                  }
                },
                "image/jpeg",
                0.85 // 85% quality
              )
            }
          }
        })
      }

      // Upload images to Cloudinary via API route
      const uploadImage = async (file: File) => {
        // Compress before upload
        const compressedFile = await compressImage(file)
        
        const form = new FormData()
        form.append("file", compressedFile)

        const res = await fetch("/api/cloudinary-upload", {
          method: "POST",
          body: form,
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || "Image upload failed")
        }

        const data = await res.json()
        return data.url as string
      }

      const imageUrls: string[] = []
      for (const file of images) {
        const url = await uploadImage(file)
        imageUrls.push(url)
      }

      const timestamp = Date.now()
      // Generate alt texts
      const altTexts = imageUrls.map((_, i) => `${formData.title} product image ${i + 1}`)

      // Save product to Firestore
      const productData = {
        key: `${formData.title.replace(/\s+/g, '-')}-${timestamp}`,
        title: formData.title,
        desc: formData.description,
        category: formData.category,
        images: imageUrls,
        altTexts,
        createdAt: new Date().toISOString(),
      }

      await addDoc(collection(db, "products"), productData)

      setSuccess("Product added successfully!")
      
      // Reset form
      setFormData({ title: "", description: "", category: "" })
      setImages([])
      setImagePreviews([])
      
      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/admin/dashboard")
      }, 2000)
    } catch (err: any) {
      setError(err.message || "Failed to add product")
    } finally {
      setIsSaving(false)
    }
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
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Add New Product
            </h1>
            <p className="text-sm text-muted-foreground">Create a new product entry</p>
          </div>
          <Button variant="outline" onClick={() => router.push("/admin/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>
              Fill in the information below to add a new product. All fields are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Product Name *</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="e.g., Pernia Lights"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Enter a brief description of the product..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  {formData.description.length} characters
                </p>
              </div>

              {/* Images */}
              <div className="space-y-2">
                <Label htmlFor="images">Product Images * (Minimum 2 images)</Label>
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Upload at least 2 images for the carousel effect. Supported formats: JPG, PNG, WEBP
                </p>
              </div>

              {/* Image Previews */}
              {imagePreviews.length > 0 && (
                <div className="space-y-2">
                  <Label>Image Previews</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="text-sm text-green-600 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg px-3 py-2">
                  {success}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button type="submit" className="flex-1" disabled={isSaving}>
                  {isSaving ? "Adding Product..." : "Add Product"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/admin/dashboard")}
                  disabled={isSaving}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
