'use client'

import { Trophy, School, BookOpen, MonitorCheck } from 'lucide-react'

export default function AchievementsAndFacilities() {
  return (
    <section className="bg-gray-50 py-14 md:py-18">
      <div className="max-w-6xl mx-auto px-5">

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-center mb-10">
            Our Achievements
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: 'Academic Excellence', desc: 'Consistent top results in board examinations.' },
              { icon: School, title: 'Experienced Faculty', desc: 'Highly qualified and dedicated teaching staff.' },
              { icon: BookOpen, title: 'Student Achievements', desc: 'Awards in academics, sports, and culture.' },
              { icon: MonitorCheck, title: 'Digital Learning', desc: 'Smart classrooms with modern technology.' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
              >
                <item.icon className="mx-auto mb-4 text-[#0a1f44]" size={36} />
                <h4 className="font-semibold text-[#0a1f44] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] text-center mb-10">
            Our Facilities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Smart Classrooms',
              'Well-Stocked Library',
              'Science & Computer Labs',
              'Playground & Sports Area',
              'Safe Transport Facility',
              'Hygienic Campus',
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#0a1f44]"
              >
                <p className="font-medium text-[#0a1f44]">
                  {facility}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
