'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function VisionMission() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0a1f44]">
            Vision & Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

{/* Vision */}
<div
  ref={el => (cardsRef.current[0] = el)}
  className="bg-[#0a1f44] text-white p-8 rounded-xl shadow-xl"
>
  <div className="flex items-center gap-4 mb-4">
    <GraduationCap className="text-blue-400" />
    <h3 className="text-xl font-semibold">
      Our Vision
    </h3>
  </div>
<p className="italic font-semibold text-blue-200 mb-3">
  “Shaping enlightened minds with strong character.”
</p>


  <p className="text-white text-justify leading-relaxed">
    Gnana Gangothri Schools aspire to create an educational environment where
    academic excellence harmoniously blends with moral values, cultural
    awareness, and scientific thinking. Our vision is to nurture enlightened,
    confident, and responsible individuals who are inspired to think
    critically, act ethically, and contribute meaningfully to society while
    embracing the challenges of a rapidly changing world.
  </p>
</div>

          {/* Mission */}
          <div
            ref={el => (cardsRef.current[1] = el)}
            className="bg-gray-50 p-8 rounded-xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <Target className="text-[#0a1f44]" />
              <h3 className="text-xl font-semibold text-[#0a1f44]">
                Our Mission
              </h3>
            </div>

            <p className="italic font-semibold text-[#0a1f44] mb-3 ">
              “Man making, character building education”
            </p>
<p className="text-gray-700 text-justify leading-relaxed">
  Inspired by Swami Vivekananda’s vision, Gnana Gangothri Schools are committed
  to revitalizing education by fostering a nurturing and holistic environment
  that emphasizes both academic excellence and character development. We
  integrate rich cultural traditions with modern technological advancements,
  bridging timeless humanistic wisdom with contemporary scientific pragmatism.
  Our approach encourages curiosity, critical thinking, creativity, and moral
  integrity.
</p>

          </div>

        </div>
      </div>
    </section>
  )
}
