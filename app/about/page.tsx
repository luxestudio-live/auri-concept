"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SocialLinks } from "@/components/social-links"
import { motion } from "framer-motion"
import { assetPath } from "@/lib/asset-path"

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <div className="pt-12 pb-8 mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-pretty text-4xl md:text-6xl font-bold leading-tight">Our Journey of Innovation and Elegance</h1>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Auri Concept stands at the intersection of sophisticated design and groundbreaking technology — crafting
            environments that inspire, comfort, and empower.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">We design spaces that speak luxury &amp; innovation ⚡</p>
          <p className="text-sm text-muted-foreground">Lights • Fans • Smart Controls • Door Locks 💡</p>
        </div>
      </motion.section>

      {/* Feature sections - alternating */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <div className="py-12 mx-auto max-w-6xl px-4 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Pioneering Design. Uncompromising Innovation.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our philosophy is rooted in the belief that true luxury is found in the seamless integration of form and
              function. We push the boundaries of design to create pieces that are not just objects, but statements —
              crafted with meticulous attention to detail and a vision for the future.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm text-muted-foreground">Driven by an unwavering commitment to aesthetic excellence.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm text-muted-foreground">Leveraging advanced technology for elegant, reliable solutions.</span>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-lg border border-border bg-muted">
              <Image src={assetPath("/designer-ceiling-light-installed-in-modern-living-.jpg")} alt="Interior" width={1200} height={800} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <div className="py-12 bg-card mx-auto max-w-6xl px-4 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-lg border border-border bg-muted">
              <Image src={assetPath("/modern-ceiling-fan-installed-in-bedroom.jpg")} alt="Fan" width={1200} height={800} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-semibold">Transforming Spaces, Elevating Lives.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Auri Concept is dedicated to enhancing daily life through thoughtfully designed products — intelligent
              lighting, biometric access, and smart controls that adapt to how you live.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm text-muted-foreground">Creating ambient lighting that transforms a house into a personalized sanctuary.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm text-muted-foreground">Integrating smart home controls for unparalleled convenience.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Promise + CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <div className="py-12 mx-auto max-w-6xl px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">The Auri Concept Promise: Unrivaled Quality.</h3>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every Auri Concept product is a testament to our relentless pursuit of perfection. We deliver not just a
            product, but a promise of enduring quality, sophisticated aesthetics, and exceptional performance.
          </p>

          <div className="mt-8 bg-pink-50 border border-pink-100 inline-block rounded-lg py-8 px-10">
            <h4 className="text-xl font-semibold">Experience the Auri Concept Difference.</h4>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Ready to transform your living or working environment into a realm of luxury and innovation? Discover how Auri Concept can elevate your space.</p>
            <div className="mt-6">
              <Button asChild>
                <a href="/contact" aria-label="Book a Consultation">Book a Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer note + social */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <div className="pb-12 mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center justify-center gap-4">
            <SocialLinks />
          </div>
        </div>
      </motion.section>
    </main>
  )
}
