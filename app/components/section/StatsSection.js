'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
    const ctx = gsap.context(() => {
      countersRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { innerText: 0},
          {
            innerText: stats[i].value,
            duration: 2,
            ease: 'power1.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-blue-50 text-center">
    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {stats.map((item, i) => (
          <div key={i}>
            <p
              
              className="text-5xl font-extrabold text-blue-600"
            >
            <span ref={(el) => (countersRef.current[i] = el)} >0</span><span>+</span>
            </p>
            <span className="mt-2 block text-lg font-medium text-slate-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
