'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaSchool, FaBookOpen, FaGraduationCap } from 'react-icons/fa'
import H1 from '@/app/components/ui/H1'


export default function AcademicStructure() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const levels = [
    {
      icon: <FaSchool className="text-blue-600 text-5xl" />,
      title: 'Primary School',
      subtitle: 'Grades 1 – 5',
      desc: 'Building strong foundations through curiosity and activity-based learning.'
    },
    {
      icon: <FaBookOpen className="text-blue-600 text-5xl" />,
      title: 'Secondary School',
      subtitle: 'Grades 6 – 10',
      desc: 'Developing subject clarity, discipline, and analytical thinking.'
    },
    {
      icon: <FaGraduationCap className="text-blue-600 text-5xl" />,
      title: 'Higher Secondary',
      subtitle: 'Grades 11 – 12',
      desc: 'Focused academic preparation for higher education and careers.'
    }
  ]

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(cardsRef.current, {
//         y: 60,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%',
//         },
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

  return (
    <section ref={sectionRef} className="bg-gray-50 px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center">
          <H1 data="Academic Structure" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            A clearly defined academic journey for every stage of learning.
          </p>
        </div>

        {/* Levels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all text-center"
            >
              <div className="flex justify-center mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-blue-600 font-medium mt-1">
                {item.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
