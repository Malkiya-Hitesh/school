'use client'

import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  FlagIcon,
} from '@heroicons/react/24/outline'

export default function CoreValues() {
  const coreValues = [
    {
      title: 'Syllabus',
      description:
        'A well-structured curriculum designed to ensure academic excellence, lifelong learning, and real-world readiness.',
      icon: AcademicCapIcon,
    },
    {
      title: 'Environment',
      description:
        'A safe, nurturing, and inclusive environment that supports learning, creativity, and student well-being.',
      icon: BuildingLibraryIcon,
    },
    {
      title: 'Motive',
      description:
        'To prepare students for future challenges through values, discipline, higher education, and responsible citizenship.',
      icon: FlagIcon,
    },
    {
      title: 'Faculty',
      description:
        'Dedicated educators who inspire, mentor, and empower students to become confident and ethical individuals.',
      icon: UserGroupIcon,
    },
  ]

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-5 text-center mb-12 animate-fade-up-soft">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0a1f44] tracking-tight">
          Our Core Values
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          The guiding principles that shape our teaching philosophy and holistic
          development at Gnana Gangothri Vidyalaya.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreValues.map((value, idx) => {
          const Icon = value.icon

          return (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 0.15}s` }}
              className="group relative bg-gradient-to-b from-[#0a1f44] to-[#081630] text-white rounded-2xl p-7 shadow-lg hover:shadow-2xl animate-fade-up-soft transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-center mb-2">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-white/30 mx-auto mb-3"></div>

              {/* Text */}
              <p className="text-sm leading-relaxed text-center text-gray-200">
                {value.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
