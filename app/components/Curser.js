'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    // ❌ disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const ctx = gsap.context(() => {
      const move = (e) => {
        gsap.to(dot.current, {
          x: e.clientX,
          y: e.clientY,
          overwrite: true,
          duration: 0.2
        })
        gsap.to(ring.current, {
          x: e.clientX,
          y: e.clientY,
          overwrite: true,
          duration: 0.35
        })
      }

      window.addEventListener('mousemove', move)
      return () => window.removeEventListener('mousemove', move)
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="cursor-ring" ref={ring} />
      <div className="cursor-dot" ref={dot} />
    </>
  )
}
