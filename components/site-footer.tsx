import { SocialLinks } from "@/components/social-links"

export function SiteFooter() {
  return (
    <footer className="bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Auri Concept. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <SocialLinks />
          <a href="mailto:hello@auriconcept.com" className="text-xs hover:underline" aria-label="Email Auri Concept">
            hello@auriconcept.com
          </a>
        </div>
      </div>
    </footer>
  )
}
