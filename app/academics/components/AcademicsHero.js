'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import H1 from '@/app/components/ui/H1'


export default function AcademicsHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative  flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-[1024px]:mt-[6.7rem] mt-[6.2rem] max-[640px]:mt-[4.2rem] lg:py-18 xl:py-20 md:py-13 sm:py-8  py-5 xl:px-13 lg:px-10 md:px-7 sm:px-5 px-3"
    >
      <div className="max-w-4xl text-center flex flex-col gap-6">
        
        {/* Heading */}
        <div className="hero-animate">
          <H1 data="Academics" />
        </div>

        {/* Short subtitle */}
        <p className="hero-animate text-gray-300 text-lg md:text-xl leading-relaxed">
          Strong foundations. Smart learning. Future-ready students.
        </p>

        {/* CTA */}
        <div className="hero-animate flex justify-center mt-4">
          <button className="group px-7 py-3 bg-blue-600 text-white font-medium rounded-md transition-all hover:bg-blue-700 flex items-center gap-2">
            Explore Academics
            <span className="text-base transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  )
}
