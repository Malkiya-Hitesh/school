'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
 
      smooth: true,
     
      
  lerp: 0.05,
  smoothTouch: 0.5,
  wheelMultiplier: 0.7,
    })

    // RAF loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // 🔥 SYNC GSAP WITH LENIS (CORRECT WAY)
    lenis.on('scroll', ScrollTrigger.update)

    ScrollTrigger.defaults({
      scroller: window,
    })

    ScrollTrigger.refresh()

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}
