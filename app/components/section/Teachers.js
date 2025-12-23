'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '../ui/H1'

gsap.registerPlugin(ScrollTrigger)

const teachers = [
  { name: 'Anjali Patel', subject: 'Maths', img: '/image/t1.avif' },
  { name: 'Rahul Mehta', subject: 'Science', img: '/image/t1.avif' },
  { name: 'Kavita Shah', subject: 'English', img: '/image/t1.avif' },
  { name: 'Suresh Joshi', subject: 'Computer', img: '/image/t1.avif' },
  { name: 'Neha Desai', subject: 'Biology', img: '/image/t1.avif' },
  { name: 'Amit Trivedi', subject: 'Physics', img: '/image/t1.avif' },
  { name: 'Pooja Rana', subject: 'Gujarati', img: '/image/t1.avif' },
  { name: 'Vikas Parmar', subject: 'History', img: '/image/t1.avif' },
  { name: 'Anjali Patel', subject: 'Maths', img: '/image/t1.avif' },
  { name: 'Rahul Mehta', subject: 'Science', img: '/image/t1.avif' },
  { name: 'Kavita Shah', subject: 'English', img: '/image/t1.avif' },
  { name: 'Suresh Joshi', subject: 'Computer', img: '/image/t1.avif' },
  { name: 'Neha Desai', subject: 'Biology', img: '/image/t1.avif' },
  { name: 'Amit Trivedi', subject: 'Physics', img: '/image/t1.avif' },
  { name: 'Pooja Rana', subject: 'Gujarati', img: '/image/t1.avif' },
  { name: 'Vikas Parmar', subject: 'History', img: '/image/t1.avif' },
]

export default function TeachersSection() {
  const trackRef = useRef(null)
  const cardsRef = useRef([])

useEffect(() => {
  const update = () => {
    const viewportCenter = window.innerWidth / 2
    const maxDistance = window.innerWidth / 2 + 200 // off-screen buffer

    cardsRef.current.forEach((card) => {
      if (!card) return

      const rect = card.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const distance = Math.abs(viewportCenter - cardCenter)

      // 0 (far) → 1 (center)
      const progress = gsap.utils.clamp(
        0,
        1,
        1 - distance / maxDistance
      )

      const scale = gsap.utils.interpolate(0.10, 1.30, progress)
      const opacity = gsap.utils.interpolate(0.10, 1, progress)

      gsap.to(card, {
        scale,
        opacity,
        duration: 0.25,
        ease: 'power3.out',
      })
    })
  }


  gsap.ticker.add(update)
  update() // first run

  return () => {
    gsap.ticker.remove(update)
  }
}, [])

 

  return (
    <section className="py-10 flex flex-col items-center gap-11 bg-white">
      <H1 data="Meet Our Teachers" />

      <div className="w-full overflow-x-auto pt-11 pb-11 no-scrollbar">
        <div
          ref={trackRef}
          className="flex gap-8 px-6 no-scrollbar"
          style={{ willChange: 'transform' }}
        >
          {teachers.map((t, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="w-64 shrink-0  p-6 text-center bg-white "
            >
              <div className="w-28 h-28 mx-auto mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full rounded-full object-cover border-4"
                  style={{ borderColor: 'var(--color-primary)' }}
                />
              </div>

              <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
                {t.name}
              </h3>
              <p className="mt-1 font-medium" style={{ color: 'var(--color-accent)' }}>
                {t.subject}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
