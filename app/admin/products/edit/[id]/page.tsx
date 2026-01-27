"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import Image from "next/image"

const PRODUCT_CATEGORIES = [
  "Lighting",
  "Smart Home",
  "Outdoor",
  "Accessories",
  "Wall Lights",
  "Ceiling Lights",
  "Floor Lights",
  "Table Lamps",
  "Pendant Lights",
  "Smart Switches",
  "Garden Lights",
]

export default function EditProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [product, setProduct] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    category: "",
    altTexts: [] as string[],
  })
  const [images, setImages] = useState<string[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [newImages, setNewImages] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  // Check authentication
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

  // Fetch product data
  useEffect(() => {
    if (!isAuthenticated || !productId) return

    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", productId)
        const docSnap = await getDoc(productRef)

        if (docSnap.exists()) {
          const data = docSnap.data()
          setProduct(data)
          setFormData({
            title: data.title,
            desc: data.desc,
            category: data.category,
            altTexts: data.altTexts || [],
          })
          setImages(data.images || [])
          setImageUrls(data.images || [])
        } else {
          toast.error("Product not found")
          router.push("/admin/dashboard")
        }
      } catch (error) {
        console.error("Error fetching product:", error)
        toast.error("Failed to load product")
        router.push("/admin/dashboard")
      }
    }

    fetchProduct()
  }, [isAuthenticated, productId, router])

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setNewImages([...newImages, ...files])

    // Create previews
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImagePreviews((prev) => [...prev, event.target?.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  // Remove existing image
  const removeExistingImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
    setImageUrls(imageUrls.filter((_, i) => i !== index))
    setFormData({
      ...formData,
      altTexts: formData.altTexts.filter((_, i) => i !== index),
    })
  }

  // Remove new image preview
  const removeNewImagePreview = (index: number) => {
    setNewImages(newImages.filter((_, i) => i !== index))
    setImagePreviews(imagePreviews.filter((_, i) => i !== index))
  }

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCategoryChange = (value: string) => {
    setFormData({ ...formData, category: value })
  }

  const handleAltTextChange = (index: number, value: string) => {
    const newAltTexts = [...formData.altTexts]
    newAltTexts[index] = value
    setFormData({ ...formData, altTexts: newAltTexts })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.title.trim()) {
      toast.error("Product title is required")
      return
    }
    if (!formData.desc.trim()) {
      toast.error("Product description is required")
      return
    }
    if (!formData.category) {
      toast.error("Product category is required")
      return
    }

    const totalImages = imageUrls.length + newImages.length
    if (totalImages < 2) {
      toast.error("At least 2 images are required")
      return
    }

    setIsSaving(true)

    try {
      const uploadedImageUrls: string[] = [...imageUrls]
      const finalAltTexts: string[] = [...formData.altTexts]

      // Upload new images to Cloudinary
      for (let i = 0; i < newImages.length; i++) {
        const formDataObj = new FormData()
        formDataObj.append("file", newImages[i])

        const response = await fetch("/api/cloudinary-upload", {
          method: "POST",
          body: formDataObj,
        })

        if (!response.ok) {
          throw new Error("Failed to upload image")
        }

        const data = await response.json()
        uploadedImageUrls.push(data.url)
        finalAltTexts.push("")
      }

      // Update product in Firestore
      const productRef = doc(db, "products", productId)
      await updateDoc(productRef, {
        title: formData.title,
        desc: formData.desc,
        category: formData.category,
        images: uploadedImageUrls,
        altTexts: finalAltTexts,
        updatedAt: serverTimestamp(),
      })

      toast.success("Product updated successfully!")
      router.push("/admin/dashboard")
    } catch (error) {
      console.error("Error updating product:", error)
      toast.error("Failed to update product")
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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading product...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Edit Product
            </h1>
            <p className="text-sm text-muted-foreground">
              {formData.title || "Untitled Product"}
            </p>
          </div>
          <Button 
            variant="outline"
            onClick={() => router.push("/admin/dashboard")}
          >
            Back to Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>Edit product details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Product Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter product title"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="desc">Description *</Label>
                <Textarea
                  id="desc"
                  name="desc"
                  value={formData.desc}
                  onChange={handleInputChange}
                  placeholder="Enter product description"
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Existing Images */}
          {imageUrls.length > 0 && (
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle>Current Images ({imageUrls.length})</CardTitle>
                <CardDescription>Existing product images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {imageUrls.map((url, index) => (
                    <div key={index} className="group relative">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={url}
                          alt={`Product image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeExistingImage(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* New Images Upload */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Add More Images</CardTitle>
              <CardDescription>Upload additional product images ({newImages.length} selected)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6">
                <label className="cursor-pointer">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-medium">Click to upload images</p>
                    <p className="text-sm text-muted-foreground">or drag and drop</p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {imagePreviews.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="group relative">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeNewImagePreview(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/dashboard")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSaving}
              className="gap-2"
            >
              {isSaving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
