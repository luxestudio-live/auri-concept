import { SocialLinks } from "@/components/social-links"

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Auri Concept. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Crafted with excellence by{" "}
              <a 
                href="https://www.luxestudio.live/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline transition-colors"
                aria-label="Visit LuxeStudio website"
              >
                LuxeStudio
              </a>
              {" "}✨
            </p>
          </div>
          <div className="flex items-center gap-5">
            <SocialLinks />
            <a href="mailto:hello@auriconcept.com" className="text-xs hover:underline" aria-label="Email Auri Concept">
              hello@auriconcept.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
