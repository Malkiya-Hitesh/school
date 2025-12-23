'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  GraduationCap,
  Users,
  ShieldCheck,
  Building2,
  Sparkles,
  HeartHandshake,
} from 'lucide-react'
import H1 from '../ui/H1'

gsap.registerPlugin(ScrollTrigger)

export default function Choose() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current

      const scrollLength = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
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

  const items = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      desc: 'Concept-based curriculum with strong foundations.',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      desc: 'Dedicated mentors for every student.',
    },
    {
      icon: Sparkles,
      title: 'Holistic Growth',
      desc: 'Academics, arts & sports combined.',
    },
    {
      icon: ShieldCheck,
      title: 'Safe Campus',
      desc: 'Secure and disciplined environment.',
    },
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      desc: 'Smart classrooms and advanced labs.',
    },
    {
      icon: HeartHandshake,
      title: 'Parent Partnership',
      desc: 'Transparent communication with parents.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#0b0f1a] text-white overflow-hidden "
    >
      {/* Heading */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10">
        <H1 data={'Why Choose Us'} />
        
      </div>

      {/* Horizontal Track */}
      <div className="absolute inset-0 flex items-center">
        <div
          ref={trackRef}
          className="flex gap-10 px-32"
        >
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="min-w-[360px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-400">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
