'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutHero() {
  const sectionRef = useRef()
  const textRef = useRef(null)
  const imageRef = useRef(null)


  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT ANIMATION
      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
      })

      // IMAGE 3D ENTRY
      gsap.from(imageRef.current, {
        opacity: 0,
        rotateY: 15,
        rotateX: -10,
        z: -100,
        duration: 1.4,
        ease: 'power3.out',
      })

      // FLOATING 3D ELEMENTS
      
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef} className="relative bg-[#0b0f1a] text-white overflow-hidden min-[1024px]:mt-[6.7rem] mt-[6.2rem] max-[640px]:mt-[4.2rem] py-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div ref={textRef}>
          <span className="text-blue-400 uppercase tracking-widest text-sm">
            About Our School
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4">
            Shaping Minds.<br /> Building Futures.
          </h1>

          <p className="mt-6 text-slate-300 max-w-xl">
            For over two decades, our institution has focused on academic
            excellence, moral values, and holistic student development.
          </p>

          <p className="mt-4 text-slate-400 max-w-xl">
            We nurture curiosity, creativity, and confidence through modern
            education practices and experienced faculty.
          </p>
        </div>

       
        <div className="relative perspective-[1200px]">

          {/* MAIN IMAGE */}
          <div
            ref={imageRef}
            className="relative rounded-3xl overflow-hidden  transform-gpu transition-all duration-500  hover:rotate-y-[-6deg] hover:rotate-x-[4deg] hover:scale-[1.03]  shadow-[0_30px_90px_rgba(0,0,0,0.45)]
            "
          >
            <Image
              src="/image/hero_4.webp"
              alt="School Campus"
              width={600}
              height={450}
              className="object-cover"
              priority
            />
          </div>

       
        </div>
      </div>
    </section>
  )
}
