'use client'

import H1 from '@/app/components/ui/H1'
import { BookOpen, Brain, Users, Target } from 'lucide-react'


export default function AcademicPhilosophy() {
  const points = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: 'Concept-Based Learning',
      desc: 'Focus on deep understanding rather than rote memorization.'
    },
    {
      icon: <Brain className="h-10 w-10 text-blue-600" />,
      title: 'Critical Thinking',
      desc: 'Encouraging curiosity, analysis, and problem-solving skills.'
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Student-Centered Approach',
      desc: 'Personal attention and interactive classroom engagement.'
    },
    {
      icon: <Target className="h-10 w-10 text-blue-600" />,
      title: 'Outcome-Oriented Education',
      desc: 'Preparing students for academic success and real-life challenges.'
    }
  ]

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        <div className="text-center">
          <H1 data="Our Academic Philosophy" />
          <p className="text-gray-600 max-w-3xl mx-auto mt-3">
            Our teaching philosophy focuses on nurturing intellectual curiosity,
            moral values, and lifelong learning skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
