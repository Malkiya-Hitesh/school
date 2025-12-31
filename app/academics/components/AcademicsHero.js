'use client'

import H1 from "@/app/components/ui/H1"


export default function AcademicsHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[70vh] flex items-center justify-center px-6 md:px-12 lg:px-20  min-[1048px]:mt-[6.7rem] mt-[6.2rem] max-[640px]:mt-[4.2rem] ">
      <div className="max-w-4xl text-center flex flex-col gap-6">
        
        <H1 data="Academics" />

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Building strong academic foundations through innovative teaching,
          holistic learning, and value-based education.
        </p>

        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all">
            View Curriculum
          </button>

          <button className="px-6 py-3 border border-gray-400 text-gray-200 rounded-md hover:bg-white hover:text-gray-900 transition-all">
            Academic Calendar
          </button>
        </div>

      </div>
    </section>
  )
}
