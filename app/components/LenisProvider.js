'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollProvider({ children }) {
  const rafId = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      wheelMultiplier: 0.8,
      syncTouch: true,
    })

    // 🔗 GSAP ↔ Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    })

    const raf = (time) => {
      lenis.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    setTimeout(() => ScrollTrigger.refresh(), 300)

    return () => {
      cancelAnimationFrame(rafId.current)
      lenis.destroy()
      ScrollTrigger.killAll(false)
    }
  }, [])

  return children
}
