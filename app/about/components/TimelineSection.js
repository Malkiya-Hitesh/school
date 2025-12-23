'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Trophy, Users, BookOpen } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function TimelineSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const milestones = [
    { year: 2000, title: 'School Founded', icon: BookOpen },
    { year: 2005, title: 'First Graduating Batch', icon: Users },
    { year: 2010, title: 'Received Prestigious Award', icon: Trophy },
    { year: 2015, title: 'Expanded STEM Labs', icon: Star },
    { year: 2020, title: '1500+ Happy Students', icon: Users },
    { year: 2025, title: '25 Years of Excellence', icon: Trophy },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const scrollLength = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 10%',
          end: () => `+=${scrollLength}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-4xl font-bold text-blue-700 z-10">
        School Growth Timeline
      </h2>

      <div className="absolute inset-0 flex items-center">
        <div ref={trackRef} className="flex gap-12 px-20">
          {milestones.map((m, i) => {
            const Icon = m.icon
            return (
              <div
                key={i}
                className="min-w-[300px] bg-white/70 backdrop-blur-md border border-blue-200 rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <Icon size={40} className="text-blue-500 mb-4" />
                <p className="text-3xl font-bold text-blue-600">{m.year}</p>
                <p className="mt-2 text-slate-700">{m.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
