"use client"

import dynamic from "next/dynamic"
import React from "react"

// dynamic import of the client animated hero. This file is a client component so
// using ssr: false is allowed here.
const HeroAnimated = dynamic(() => import("./hero-animated"), { ssr: false })

export default function HeroWrapper() {
  return <HeroAnimated />
}
