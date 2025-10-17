"use client"

import React from "react"
import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

function ContactCard({ title, subtitle, actionText, href, icon }: Readonly<{ title: string; subtitle: string; actionText: string; href: string; icon: string }>) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 text-center hover:shadow-md transition-shadow">
      <div className="text-primary text-3xl mb-3">{icon}</div>
      <h4 className="font-semibold text-lg text-card-foreground">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">{subtitle}</p>
      <div className="mt-4">
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline transition-colors">
          {actionText}
        </a>
      </div>
    </div>
  )
}

export default function ContactClientPage() {
  const [submitting, setSubmitting] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const form = e.currentTarget
      const data = Object.fromEntries(new FormData(form).entries())
      console.log("[v0] contact-form submit:", data)
      // Simulate success; integrate API/server action later if needed.
      await new Promise((r) => setTimeout(r, 600))
      toast?.({
        title: "Message sent",
        description: "Thanks! We’ll get back to you shortly.",
      })
      form.reset()
    } catch (err) {
      console.error("[v0] contact-form error:", err)
      toast?.({
        title: "Something went wrong",
        description: "Please try again or reach us via email/phone.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="bg-gradient-to-b from-background to-muted/20 py-16">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get in Touch with Auri Concept
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products? We're here to help you transform your space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column: contact cards */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <ContactCard icon="📱" title="WhatsApp" subtitle="+91 1234 123-4567" actionText="Message Us" href="https://wa.me/919876543210" />
                  <ContactCard icon="📞" title="Phone Number" subtitle="+91 8762 987-6543" actionText="Call Us" href="tel:+918762987654" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <ContactCard icon="✉️" title="Email Address" subtitle="info@auriconcept.com" actionText="Send Email" href="mailto:info@auriconcept.com" />
                  <ContactCard icon="📍" title="Showroom & Office" subtitle="123 Luxury Lane, Mumbai, MH 400001" actionText="View on Map" href="#" />
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-card-foreground">Connect with Us</h3>
                  <div className="flex justify-center">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column: form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Send Us a Message</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  We'd love to hear from you. Fill out the form below.
                </p>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="Jo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="jo@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Inquiry about Smart Home Solutions" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your project or inquiry..." 
                      rows={5} 
                      required 
                    />
                  </div>

                  <Button type="submit" disabled={submitting} className="w-full h-12 text-base">
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
