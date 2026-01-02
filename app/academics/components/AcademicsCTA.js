'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AcademicsCTA() {
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ctaRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
      })
    }, ctaRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ctaRef} className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 md:px-12 lg:px-20 py-14">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Ready to explore our academic journey?
          </h2>
          <p className="text-blue-100 mt-2">
            Discover how we nurture excellence at every stage of learning.
          </p>
        </div>

        <button className="group px-7 py-3 bg-white text-blue-700 font-medium rounded-md transition-all hover:bg-gray-100 flex items-center gap-2">
          Admissions Enquiry
          <span className="text-base transition-transform group-hover:translate-x-1">→</span>
        </button>

      </div>
    </section>
  )
}
