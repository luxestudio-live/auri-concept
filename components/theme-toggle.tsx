"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Palette } from "lucide-react"

const themes = [
  { value: "light", label: "Light", icon: "☀️", description: "Clean & Bright" },
  { value: "dark", label: "Dark", icon: "🌙", description: "Elegant Night" },
  { value: "midnight", label: "Midnight", icon: "🌌", description: "Deep Blue Luxury" },
  { value: "warm", label: "Warm", icon: "🌅", description: "Cream & Beige" },
  { value: "monochrome", label: "Monochrome", icon: "⚫", description: "High Contrast" },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9">
        <Palette className="h-4 w-4" />
      </Button>
    )
  }

  const currentTheme = themes.find(t => t.value === theme) || themes[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="h-9 w-9 transition-all hover:scale-105"
          aria-label="Toggle theme"
        >
          {theme === "dark" || theme === "midnight" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-sm font-semibold">Choose Theme</div>
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`cursor-pointer ${theme === t.value ? 'bg-accent' : ''}`}
          >
            <div className="flex items-center gap-3 w-full">
              <span className="text-lg">{t.icon}</span>
              <div className="flex-1">
                <div className="font-medium">{t.label}</div>
                <div className="text-xs text-muted-foreground">{t.description}</div>
              </div>
              {theme === t.value && (
                <span className="text-primary">✓</span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
