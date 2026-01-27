"use client"

import { useEffect, useState } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

type Testimonial = {
  id: string
  name: string
  company?: string
  review: string
  rating: number
  createdAt?: any
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const testimonialsRef = collection(db, "testimonials")
        const q = query(testimonialsRef, orderBy("createdAt", "desc"))
        const querySnapshot = await getDocs(q)
        
        const data: Testimonial[] = []
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as Testimonial)
        })
        setTestimonials(data)
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  if (isLoading) {
    return null
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold md:text-3xl mb-2">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Trusted by professionals across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-border/50 shadow-lg bg-card hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    {testimonial.company && (
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
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

                <p className="text-foreground/80 leading-relaxed text-sm">
                  {testimonial.review}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
