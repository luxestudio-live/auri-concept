import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AutoCarousel } from "@/components/auto-carousel"
import FeaturedProductZoom from "@/components/featured-product-zoom"
import { assetPath } from "@/lib/asset-path"
import HeroWrapper from "@/components/hero-wrapper"

function Hero() {
  return <HeroWrapper />
}


type Category = {
  key: string
  title: string
  desc: string
  images: string[]
  altTexts: string[]
}

const categories: Category[] = [
  {
    key: "Pernia Lights",
    title: "Pernia Lights",
    desc: "Illuminate your world with architectural brilliance and ambient elegance—Pernia Lights transform every space into a statement of luxury.",
    images: [assetPath("/Pernia1.jpeg"), assetPath("/Pernia2.jpeg")],
    altTexts: ["Pernia Lights product image 1", "Pernia Lights product image 2"],
  },
  {
    key: "Viona Lights",
    title: "Viona Lights",
    desc: "Experience the perfect blend of silent operation and premium finishes—Viona Lights bring comfort and sophistication to your interiors.",
    images: [assetPath("/Viona1.jpeg"), assetPath("/Viona2.jpeg"), assetPath("/Viona3.jpeg")],
    altTexts: ["Viona Lights product image 1", "Viona Lights product image 2", "Viona Lights product image 3"],
  },
  {
    key: "Vatica Lights",
    title: "Vatica Lights",
    desc: "Effortless control meets modern design—Vatica Lights offer intuitive dimming, smart scenes, and seamless automation for every mood.",
    images: [assetPath("/Vatica1.jpeg"), assetPath("/Vatica2.jpeg"), assetPath("/Vatica3.jpeg")],
    altTexts: ["Vatica Lights product image 1", "Vatica Lights product image 2", "Vatica Lights product image 3"],
  },
  {
    key: "Tiara Lights",
    title: "Tiara Lights",
    desc: "Create unforgettable atmospheres—Tiara Lights deliver ambient beauty and architectural flair for homes that inspire.",
    images: [assetPath("/Tiara1.jpeg"), assetPath("/Tiara2.jpeg"), assetPath("/Tiara3.jpeg")],
    altTexts: ["Tiara Lights product image 1", "Tiara Lights product image 2", "Tiara Lights product image 3"],
  },
  {
    key: "Yesha Lights",
    title: "Yesha Lights",
    desc: "Whisper-quiet performance and refined aesthetics—Yesha Lights are crafted for those who value both comfort and luxury.",
    images: [assetPath("/Yesha1.jpeg"), assetPath("/Yesha2.jpeg"), assetPath("/Yesha3.jpeg"), assetPath("/Yesha4.jpeg")],
    altTexts: ["Yesha Lights product image 1", "Yesha Lights product image 2", "Yesha Lights product image 3", "Yesha Lights product image 4"],
  },

  {
    key: "Elara Lights",
    title: "Elara Lights",
    desc: "Whisper-quiet performance and refined aesthetics—Elara Lights are crafted for those who value both comfort and luxury.",
    images: [assetPath("/Elara1.jpeg"), assetPath("/Elara2.jpeg"), assetPath("/Elara3.jpeg"), assetPath("/Elara4.jpeg")],
    altTexts: [
      "Elara Lights product image 1",
      "Elara Lights product image 2",
      "Elara Lights product image 3",
      "Elara Lights product image 4",
    ],
  },
  {
    key: "Persia Lights",
    title: "Persia Lights",
    desc: "Whisper-quiet performance and refined aesthetics—Persia Lights are crafted for those who value both comfort and luxury.",
    images: [assetPath("/Persia1.jpeg"), assetPath("/Persia2.jpeg"), assetPath("/Persia3.jpeg"), assetPath("/Persia4.jpeg")],
    altTexts: [
      "Persia Lights product image 1",
      "Persia Lights product image 2",
      "Persia Lights product image 3",
      "Persia Lights product image 4",
    ],
  },
  {
    key: "Freya Lights",
    title: "Freya Lights",
    desc: "Smart living made simple—Freya Lights provide intuitive automation and scene control for a truly connected home.",
    images: [assetPath("/Freya1.jpeg"), assetPath("/Freya2.jpeg")],
    altTexts: ["Freya Lights product image 1", "Freya Lights product image 2"],
  },
  {
    key: "Breeza Lights",
    title: "Breeza Lights",
    desc: "Smart living made simple—Breeza Lights provide intuitive automation and scene control for a truly connected home.",
    images: [assetPath("/Breeza1.jpeg"), assetPath("/Breeza2.jpeg")],
    altTexts: ["Breeza Lights product image 1", "Breeza Lights product image 2"],
  },
  {
    key: "Strip Lights",
    title: "Strip Lights",
    desc: "Secure your space with innovation—Strip Lights offer advanced locking solutions with a touch of elegance.",
    images: [assetPath("/StripLight1.jpeg"), assetPath("/StripLight2.jpeg"), assetPath("/StripLight3.jpeg"), assetPath("/StripLight4.jpeg")],
    altTexts: [
      "Strip Lights product image 1",
      "Strip Lights product image 2",
      "Strip Lights product image 3",
      "Strip Lights product image 4",
    ],
  },
  {
    key: "Driver/SMPS",
    title: "Driver/SMPS",
    desc: "Artful illumination for every occasion—Gamma Lights blend ambient warmth with architectural sophistication.",
    images: [assetPath("/Gamma1.jpeg"), assetPath("/Gamma2.jpeg"), assetPath("/Gamma3.jpeg")],
    altTexts: [
      "Gamma Lights product image 1",
      "Gamma Lights product image 2",
      "Gamma Lights product image 3",
    ],
  },
  {
    key: "Rope Lights",
    title: "Rope Lights",
    desc: "Artful illumination for every occasion—Gamma Lights blend ambient warmth with architectural sophistication.",
    images: [assetPath("/RopeLight1.jpeg"), assetPath("/RopeLight2.jpeg"), assetPath("/RopeLight3.jpeg"), assetPath("/RopeLight4.jpeg")],
    altTexts: [
      "Rope Lights product image 1",
      "Rope Lights product image 2",
      "Rope Lights product image 3",
    ],
  },
  {
    key: "Wall Lights",
    title: "Wall Lights",
    desc: "Premium airflow and stunning design—Wall Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Corea1.jpeg"), assetPath("/Corea2.jpeg")],
    altTexts: ["Corea Lights product image 1", "Corea Lights product image 2"],
  },
  {
    key: "Wall Lights",
    title: "Wall Lights",
    desc: "Premium airflow and stunning design—Wall Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Haina1.jpeg"), assetPath("/Haina2.jpeg")],
    altTexts: ["Haina Lights product image 1", "Haina Lights product image 2"],
  },
  {
    key: "Wall Lights",
    title: "Wall Lights",
    desc: "Premium airflow and stunning design—Wall Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Kaama1.jpeg"), assetPath("/Kaama2.jpeg")],
    altTexts: ["kaama Lights product image 1", "kaama Lights product image 2"],
  },
  {
    key: "Wall Lights",
    title: "Wall Solar Lights",
    desc: "Premium airflow and stunning design—Wall Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Kiaora1.jpeg"), assetPath("/Kiaora2.jpeg"), assetPath("/Limca1.jpeg")],
    altTexts: ["Kiora Lights product image 1", "Kiora Lights product image 2"],
  },
  {
    key: "Bollard Lights",
    title: "Bollard Lights",
    desc: "Premium airflow and stunning design—Bollard Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Kymaa1.jpeg"), assetPath("/Kymaa2.jpeg")],
    altTexts: ["Kymaa Lights product image 1", "Kymaa Lights product image 2"],
  },
  {
    key: "Bollard Lights",
    title: "Bollard Solar Lights",
    desc: "Premium airflow and stunning design—Bollard Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Kea1.jpeg"), assetPath("/Kea2.jpeg")],
    altTexts: ["Kea Lights product image 1", "Kea Lights product image 2"],
  },
  {
    key: "Bollard Lights",
    title: "Bollard Lights",
    desc: "Premium airflow and stunning design—Bollard Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Mamba1.jpeg"), assetPath("/Mamba2.jpeg")],
    altTexts: ["Mamba Lights product image 1", "Mamba Lights product image 2"],
  },
  {
    key: "Bollard Lights",
    title: "Bollard Lights",
    desc: "Premium airflow and stunning design—Bollard Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Jariva1.jpeg"), assetPath("/Jariva2.jpeg")],
    altTexts: ["jariva Lights product image 1", "jariva Lights product image 2"],
  },
  {
    key: "Gate Lights",
    title: "Gate Lights",
    desc: "Premium airflow and stunning design—Garden Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Tresa1.jpeg"), assetPath("/Tresa2.jpeg")],
    altTexts: ["Tresa Lights product image 1", "Tresa Lights product image 2"],
  },
  {
    key: "Garden Lights",
    title: "Garden Lights",
    desc: "Premium airflow and stunning design—Garden Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Fiesta1.jpeg"), assetPath("/Fiesta2.jpeg")],
    altTexts: ["Fiesta Lights product image 1", "Fiesta Lights product image 2"],
  },
  {
    key: "Garden Lights",
    title: "Garden Lights",
    desc: "Premium airflow and stunning design—Garden Lights redefine comfort with silent, efficient technology.",
    images: [assetPath("/Shanaya1.jpeg"), assetPath("/Shanaya2.jpeg"),assetPath("/Hydra1.jpeg")],
    altTexts: ["Shanaya Lights product image 1", "Shanaya Lights product image 2"],
  },
  // {
  //   key: "Hydra & Limca Lights",
  //   title: "Hydra & Limca Lights",
  //   desc: "Premium airflow and stunning design—Hydra & Limca Lights redefine comfort with silent, efficient technology.",
  //   images: [assetPath("/Hydra1.jpeg"), assetPath("/Limca1.jpeg")],
  //   altTexts: ["jariva Lights product image 1", "jariva Lights product image 2"],
  // },
  {
    key: "Wires & Cabels",
    title: "Wires & Cabels",
    desc: "Secure your space with innovation—Vaaya Wire offer advanced locking solutions with a touch of elegance.",
    images: [assetPath("/Wire1.jpeg"), assetPath("/Wire2.jpeg"), assetPath("/Wire3.jpeg"), assetPath("/Wire4.jpeg")],
    altTexts: [
      "Vaaya Wire product image 1",
      "Vaaya Wire product image 2",
      "Vaaya Wire product image 3",
      "Vaaya Wire product image 4",
    ],
  },
  {
    key: "Wires & Cabels",
    title: "Wires & Cabels",
    desc: "Secure your space with innovation—Vaaya Wire offer advanced locking solutions with a touch of elegance.",
    images: [assetPath("/Wire5.jpeg"), assetPath("/Wire6.jpeg"), assetPath("/Wire7.jpeg"), assetPath("/Wire8.jpeg")],
    altTexts: [
      "Vaaya Wire product image 1",
      "Vaaya Wire product image 2",
      "Vaaya Wire product image 3",
      "Vaaya Wire product image 4",
    ],
  },



  {
    key: "Mamba Lights",
    title: "Switches",
    desc: "Seamless control at your fingertips—our Switches combine intuitive design with smart automation for effortless living.",
    images: [assetPath("/Switch1.jpg"), assetPath("/Switch2.jpg"), assetPath("/Switches1.jpeg"), assetPath("/Switches2.jpeg")],
    altTexts: ["Switches product image 1", "Switches product image 2"],
  },
  {
    key: "Kaama Lights",
    title: "Smart Switches & Automation",
    desc: "Upgrade your home with intelligent access—Smart Switches deliver secure, elegant solutions for modern lifestyles.",
    images: [assetPath("/SSwitch1.jpg"),assetPath("/smartliving1.jpg"), assetPath("/smartliving2.jpg"), assetPath("/SSwitch2.jpg"), assetPath("/SSwitches1.jpeg"), assetPath("/SSwitches2.jpeg"), assetPath("/SSwitches3.jpeg")],
    altTexts: ["Smart Switches product image 1", "Smart Switches product image 2"],
  },
  {
    key: "Fans",
    title: "Smart Fans",
    desc: "Refresh your space with innovation—Smart Fans offer silent operation and smart features for ultimate comfort.",
    images: [assetPath("/Atomberg1.png"), assetPath("/Atomberg2.png")],
    altTexts: ["Smart Fans product image 1", "Smart Fans product image 2"],
  },
  {
    key: "Platina Lights",
    title: "Smart Fans",
    desc: "Silent, efficient airflow with premium finishes—Smart Fans bring a new level of comfort and style to your home.",
    images: [assetPath("/Atomberg3.png"), assetPath("/Atomberg4.png")],
    altTexts: ["Smart Fans product image 3", "Smart Fans product image 4"],
  },
  {
    key: "Mamba Lights",
    title: "Altis Smart Lock",
    desc: "Advanced security meets contemporary design—Altis Smart Lock protects your home with style and intelligence.",
    images: [assetPath("/Atlis1.png"), assetPath("/Atlis2.png")],
    altTexts: ["Altis Smart Lock product image 1", "Altis Smart Lock product image 2"],
  },
  {
    key: "Kaama Lights",
    title: "Qlick Smart Lock",
    desc: "Quick, secure, and stylish—Qlick Smart Lock brings peace of mind and modern aesthetics to your entryways.",
    images: [assetPath("/Qlick1.png"), assetPath("/Qlick2.jpg")],
    altTexts: ["Qlick Smart Lock product image 1", "Qlick Smart Lock product image 2"],
  },
  // {
  //   key: "Eureka Lights",
  //   title: "Smart Automation",
  //   desc: "Transform your home into a smart haven—our automation solutions integrate lighting, security, and comfort seamlessly.",
  //   images: [assetPath("/smartliving1.jpg"), assetPath("/smartliving2.jpg")],
  //   altTexts: ["Smart Automation product image 1", "Smart Automation product image 2"],
  // },
  // {
  //   key: "Platina Lights",
  //   title: "Premium Lights",
  //   desc: "Discover the pinnacle of lighting design—Premium Lights combine luxury, performance, and artistry for extraordinary spaces.",
  //   images: [assetPath("/premium-light1.jpg"), assetPath("/premium-light2.jpg")],
  //   altTexts: ["Premium Lights product image 1", "Premium Lights product image 2"],
  // },
  // {
  //   key: "Mamba Lights",
  //   title: "Premium Lights",
  //   desc: "Experience intuitive control and breathtaking illumination—Premium Lights set the standard for smart, beautiful spaces.",
  //   images: [assetPath("/premium-light7.jpg"), assetPath("/premium-light8.jpg")],
  //   altTexts: ["Premium Lights product image 7", "Premium Lights product image 8"],
  // },
  // {
  //   key: "Kaama Lights",
  //   title: "Premium Lights",
  //   desc: "Secure, elegant, and innovative—Premium Lights redefine what it means to live in style.",
  //   images: [assetPath("/premium-light3.jpg"), assetPath("/premium-light4.jpg")],
  //   altTexts: ["Premium Lights product image 3", "Premium Lights product image 4"],
  // },
  // {
  //   key: "Kaama Lights",
  //   title: "Premium Lights",
  //   desc: "Premium Lights are the ultimate choice for discerning homeowners.",
  //   images: [assetPath("/premium-light5.jpg"), assetPath("/premium-light6.jpg")],
  //   altTexts: ["Premium Lights product image 5", "Premium Lights product image 6"],
  // },
 ]


function AutomationSection() {
  // Use a vertical/portrait video for automation
  const videoSrc = assetPath("/Automation-Video.mp4");
  return (
    <section className="border-t border-border bg-card" id="automation-section">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl mb-2 text-card-foreground">Smart Automation</h2>
          <p className="text-lg text-card-foreground/80 mb-2">
            Experience seamless living with our advanced smart automation solutions. Effortlessly control lighting, security, and comfort from anywhere. Integrate with voice assistants, schedule routines, and enjoy a truly connected home.
          </p>
          <ul className="list-disc pl-5 text-card-foreground/70 text-base">
            <li>Lighting & Ambience Control</li>
            <li>Smart Scenes & Scheduling</li>
            <li>Voice & App Integration</li>
            <li>Energy Efficiency</li>
            <li>Security & Access Automation</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-[320px] h-[480px] object-cover border border-border shadow bg-black"
            style={{ aspectRatio: '9/16', maxHeight: 480, maxWidth: 320 }}
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </div>
    </section>
  );
}

function ProductCategories() {
  // Find the index of the Smart Switches product
  const smartSwitchIndex = categories.findIndex(
    (c) => c.title.toLowerCase().includes("smart switch")
  );
  // Split categories before and after Smart Switches
  const before = smartSwitchIndex === -1 ? categories : categories.slice(0, smartSwitchIndex);
  const after = smartSwitchIndex === -1 ? [] : categories.slice(smartSwitchIndex);
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
          {before.map((c) => (
            <Card key={c.key} className="overflow-hidden bg-card-subtle shadow-none border-none p-2 md:p-3 rounded-2xl">
              <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <AutoCarousel images={c.images} altTexts={c.altTexts} />
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
        </div>
      </div>
      {/* Automation section inserted here */}
      <AutomationSection />
      <div className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {after.map((c) => (
            <Card key={c.key} className="overflow-hidden bg-card-subtle shadow-none border-none p-2 md:p-3 rounded-2xl">
              <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <AutoCarousel images={c.images} altTexts={c.altTexts} />
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
          {/* Sweet ending card only after all products */}
          {after.length > 0 && (
            <Card className="overflow-hidden bg-card-subtle shadow-none border-none p-2 md:p-3 rounded-2xl flex items-center justify-center min-h-[120px]">
              <CardHeader className="pt-2 pb-0 w-full text-center">
                <CardTitle className="text-xl text-foreground">And many more...</CardTitle>
              </CardHeader>
              <CardContent className="pb-2 w-full text-center">
                <p className="leading-relaxed text-foreground/80">Discover even more exclusive products in our full catalog!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
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
              src={assetPath("/auri-instagram.png")}
              alt="Auri Concept Instagram grid: luxury lighting and interiors"
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
  <SocialLinkItem href="https://wa.me/919819355577" label="WhatsApp">
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
      href="https://wa.me/919819355577"
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



// featured product is now handled by a client component in components/featured-product.tsx

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProductZoom
        productName="Shloka Series Magnetic Track Light"
        videoSrc={assetPath("/Shloka.mp4")}
        images={[
          assetPath("/Shloka1.jpeg"),
          assetPath("/Shloka2.jpeg"),
          assetPath("/Shloka3.jpeg"),
          assetPath("/Shloka4.jpeg"),
          assetPath("/Shloka5.jpeg"),
        ]}
      />
      <ProductCategories />
      <BrandHighlights />
      <InstagramCTA />
      <ContactCTA />
      {/* Header/Footer are provided by the root layout */}
    </main>
  )
}
