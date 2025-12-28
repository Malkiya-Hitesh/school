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

  useEffect(() => {
     const isDesktop = window.innerWidth >= 640
      if (!isDesktop) return


    const ctx = gsap.context(() => {

      const track = trackRef.current
      let scrollLength = track.scrollWidth - window.innerWidth 
      scrollLength += 200

      gsap.to(track, {
        x:  -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 15%',
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
    <section
      ref={sectionRef}
      className=" min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3  overflow-hidden flex flex-col   gap-8 bg-[#0b0f1a] text-white overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center">
        <H1 data="Why Choose Us" />
      </div>

      {/* Horizontal Track */}
      <div className=" flex items-center">
        <div
          ref={trackRef}
          className="flex gap-10 will-change-transform"
        >
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="min-[1048px]:min-w-[300px] max-[1048px]:min-w-[260px] max-[640px]:min-w-[200px] bg-white/5 border border-white/10 rounded-3xl p-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-blue-400" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
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
