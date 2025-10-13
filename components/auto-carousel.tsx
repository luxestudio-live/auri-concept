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
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.8 }
          }}
          style={{ position: 'absolute', inset: 0, height: '100%', width: '100%' }}
        >
          <img
            src={images[index]}
            alt={altTexts[index]}
            className="h-full w-full object-cover rounded transition-all"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}