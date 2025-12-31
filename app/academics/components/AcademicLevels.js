'use client'

import H1 from '@/app/components/ui/H1'
import { School, BookOpenCheck, GraduationCap } from 'lucide-react'


export default function AcademicLevels() {
  const levels = [
    {
      icon: <School className="h-12 w-12 text-blue-600" />,
      title: 'Primary School',
      subtitle: 'Grades 1 – 5',
      desc: 'Strong foundation in literacy, numeracy, curiosity, and moral values through engaging and activity-based learning.'
    },
    {
      icon: <BookOpenCheck className="h-12 w-12 text-blue-600" />,
      title: 'Secondary School',
      subtitle: 'Grades 6 – 10',
      desc: 'Concept clarity, analytical thinking, and subject depth with a structured and balanced academic approach.'
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: 'Higher Secondary',
      subtitle: 'Grades 11 – 12',
      desc: 'Career-oriented education focusing on specialization, competitive readiness, and higher education preparation.'
    }
  ]

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        <div className="text-center">
          <H1 data="Academic Levels" />
          <p className="text-gray-600 max-w-3xl mx-auto mt-3">
            Our academic structure is designed to support students at every stage
            of their educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all bg-gray-50">
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-blue-600 font-medium mt-1">{item.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
