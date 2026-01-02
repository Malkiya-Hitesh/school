'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaChalkboardTeacher, FaBrain, FaLaptopCode, FaClipboardCheck } from 'react-icons/fa'
import H1 from '@/app/components/ui/H1'


export default function AcademicPhilosophy() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const pillars = [
    {
      icon: <FaBrain className="text-blue-600 text-4xl" />,
      title: 'Concept-Based Learning',
      desc: 'Focus on understanding, not memorization.'
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
      title: 'Expert Faculty',
      desc: 'Experienced teachers guiding every student.'
    },
    {
      icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
      title: 'Smart Classrooms',
      desc: 'Technology-enabled interactive learning.'
    },
    {
      icon: <FaClipboardCheck className="text-blue-600 text-4xl" />,
      title: 'Continuous Assessment',
      desc: 'Regular feedback for steady progress.'
    }
  ]

  
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(cardsRef.current, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.9,
  //       stagger: 0.15,
  //       ease: 'power3.out',
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: 'top 80%',
  //       },
  //     })
  //   }, sectionRef)

  //   return () => ctx.revert()
  // }, [])

  return (
    <section ref={sectionRef} className="bg-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center">
          <H1 data="Our Academic Pillars" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            A strong academic framework designed for excellence and growth.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="group bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
