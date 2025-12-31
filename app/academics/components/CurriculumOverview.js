'use client'

import H1 from '@/app/components/ui/H1'
import { Book, ClipboardList, FlaskConical, Monitor } from 'lucide-react'


export default function CurriculumOverview() {
  const curriculum = [
    {
      icon: <Book className="h-10 w-10 text-blue-600" />,
      title: 'Core Subjects',
      desc: 'Mathematics, Science, Languages, and Social Studies with strong fundamentals.'
    },
    {
      icon: <FlaskConical className="h-10 w-10 text-blue-600" />,
      title: 'Practical Learning',
      desc: 'Laboratory work, experiments, and hands-on activities for better understanding.'
    },
    {
      icon: <Monitor className="h-10 w-10 text-blue-600" />,
      title: 'Digital Education',
      desc: 'Smart classrooms and technology-integrated teaching methods.'
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-blue-600" />,
      title: 'Continuous Evaluation',
      desc: 'Regular assessments to track progress and improve learning outcomes.'
    }
  ]

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        <div className="text-center">
          <H1 data="Curriculum Overview" />
          <p className="text-gray-600 max-w-3xl mx-auto mt-3">
            Our curriculum is designed to provide balanced academic development
            while encouraging creativity, innovation, and practical knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculum.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
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
