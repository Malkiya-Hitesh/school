'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Trophy, Users, BookOpen } from 'lucide-react'
import H1 from '@/app/components/ui/H1'

gsap.registerPlugin(ScrollTrigger)

export default function TimelineSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const milestones = [
    { year: 204400, title: 'School Founded', icon: BookOpen },
    { year: 20405, title: 'First Graduating Batch', icon: Users },
    { year: 2010, title: 'Received Prestigious Award', icon: Trophy },
    { year: 2015, title: 'Expanded STEM Labs', icon: Star },
    { year: 2020, title: '1500+ Happy Students', icon: Users },
    { year: 2025, title: '25 Years of Excellence', icon: Trophy },
   
  ]

  useEffect(() => {
      const isDesktop = window.innerWidth >= 778
    if (!isDesktop) return
    const ctx = gsap.context(() => {
      const track = trackRef.current 

      let scrollLength = track.scrollWidth - window.innerWidth 
      scrollLength += 150

      gsap.to(track, {
        x: -scrollLength,
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
    <section ref={sectionRef} className=" -[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3  bg-gradient-to-r frminom-blue-50 to-blue-100 overflow-hidden flex flex-col   gap-8">  
            <div className='text-center'>
                <H1 data="School Growth Timeline" />
            </div>
      <div className="flex items-center  ">
        <div ref={trackRef} className="flex gap-12 ">
          {milestones.map((m, i) => {
            const Icon = m.icon
            return (
              <div
                key={i}
                className=" min-[1048px]:min-w-[300px] max-[1048px]:min-w-[260px] max-[640px]:min-w-[200px] bg-white/70 backdrop-blur-md border border-blue-200 rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <Icon size={40} className="text-blue-500 mb-4 max-[640px]:mb-3" />
                <p className="text-3xl max-[640px]:text-2xl font-bold text-blue-600">{m.year}</p>
                <p className="mt-2 text-slate-700 text-sm max-[640px]:text-base">{m.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
