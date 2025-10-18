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
        // Use a filled WhatsApp mark for recognizability at small sizes; inherit color via currentColor
        <svg
          className={className}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.78 11.78 0 0012.05 0C5.42 0 .1 5.32.1 11.95c0 2.11.55 4.18 1.6 6.02L4 24l5.61-1.42A11.88 11.88 0 0012.05 24h.01c6.63 0 11.95-5.32 11.95-11.95 0-3.19-1.25-6.18-3.49-8.55z" />
          <path d="M17.3 14.1c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-.3-.15-1.14-.42-2.17-1.34-.8-.74-1.34-1.65-1.5-1.95-.16-.3-.02-.46.12-.61.13-.13.3-.33.45-.5.15-.17.2-.28.27-.45.07-.17.03-.33-.02-.48-.05-.15-.44-1.04-.6-1.43-.16-.38-.32-.34-.45-.34l-.43-.01c-.15 0-.4.06-.61.29-.22.24-.84.82-.84 2.01 0 1.19.86 2.34.98 2.5.12.17 1.7 2.6 4.12 3.65 2.42 1.06 2.42.71 2.85.67.43-.04 1.36-.55 1.55-1.07.18-.52.18-.96.13-1.06-.05-.11-.2-.17-.43-.28z" />
        </svg>
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
      <SocialLinkItem href="https://www.facebook.com/auriconcept" label="Facebook">
    <SocialIcon name="facebook" className="w-5 h-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://www.linkedin.com/company/auriconcept" label="LinkedIn">
    <SocialIcon name="linkedin" className="w-5 h-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://www.youtube.com/channel/UCauriconcept" label="YouTube">
    <SocialIcon name="youtube" className="w-5 h-5" />
      </SocialLinkItem>
      <SocialLinkItem href="https://wa.me/0000000000" label="WhatsApp">
    <SocialIcon name="whatsapp" className="w-5 h-5" />
      </SocialLinkItem>
    </nav>
  )
}
