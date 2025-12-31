'use client'

import Image from 'next/image'

export default function PrincipalMessage() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">

          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-72 md:h-[380px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-[#0a1f44]/10">
              <Image
                src="/image/principal.png"
                alt="Principal of Gnana Gangothri Vidyalaya"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-4">
              Principal’s Message
            </h2>

<p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-normal md:tracking-tight mb-3 text-justify">
  Education is not merely the acquisition of knowledge, but the
  cultivation of values, character, and vision. At{' '}
  <span className="font-semibold text-[#0a1f44]">
    Gnana Gangothri Vidyalaya
  </span>
  , we strive to create an environment where every child feels
  valued, inspired, and empowered to reach their full potential.
</p>

<p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-normal md:tracking-tight mb-3 text-justify">
  Through innovative teaching methods and continuous mentoring, we
  encourage students to explore their strengths, embrace challenges,
  and develop a lifelong passion for learning in a supportive and
  nurturing environment.
</p>

<p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-normal md:tracking-tight text-justify">
  In partnership with parents and the wider community, we strive to
  shape responsible individuals who demonstrate empathy, integrity,
  and the confidence to succeed in an ever-changing world.
</p>

            <div className="mt-5">
              <h4 className="text-base font-semibold text-[#0a1f44]">
                Mrs. Kavitha N. Rao
              </h4>
              <p className="text-sm text-gray-500">
                Principal, Gnana Gangothri Vidyalaya
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
