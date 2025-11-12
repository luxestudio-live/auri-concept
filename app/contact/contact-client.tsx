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
  // Special styling for email address
  const isEmail = title.toLowerCase().includes("email");
  return (
    <div className="rounded-lg border border-border bg-card p-6 text-center hover:shadow-md transition-shadow">
      <div className="text-primary text-3xl mb-3">{icon}</div>
      <h4 className="font-semibold text-lg text-card-foreground">{title}</h4>
      <p
        className={
          `mt-2 text-sm text-muted-foreground leading-relaxed ${isEmail ? 'break-all text-center text-[13px] md:text-sm font-medium' : 'whitespace-pre-wrap'}`
        }
        style={isEmail ? { wordBreak: 'break-all', lineHeight: 1.3 } : {}}
      >
        {subtitle}
      </p>
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
  const [submitted, setSubmitted] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitted(false)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch("https://formspree.io/f/xwpakrqn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      })
      if (res.ok) {
        toast?.({
          title: "Message sent",
          description: "Thanks! We’ll get back to you shortly.",
        })
        setSubmitted(true)
        form.reset()
      } else {
        const result = await res.json()
        throw new Error(result?.error || "Unknown error")
      }
    } catch (err) {
      console.error("[formspree] contact-form error:", err)
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
                  <ContactCard icon="📱" title="Personal Number" subtitle="+91 98193 55577" actionText="Message Us" href="https://wa.me/919819355577" />
                  <ContactCard icon="📞" title="Personal Phone" subtitle="+91 98193 55577" actionText="Call Us" href="tel:+919819355577" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <ContactCard icon="🏢" title="Office Number" subtitle="+91 91677 54524" actionText="Call Office" href="tel:+919167754524" />
                  <ContactCard icon="🏢" title="Office Number" subtitle="+91 85911 15736" actionText="Call Office" href="tel:+918591115736" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <ContactCard icon="✉️" title="Email Address" subtitle="info@auriconcept.com" actionText="Send Email" href="mailto:info@auriconcept.com" />
                  <ContactCard icon="📍" title="Showroom & Office" subtitle={"Unit no 12, bldg no.5, Jogani industrial premises, V.N.Purav Marg, Sion (E)- Chunabhatti, Maharashtra, India, 400022"} actionText="View on Map" href="https://maps.app.goo.gl/UfDvKTPQNxAnpx2P9" />
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
                <style>{`
                  form input, form textarea {
                    color: var(--foreground, #18181b) !important;
                    background: var(--input, #fff) !important;
                    border: 1.5px solid var(--border, #bbb) !important;
                  }
                  form input:focus, form textarea:focus {
                    background: #f0f4ff !important;
                    border-color: #0070f3 !important;
                  }
                  form input::placeholder, form textarea::placeholder {
                    color: #888 !important;
                  }
                  .dark form input, .dark form textarea {
                    color: var(--foreground, #f3f4f6) !important;
                    background: #232336 !important;
                    border-color: #333 !important;
                  }
                  .dark form input:focus, .dark form textarea:focus {
                    background: #18181b !important;
                    border-color: #60a5fa !important;
                  }
                  .dark form input::placeholder, .dark form textarea::placeholder {
                    color: #aaa !important;
                  }
                `}</style>
                <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Send Us a Message</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  We'd love to hear from you. Fill out the form below.
                </p>

                <form onSubmit={onSubmit} className="space-y-5" autoComplete="off">
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required pattern="[+0-9\s-]{10,}" autoComplete="tel" />
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

                  <Button
                    type="submit"
                    disabled={submitting}
                    className={
                      `w-full h-12 text-base flex items-center justify-center transition-all duration-300 ` +
                      (submitting ? "opacity-80 cursor-not-allowed" : "") +
                      (submitted ? " bg-green-600 text-white" : "")
                    }
                  >
                    {(() => {
                      if (submitting) {
                        return (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                            Sending...
                          </span>
                        );
                      } else if (submitted) {
                        return (
                          <span className="flex items-center gap-2">
                            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            Submitted
                          </span>
                        );
                      } else {
                        return "Send Message";
                      }
                    })()}
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
