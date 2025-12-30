'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutHero() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })

      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
        },
      })

      gsap.from(imageRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.94,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#0a1f44] via-[#0d2a5c] to-[#0a1f44] py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <span className="inline-block text-sm md:text-base font-semibold tracking-widest uppercase text-white">
            About GnanaGangothri Vidhyalaya
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight text-white">
            Inspiring Young Minds with Values
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">


          <div ref={textRef} className="space-y-6">
            <p className="text-white text-base md:text-lg leading-relaxed text-justify">
              Gnana Gangothri Schools offer a structured and student-centric learning
              environment rooted in activity-oriented, experiential, and theme-based
              education that fosters the holistic development of every child. Our approach
              encourages curiosity, creativity, critical thinking, and emotional growth,
              enabling students to actively engage in the learning process. With a strong
              cultural foundation and the seamless integration of modern technology, we
              successfully bridge ancient humanistic wisdom with contemporary scientific
              thinking. This balanced philosophy nurtures confident, responsible, and
              compassionate learners .
            </p>

          </div>


          <div className="relative flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-500 hover:scale-[1.03]"
            >
              <Image
                src="/image/hero_4.webp"
                alt="Gnana Gangothri School Campus"
                width={720}
                height={520}
                className="object-cover w-full h-full"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/30 to-transparent" />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
