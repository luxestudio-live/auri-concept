"use client"

import React from "react"
import { assetPath } from "@/lib/asset-path"

type Props = {
  productName?: string
  videoSrc?: string
  images?: string[]
}

export default function FeaturedProduct({
  productName = "Featured Product",
  videoSrc = assetPath("/featured-product.mp4"),
  images = [assetPath("/featured1.jpg"), assetPath("/featured2.jpg"), assetPath("/featured3.jpg")],
}: Props) {
  const [isOpen, setIsOpen] = React.useState(false)

  // Close on ESC
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="border-t border-border bg-card" id="featured-product">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <h2 className="text-2xl font-semibold md:text-3xl mb-2 text-foreground">Featured Product</h2>
        <div className="text-lg font-medium text-primary mb-6">{productName}</div>

        <div className="w-full flex flex-col md:flex-row gap-6 items-stretch">
          {/* Video column - portrait */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
            <button
              onClick={() => setIsOpen(true)}
              aria-label={`Open ${productName} video`}
              className="rounded-lg overflow-hidden border border-border shadow focus:outline-none focus:ring-2 focus:ring-primary/40"
              style={{ width: 320, maxWidth: '100%' }}
            >
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-[320px] h-[480px] object-cover bg-black block"
                style={{ aspectRatio: '9/16' }}
              />
            </button>
          </div>

          {/* Images column - fills same height as video on md */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-background p-2 rounded-lg items-stretch">
            {images.map((img, i) => (
              <div
                key={img}
                className="bg-white rounded-lg border border-border shadow overflow-hidden flex items-center justify-center"
                style={{ minHeight: 480 }}
              >
                <button
                  onClick={() => setIsOpen(true)}
                  aria-label={`Open ${productName} video from image ${i + 1}`}
                  className="w-full h-full flex items-center justify-center p-1"
                >
                  <img src={img} alt={`${productName} image ${i + 1}`} className="max-w-full max-h-full object-contain" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-lg overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-20 rounded-full bg-white/90 text-black p-1 shadow focus:outline-none"
            >
              ✕
            </button>
            <video src={videoSrc} controls autoPlay className="w-full h-auto max-h-[80vh] bg-black" />
          </div>
        </div>
      )}
    </section>
  )
}
