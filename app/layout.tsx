import React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppShell } from "@/components/app-shell"

export const metadata: Metadata = {
  title: "Auri Concept",
  description: "Where Innovation Meets Elegance",
  generator: "Auri Concept",
  icons: {
    icon: [{ url: require("@/lib/asset-path").assetPath("/transparent-logo.png"), sizes: 'any', type: 'image/png' }],
    shortcut: [{ url: require("@/lib/asset-path").assetPath("/transparent-logo.png") }],
    apple: [{ url: require("@/lib/asset-path").assetPath("/transparent-logo.png") }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="min-h-dvh flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark", "midnight", "warm", "monochrome"]}
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
