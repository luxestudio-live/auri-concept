"use client"

import React from "react"
import { AnimatePresence, motion } from "framer-motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex-1">
          {children}
        </div>
      </motion.main>
    </AnimatePresence>
  )
}
