'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function StatsSection() {
  const countersRef = useRef([])
  const sectionRef = useRef(null)

  const stats = [
    { label: 'Years of Experience', value: 25 },
    { label: 'Happy Students', value: 1500 },
    { label: 'Successful Graduates', value: 450 },
    { label: 'Awards Won', value: 30 },
  ]

  useEffect(() => {
    // reset refs (important for Next.js strict mode)


    const ctx = gsap.context(() => {
      countersRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: stats[i].value,
            duration: 2,
            ease: 'power1.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true, // ✅ play only once (no reverse bug)
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-10 px-5 max-[640px]:px-3 bg-blue-50 text-center" >

      <div className="grid grid-cols-2 min-[1048px]:grid-cols-4 gap-8 max-[478px]:grid-cols-1">
        {stats.map((item, i) => (
          <div key={i}>
            <p className=" text-[clamp(1.6rem,4vw,2.6rem)] font-bold text-blue-600 will-change-transform">
              <span
                ref={(el) => {
                  if (el) countersRef.current[i] = el
                }}
              >
                0
              </span>
              +
            </p>
            <span className=" block pt-2 text-[clamp(0.95rem,2.2vw,1.05rem)]  font-medium text-slate-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
