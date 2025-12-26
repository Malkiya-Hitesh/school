'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    // 1️⃣ Create Lenis instance
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,          // smoothness (0.08–0.12 best)
      wheelMultiplier: 1,
      syncTouch: true,    // mobile support
      smoothTouch: false // better performance
    })

    lenisRef.current = lenis

    // 2️⃣ RAF loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // 3️⃣ Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // 4️⃣ Refresh ScrollTrigger after mount
    ScrollTrigger.refresh()

    // 5️⃣ Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}
