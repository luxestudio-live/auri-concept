"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { assetPath } from "@/lib/asset-path"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname() || "/"
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 animate-fade-in ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-border/30' 
        : 'bg-background shadow-sm border-border/10'
    }`}>
      <div className="mx-auto max-w-6xl flex items-center px-4 py-3 md:py-4">
        {/* Logo left */}
        <div className="flex items-center gap-2 min-w-[180px]">
          <Link href="/" className="flex items-center gap-2" aria-label="Auri Concept Home">
            <img
              src={assetPath("/transparent-logo.png")}
              alt="Auri Concept Logo"
              className="h-8 w-auto object-contain"
              style={{ maxWidth: 48 }}
              width={48}
              height={48}
            />
            <span className="text-2xl font-extrabold tracking-tight text-foreground" style={{ fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '-0.5px' }}>Auri Concept</span>
          </Link>
        </div>
        {/* Nav center */}
        <nav className="flex-1 flex items-center justify-center">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href === "/" && pathname === "/")
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-base font-semibold transition-colors duration-200 ${isActive ? "text-red-600 font-bold" : "text-foreground hover:text-primary/80"}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        {/* Controls right */}
        <div className="flex items-center gap-3 min-w-[180px] justify-end">
          <ThemeToggle />
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-md">
            <a
              href="https://www.instagram.com/auriconcept_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Auri Concept Instagram"
            >
              Instagram
            </a>
          </Button>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40 border border-border"
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {open ? (
                <line x1="18" y1="6" x2="6" y2="18" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden absolute inset-x-0 top-full z-40 bg-card border-b border-border shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href === "/" && pathname === "/")
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block text-sm px-3 py-2 rounded ${isActive ? "text-primary font-medium bg-primary/10" : "text-card-foreground hover:bg-accent hover:text-accent-foreground"}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
