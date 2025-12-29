// app/admissions/components/Programs.jsx
'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '@/app/components/ui/H1'

gsap.registerPlugin(ScrollTrigger)

const programs = [
  {
    title: 'Kindergarten',
    subtitle: 'Play • Learn • Grow',
    desc: 'Activity-based early learning with care, creativity and fun.'
  },
  {
    title: 'Primary School',
    subtitle: 'Strong Foundations',
    desc: 'Core subjects with focus on curiosity, clarity and confidence.'
  },
  {
    title: 'Middle School',
    subtitle: 'Explore & Excel',
    desc: 'Concept-based learning with co-curricular exposure.'
  },
  {
    title: 'High School',
    subtitle: 'Future Ready',
    desc: 'Board exam preparation with career guidance.'
  },
]

const Programs = () => {
  const cardsRef = useRef([])
  const containerRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { opacity: 1, y: 0 }) // reset styles

      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      })
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <section className=" min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3  bg-white text-slate-900 flex flex-col gap-8">
      <div>
        <H1 data="Our Programs" />
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {programs.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative p-8 rounded-3xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-2xl"
          >
            
            <span className="absolute left-0 top-8 h-16 w-1 rounded-full bg-blue-600 group-hover:h-24 transition-all"></span>

            <h3 className="text-lg sm:text-[19px] md:text-[21px]  lg:text-[23px] xl:text-[25px] font-bold text-gray-900">
              {item.title}
            </h3>
            <p className=" text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px]  xl:text-[18px]  text-blue-600 font-medium mt-1">
              {item.subtitle}
            </p>
            <p className="mt-4 text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px]  xl:text-[18px]   text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs
