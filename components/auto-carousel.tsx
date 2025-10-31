"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

type AutoCarouselProps = {
  images: string[]
  altTexts: string[]
  interval?: number
}

export function AutoCarousel({ images, altTexts, interval = 2500 }: AutoCarouselProps) {
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])
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
          <img
            src={images[index]}
            alt={altTexts[index]}
            className="max-h-full max-w-full object-contain rounded transition-all mx-auto"
            style={{ display: 'block', margin: '0 auto', height: '100%', width: '100%', objectFit: 'contain' }}
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}