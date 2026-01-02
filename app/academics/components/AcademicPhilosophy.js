'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaChalkboardTeacher, FaBrain, FaLaptopCode, FaClipboardCheck } from 'react-icons/fa'
import H1 from '@/app/components/ui/H1'
import H3 from '@/app/components/ui/H3'
import P from '@/app/components/ui/P'


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
            ref={(el) => (cardsRef.current[index] = el)}
            className="group bg-gradient-to-br from-blue-100 via-white to-white border border-blue-100   border-blue-400  rounded-2xl p-6  border-t-5 rounded-2xl shadow-md hover:shadow-lg flex flex-col justify-between  transition-all"
          >
            {/* Icon */}
            <div className="mb-5">{item.icon}</div>

            {/* Content */}
            <H3  className="text-xl font-semibold text-[var(--text-d)] mb-2"
                data={item.title} />
            <P className="text-[var(--text-m)] mb-4"
              data={item.desc}
            />  

            
          </div>
          ))}
        </div>

      </div>
    </section>
  )
}
