'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '../ui/H1'

gsap.registerPlugin(ScrollTrigger)

export default function Programs() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 40%',

            scrub: true,
            toggleActions: undefined
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const programs = [
    {
      title: 'AI & Robotics Program',
      desc: 'Hands-on learning with Artificial Intelligence, robotics kits, and logical thinking.',
    },
    {
      title: 'Coding for Kids',
      desc: 'Scratch, basic programming, and problem-solving skills from an early age.',
    },
    {
      title: 'STEM Innovation Lab',
      desc: 'Science, Technology, Engineering, and Math through experiments and projects.',
    },
    {
      title: 'Digital Skills Program',
      desc: 'Computer fundamentals, internet safety, and creative digital tools.',
    },
    {
      title: 'Spoken English & Communication',
      desc: 'Confidence building through spoken English, presentations, and debates.',
    },
    {
      title: 'Career Guidance & Skill Development',
      desc: 'Career awareness, aptitude building, and real-world skill exposure.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="  min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3  bg-white text-slate-900 flex flex-col gap-8">
      <div className="text-center">
        <H1 data={'Upcoming Programs'} />
     
      </div>

      <div className="relative">
        <div className="  max-[640px]:hidden absolute left-1/2 top-0 w-[2px] h-full bg-slate-200 -translate-x-1/2" />

        {programs.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className={`relative mb-10 flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            {/* Circle marker */}
            <div className="  max-[640px]:hidden absolute left-1/2 top-6 w-5 h-5 bg-blue-600 rounded-full -translate-x-1/2 z-10" />

            {/* Program card */}
            <div className=" will-change-transform w-[45%] max-[640px]:w-[99%] bg-slate-50 p-8 rounded-2xl shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed line-clamp-2 text-slate-600">{item.desc}</p>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
