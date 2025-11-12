import React from "react"

export function SocialIcon({
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
        <img src={require("@/lib/asset-path").assetPath("/instagram.png")} alt="Instagram" className={className + " object-contain"} />
      )
    case "facebook":
      return (
        <img src={require("@/lib/asset-path").assetPath("/facebook.png")} alt="Facebook" className={className + " object-contain"} />
      )
    case "linkedin":
      return (
        <img src={require("@/lib/asset-path").assetPath("/linkedin.png")} alt="LinkedIn" className={className + " object-contain"} />
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
        <img src={require("@/lib/asset-path").assetPath("/whatsapp.png")} alt="WhatsApp" className={className + " object-contain"} />
      )
  }
}

export function SocialLinkItem({
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
      className="group inline-flex w-10 h-10 items-center justify-center rounded-full bg-background text-foreground ring-1 ring-border transition-all hover:bg-primary hover:text-primary-foreground hover:ring-primary hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  )
}

export function SocialLinks() {
  return (
    <nav aria-label="Follow Auri Concept" className="flex items-center gap-3">
      <SocialLinkItem href="https://www.instagram.com/auriconcept_/" label="Instagram">
    <SocialIcon name="instagram" className="w-5 h-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://www.facebook.com/share/1BGNLJjrWD/?mibextid=wwXIfr" label="Facebook">
        <SocialIcon name="facebook" className="w-5 h-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://www.linkedin.com/in/amit-shah-927680179" label="LinkedIn">
        <SocialIcon name="linkedin" className="w-5 h-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://wa.me/919819355577" label="WhatsApp">
    <SocialIcon name="whatsapp" className="w-5 h-5" />
      </SocialLinkItem>
    </nav>
  )
}
