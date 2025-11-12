"use client"

import React from "react"
import { assetPath } from "@/lib/asset-path"

type Props = {
  productName?: string
  videoSrc?: string
  images?: string[]
}

export default function FeaturedProductZoom({
  productName = "Featured Product",
  videoSrc = assetPath("/featured-product.mp4"),
  images = [assetPath("/featured1.jpg"), assetPath("/featured2.jpg"), assetPath("/featured3.jpg")],
}: Props) {
  const [modal, setModal] = React.useState<null | { type: "video" | "image"; src: string }> (null)

  // Close on ESC
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModal(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="border-t border-border bg-card" id="featured-product">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <h2 className="text-2xl font-semibold md:text-3xl mb-2 text-card-foreground">Featured Product</h2>
  <div className="text-lg font-medium text-card-foreground mb-6">{productName}</div>

        <div className="w-full flex flex-col md:flex-row gap-6 items-stretch md:items-center">
          {/* Video column - large, always matches image column height */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
            <div className="flex flex-col h-full w-full items-center justify-center">
              <button
                onClick={() => setModal({ type: "video", src: videoSrc })}
                aria-label={`Open ${productName} video`}
                className="rounded-lg overflow-hidden border border-border shadow focus:outline-none focus:ring-2 focus:ring-primary/40 bg-black"
                style={{ width: 420, maxWidth: '100%' }}
              >
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[420px] h-[560px] object-cover bg-black block"
                  style={{ aspectRatio: '3/4', maxHeight: 560, minHeight: 420 }}
                />
              </button>
            </div>
          </div>

          {/* Images column - 2 per row, small, total height matches video */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-2 bg-background p-1 rounded-lg items-stretch"
                 style={{ height: 560, maxHeight: 560, minHeight: 420 }}>
              {images.map((img, i) => (
                <div
                  key={img}
                  className="bg-white dark:bg-neutral-900 rounded-lg border border-border shadow overflow-hidden flex items-center justify-center aspect-[4/3]"
                >
                  <button
                    onClick={() => setModal({ type: "image", src: img })}
                    aria-label={`Open ${productName} image ${i + 1}`}
                    className="w-full h-full flex items-center justify-center p-0"
                  >
                    <img src={img} alt={`${productName} image ${i + 1}`} className="w-full h-full object-contain" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for video or image */}
      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-lg overflow-hidden bg-black"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              aria-label="Close modal"
              className="absolute right-3 top-3 z-20 rounded-full bg-white/90 text-black p-1 shadow focus:outline-none"
            >
              ✕
            </button>
            {modal.type === "video" ? (
              <video src={modal.src} controls autoPlay className="w-full h-auto max-h-[80vh] bg-black" />
            ) : (
              <img src={modal.src} alt="Zoomed featured product" className="w-full h-auto max-h-[80vh] object-contain bg-black" />
            )}
          </div>
        </div>
      )}
    </section>
  )
}