'use client'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export default function SmoothScrollProvider({ children }) {
  const rafId = useRef(null)

  useEffect(() => {
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        smooth: true,
        lerp: 0.08,
        wheelMultiplier: 0.8,
      })
    }

    const raf = (time) => {
      lenisInstance.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    lenisInstance.on('scroll', ScrollTrigger.update)
    ScrollTrigger.refresh()

    return () => {
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return children
}
