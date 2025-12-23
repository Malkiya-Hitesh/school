'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // ❌ Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // 🚀 High-performance setters
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3.out' })
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3.out' })
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.3, ease: 'power3.out' })
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.3, ease: 'power3.out' })

    const move = (e) => {
      setDotX(e.clientX)
      setDotY(e.clientY)
      setRingX(e.clientX)
      setRingY(e.clientY)
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
