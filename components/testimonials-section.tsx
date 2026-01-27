"use client"

import { useEffect, useState } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Star, Quote } from "lucide-react"

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
    <section className="border-t border-border bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Trusted by Leading Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our valued clients across the design and lighting industry
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
            >
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              
              <div className="relative h-full rounded-2xl border border-border/40 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:-translate-y-1">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Rating Stars */}
                <div className="flex gap-2 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 transition-all ${
                        i < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/85 leading-relaxed mb-8 text-base line-clamp-6 group-hover:line-clamp-none">
                  "{testimonial.review}"
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-border/0 via-border/50 to-border/0 mb-6" />

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                      <span className="text-base font-bold text-primary-foreground">
                        {getInitials(testimonial.name)}
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-md -z-10" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {testimonial.name}
                    </h3>
                    {testimonial.company && (
                      <p className="text-sm text-muted-foreground truncate">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 pt-12 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            Trusted by leading professionals in design, architecture, and interior spaces
          </p>
        </div>
      </div>
    </section>
  )
}
