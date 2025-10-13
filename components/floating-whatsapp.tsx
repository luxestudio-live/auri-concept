import { SocialIcon } from "@/components/social-links"

export function FloatingWhatsApp({ phone = "0000000000" }: Readonly<{ phone?: string }>) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Auri Concept on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40"
    >
      <SocialIcon name="whatsapp" className="h-7 w-7 text-white transition-transform duration-200 group-hover:scale-110" />
    </a>
  )
}
