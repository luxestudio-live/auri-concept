"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { getOptimizedImageUrl } from "@/lib/image-optimizer"

type AutoCarouselProps = {
  images: string[]
  altTexts: string[]
  interval?: number
  priority?: boolean
}

export function AutoCarousel({ images, altTexts, interval = 2500, priority = false }: AutoCarouselProps) {
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  const optimizedImages = React.useMemo(
    () => images.map((src) => getOptimizedImageUrl(src)),
    [images]
  )

  React.useEffect(() => {
    if (typeof window === "undefined" || optimizedImages.length < 2) return
    const nextIndex = (index + 1) % optimizedImages.length
    const preloaded = new window.Image()
    preloaded.src = optimizedImages[nextIndex]
  }, [index, optimizedImages])

  const optimizedSrc = optimizedImages[index]
  return (
    <div className="relative aspect-[4/3] w-full flex items-center justify-center bg-transparent overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, height: '100%', width: '100%' }}
        >
          <Image
            src={optimizedSrc}
            alt={altTexts[index]}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain rounded"
            priority={priority && index === 0}
            loading={priority && index === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}