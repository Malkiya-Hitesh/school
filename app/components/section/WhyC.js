'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '../ui/H1'

import {
  GraduationCap,
  Users,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function WhyC() {
  const containerRef = useRef(null)
  const itemsRef = useRef([])

  const items = [
    {
      icon: <GraduationCap className="h-20 w-20 text-blue-500" />,
      title: 'Academic Excellence',
      desc: 'Concept-based curriculum with strong foundations.',
    },
    {
      icon: <Users className="h-20 w-20 text-blue-500" />,
      title: 'Experienced Faculty',
      desc: 'Dedicated mentors for every student.',
    },
    {
      icon: <Sparkles className="h-20 w-20 text-blue-500" />,
      title: 'Holistic Growth',
      desc: 'Academics, arts & sports combined.',
    },
    {
      icon: <ShieldCheck className="h-20 w-20 text-blue-500" />,
      title: 'Safe Campus',
      desc: 'Secure and disciplined environment.',
    },
  ]

  useEffect(() => {


    const ctx = gsap.context(() => {
    
       gsap.from(itemsRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    once: true,
                },
            })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
     
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-black px-6 py-14 sm:px-10 lg:px-14"
    >
      
      <div className="mb-12 text-center">
        <H1 data="Why Choose Us" />
        <p className="mx-auto mt-3 max-w-2xl text-gray-400">
          We provide a unique educational experience that combines academic excellence
          with character development.
        </p>
      </div>

      <div  ref={containerRef}  className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            ref={el => (itemsRef.current[index] = el)}
            className="group flex items-center gap-6 rounded-2xl  border border-white/10 bg-white/5 p-6 backdrop-blur-sm     hover:bg-white/10"
          >
            {/* Icon */}
            <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-blue-500/10">
              {item.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyC
