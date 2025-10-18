import React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { PageTransition } from "@/components/page-transition"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Auri Concept",
  description: "Created with love",
  generator: "Auri Concept",
  icons: {
     icon: [{ url: '/ac-logo.svg', sizes: 'any', type: 'image/svg+xml' }],
     shortcut: [{ url: '/ac-logo.svg' }],
     apple: [{ url: '/ac-logo.svg' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col pt-[65px] md:pt-[73px]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark", "midnight", "warm", "monochrome"]}
        >
          <SiteHeader />
          <PageTransition>
            {children}
          </PageTransition>
          <SiteFooter />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  )
}
