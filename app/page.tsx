import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
// ...existing code...
import { AutoCarousel } from "@/components/auto-carousel"
import { assetPath } from "@/lib/asset-path"

function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Auri Concept Home">
          <div className="flex items-center">
            <img 
              src={assetPath("/auri-logo.svg")}
              alt="" 
              className="h-8 w-auto"
              style={{ maxWidth: '120px' }}
            />
          </div>
          <span className="text-xl font-semibold" style={{ color: '#1F2937' }}>Concept</span>
        </Link>
        <nav className="flex items-center gap-3"> 
          <Link href="#about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="#contact" className="text-sm hover:underline">
            Contact
          </Link>
          <Button asChild className="ml-1">
            <a
              href="https://www.instagram.com/auriconcept_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Auri Concept Instagram"
            >
              Instagram
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

import HeroWrapper from "@/components/hero-wrapper"

function Hero() {
  return <HeroWrapper />
}

type Category = {
  key: string
  title: string
  desc: string
  productImg: string
  installImg: string
}

const categories: Category[] = [
  {
    key: "Eureka Lights",
    title: "Eureka Lights",
    desc: "Illuminate your world with architectural brilliance and ambient elegance—Eureka Lights transform every space into a statement of luxury.",
    productImg: assetPath("/Eureka 1.jpg"),
    installImg: assetPath("/Eureka 2.jpg"),
  },
  {
    key: "Platina Lights",
    title: "Platina Lights",
    desc: "Experience the perfect blend of silent operation and premium finishes—Platina Lights bring comfort and sophistication to your interiors.",
    productImg: assetPath("/Platina1.jpg"),
    installImg: assetPath("/Platina2.jpg"),
  },
  {
    key: "Mamba Lights",
    title: "Mamba Lights",
    desc: "Effortless control meets modern design—Mamba Lights offer intuitive dimming, smart scenes, and seamless automation for every mood.",
    productImg: assetPath("/Mamba1.jpg"),
    installImg: assetPath("/Mamba2.jpg"),
  },
  {
    key: "Kaama Lights",
    title: "Kaama Lights",
    desc: "Elevate your security with style—Kaama Lights feature smart locking systems that combine elegance and peace of mind.",
    productImg: assetPath("/Kaama1.jpg"),
    installImg: assetPath("/Kaama2.jpg"),
  },
  {
    key: "Olivia Lights",
    title: "Olivia Lights",
    desc: "Create unforgettable atmospheres—Olivia Lights deliver ambient beauty and architectural flair for homes that inspire.",
    productImg: assetPath("/Olivia1.jpg"),
    installImg: assetPath("/olivia2.jpg"),
  },
  {
    key: "Eliza Lights",
    title: "Eliza Lights",
    desc: "Whisper-quiet performance and refined aesthetics—Eliza Lights are crafted for those who value both comfort and luxury.",
    productImg: assetPath("/Eliza1.jpg"),
    installImg: assetPath("/Eliza2.jpg"),
  },
  {
    key: "Limca Lights",
    title: "Limca Lights",
    desc: "Smart living made simple—Limca Lights provide intuitive automation and scene control for a truly connected home.",
    productImg: assetPath("/Limca1.jpg"),
    installImg: assetPath("/Limca2.jpg"),
  },
  {
    key: "Magna Lights",
    title: "Magna & Siara Lights",
    desc: "Secure your space with innovation—Magna & Siara Lights offer advanced locking solutions with a touch of elegance.",
    productImg: assetPath("/Siara1.jpg"),
    installImg: assetPath("/Magna1.jpg"),
  },
  {
    key: "Krsna & Orina Lights",
    title: "Krsna & Orina Lights",
    desc: "Artful illumination for every occasion—Krsna & Orina Lights blend ambient warmth with architectural sophistication.",
    productImg: assetPath("/Krsna1.jpg"),
    installImg: assetPath("/Orina.jpg"),
  },
  {
    key: "Platina Lights",
    title: "Tisya & Presa Lights",
    desc: "Premium airflow and stunning design—Tisya & Presa Lights redefine comfort with silent, efficient technology.",
    productImg: assetPath("/Tisya.jpg"),
    installImg: assetPath("/Presa.jpg"),
  },
  {
    key: "Mamba Lights",
    title: "Switches",
    desc: "Seamless control at your fingertips—our Switches combine intuitive design with smart automation for effortless living.",
    productImg: assetPath("/Switch1.jpg"),
    installImg: assetPath("/Switch2.jpg"),
  },
  {
    key: "Kaama Lights",
    title: "Smart Switches",
    desc: "Upgrade your home with intelligent access—Smart Switches deliver secure, elegant solutions for modern lifestyles.",
    productImg: assetPath("/SSwitch1.jpg"),
    installImg: assetPath("/SSwitch2.jpg"),
  },
  {
    key: "Fans",
    title: "Smart Fans",
    desc: "Refresh your space with innovation—Smart Fans offer silent operation and smart features for ultimate comfort.",
    productImg: assetPath("/Atomberg1.png"),
    installImg: assetPath("/Atomberg2.png"),
  },
  {
    key: "Platina Lights",
    title: "Smart Fans",
    desc: "Silent, efficient airflow with premium finishes—Smart Fans bring a new level of comfort and style to your home.",
    productImg: assetPath("/Atomberg3.png"),
    installImg: assetPath("/Atomberg4.png"),
  },
  {
    key: "Mamba Lights",
    title: "Altis Smart Lock",
    desc: "Advanced security meets contemporary design—Altis Smart Lock protects your home with style and intelligence.",
    productImg: assetPath("/Atlis1.png"),
    installImg: assetPath("/Atlis2.png"),
  },
  {
    key: "Kaama Lights",
    title: "Qlick Smart Lock",
    desc: "Quick, secure, and stylish—Qlick Smart Lock brings peace of mind and modern aesthetics to your entryways.",
    productImg: assetPath("/Qlick1.png"),
    installImg: assetPath("/Qlick2.jpg"),
  },
  {
    key: "Eureka Lights",
    title: "Smart Automation",
    desc: "Transform your home into a smart haven—our automation solutions integrate lighting, security, and comfort seamlessly.",
    productImg: assetPath("/smartliving1.jpg"),
    installImg: assetPath("/smartliving2.jpg"),
  },
  {
    key: "Platina Lights",
    title: "Premium Lights",
    desc: "Discover the pinnacle of lighting design—Premium Lights combine luxury, performance, and artistry for extraordinary spaces.",
    productImg: assetPath("/premium-light1.jpg"),
    installImg: assetPath("/premium-light2.jpg"),
  },
  {
    key: "Mamba Lights",
    title: "Premium Lights",
    desc: "Experience intuitive control and breathtaking illumination—Premium Lights set the standard for smart, beautiful spaces.",
    productImg: assetPath("/premium-light7.jpg"),
    installImg: assetPath("/premium-light8.jpg"),
  },
  {
    key: "Kaama Lights",
    title: "Premium Lights",
    desc: "Secure, elegant, and innovative—Premium Lights redefine what it means to live in style.",
    productImg: assetPath("/premium-light3.jpg"),
    installImg: assetPath("/premium-light4.jpg"),
  },
  {
    key: "Kaama Lights",
    title: "Premium Lights",
    desc: "Premium Lights are the ultimate choice for discerning homeowners.",
    productImg: assetPath("/premium-light5.jpg"),
    installImg: assetPath("/premium-light6.jpg"),
  },
 ]

function ProductCategories() {
  return (
    <section id="products" aria-labelledby="products-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 id="products-heading" className="text-pretty text-2xl font-semibold md:text-3xl">
            Our Product Categories
          </h2>
          <Button asChild variant="outline">
            <a href="#contact" aria-label="Contact for product inquiries">
              Request a Catalog
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((c) => (
            <Card key={c.key} className="overflow-hidden bg-card-subtle shadow-none border-none p-2 md:p-3 rounded-2xl">
              <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <AutoCarousel images={[c.productImg, c.installImg]} altTexts={[`${c.title} product image`, `${c.title} installed in context`]} />
                </div>
              </div>
              <CardHeader className="pt-2 pb-0">
                <CardTitle className="text-xl text-foreground">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="leading-relaxed text-foreground/80">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
          {/* Sweet ending card */}
          <Card className="overflow-hidden bg-card-subtle shadow-none border-none p-2 md:p-3 rounded-2xl flex items-center justify-center min-h-[120px]">
            <CardHeader className="pt-2 pb-0 w-full text-center">
              <CardTitle className="text-xl text-foreground">And many more...</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 w-full text-center">
              <p className="leading-relaxed text-foreground/80">Discover even more exclusive products in our full catalog!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function BrandHighlights() {
  return (
    <section id="about" className="bg-card border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-card-foreground">Curated Luxury</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium brands and products selected for performance, finish, and longevity.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-card-foreground">Modern Innovation</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smart, scalable systems that integrate seamlessly into your lifestyle.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-card-foreground">Trusted Distribution</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reliable sourcing and support for homeowners, designers, and builders.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function InstagramCTA() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-pretty text-2xl font-semibold md:text-3xl text-card-foreground">See what inspires us</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Explore real projects, new arrivals, and styling ideas on Instagram.
            </p>
            <Button asChild className="mt-5">
              <a
                href="https://www.instagram.com/auriconcept_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Auri Concept Instagram"
              >
                Follow @auriconcept_
              </a>
            </Button>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border">
            <img
              src={assetPath("/instagram-grid-luxury-lighting.jpg")}
              alt="Instagram style grid showing luxury lighting and interiors"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Ready to elevate your space?</h2>
            <p className="mt-2 text-primary-foreground/90 leading-relaxed">
              Share your project needs. We’ll recommend the right products and configurations.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Button asChild variant="secondary">
              <a href="mailto:hello@auriconcept.com" aria-label="Email Auri Concept">
                Email Us
              </a>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://www.instagram.com/auriconcept_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Auri Concept on Instagram"
              >
                Message on IG
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({
  name,
  className,
}: Readonly<{ name: "instagram" | "facebook" | "linkedin" | "youtube" | "whatsapp"; className?: string }>) {
  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const

  switch (name) {
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" {...strokeProps} />
          <circle cx="12" cy="12" r="3.5" {...strokeProps} />
          <circle cx="17.5" cy="6.5" r="1" {...strokeProps} />
        </svg>
      )
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <path d="M13 10h3V7h-3a3 3 0 0 0-3 3v3H7v3h3v6h3v-6h3l1-3h-4v-3a1 1 0 0 1 1-1Z" {...strokeProps} />
        </svg>
      )
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" {...strokeProps} />
          <path d="M8 17v-6" {...strokeProps} />
          <circle cx="8" cy="8" r="1" {...strokeProps} />
          <path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" {...strokeProps} />
        </svg>
      )
    case "youtube":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <path
            d="M22 12s0-3.5-.45-5.2a2.5 2.5 0 0 0-1.94-1.94C17.9 4.4 12 4.4 12 4.4s-5.9 0-7.6.46A2.5 2.5 0 0 0 2.46 6.8C2 8.5 2 12 2 12s0 3.5.46 5.2a2.5 2.5 0 0 0 1.94 1.94c1.7.46 7.6.46 7.6.46s5.9 0 7.6-.46a2.5 2.5 0 0 0 1.94-1.94c.46-1.7.46-5.2.46-5.2Z"
            {...strokeProps}
          />
          <path d="M10 9.75 15 12l-5 2.25V9.75Z" {...strokeProps} />
        </svg>
      )
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <path d="M20 12a8 8 0 1 1-14.32 4.9L4 21l4.2-1.1A8 8 0 1 1 20 12Z" {...strokeProps} />
          <path
            d="M8.5 9.5c.3-1 1-1 1.5-.8.4.2.8.9 1 1.2.2.3.1.5 0 .7-.2.2-.6.5-.4 1 .2.6 1.1 1.7 1.9 2.2.6.4 1 .3 1.2.1.2-.2.6-.8.9-.7.4 0 1.9.9 2 .9.2.1.2.4.1.7-.2.5-.9 1.4-1.7 1.6-.9.2-2 .1-3.3-.6-1.2-.7-2.7-2-3.5-3.3-.9-1.4-1.2-2.7-1-3.4Z"
            {...strokeProps}
          />
        </svg>
      )
  }
}

function SocialLinkItem({
  href,
  label,
  children,
}: Readonly<{
  href: string
  label: string
  children: React.ReactNode
}>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex size-10 items-center justify-center rounded-full bg-background text-foreground ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground hover:ring-primary hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  )
}

function SocialLinks() {
  return (
    <nav aria-label="Follow Auri Concept" className="flex items-center gap-3">
      <SocialLinkItem href="https://www.instagram.com/auriconcept_/" label="Instagram">
        <SocialIcon name="instagram" className="size-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://www.facebook.com/auriconcept" label="Facebook">
        <SocialIcon name="facebook" className="size-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://www.linkedin.com/company/auriconcept" label="LinkedIn">
        <SocialIcon name="linkedin" className="size-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://www.youtube.com/channel/UCauriconcept" label="YouTube">
        <SocialIcon name="youtube" className="size-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://wa.me/0000000000" label="WhatsApp">
        <SocialIcon name="whatsapp" className="size-5" />
      </SocialLinkItem>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Auri Concept. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <SocialLinks />
          <a href="mailto:hello@auriconcept.com" className="text-xs hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/0000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Auri Concept on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      style={{ width: 60, height: 60 }}
    >
      <SocialIcon name="whatsapp" className="size-6" />
    </a>
  )
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <BrandHighlights />
      <InstagramCTA />
      <ContactCTA />
      {/* Header/Footer are provided by the root layout */}
    </main>
  )
}
