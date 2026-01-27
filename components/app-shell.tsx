"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"

type AppShellProps = {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith("/admin")

  if (isAdmin) {
    return (
      <div className="min-h-dvh flex flex-col">
        <div className="border-b border-border bg-card/50 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Admin Panel</span>
            <Button asChild variant="outline" size="sm">
              <Link href="/" target="_blank" rel="noreferrer">
                Visit Main Website
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-dvh flex flex-col pt-[65px] md:pt-[73px]">
      <SiteHeader />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
