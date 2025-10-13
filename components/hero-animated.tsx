"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroAnimated() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // slight delay so users notice the motion
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const baseTransition = "transition-opacity transition-transform duration-700 ease-out"
  const visible = "opacity-100 translate-y-0"
  const hidden = "opacity-0 translate-y-4"

  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div className={`flex flex-col justify-center order-last md:order-first ${baseTransition} md:opacity-100 ${mounted ? visible : hidden}`}>
          <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
            We design spaces that speak luxury {"&"} innovation
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Lighting, comfort, and security—curated for modern living. Discover high-end products engineered to
            elevate homes and commercial spaces.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{"Lights • Fans • Smart Controls • Door Locks"}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="#products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className={`aspect-[4/3] w-full overflow-hidden rounded-lg border border-border order-first md:order-last ${baseTransition} md:opacity-100 ${mounted ? visible : hidden}`}>
          <img
            src="/luxury-interior-lighting-with-modern-fixtures.jpg"
            alt="Curated luxury interior with modern lighting"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
