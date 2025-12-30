'use client'

import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-[#0a1f44] py-14 md:py-18">
      <div className="max-w-5xl mx-auto px-5 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Shape Your Child’s Future With Us
        </h2>

        <p className="text-sm md:text-base text-gray-200 mb-8">
          Admissions are now open at Gnana Gangothri Vidyalaya.  
          Join a nurturing environment focused on academic excellence,
          character building, and holistic development.
        </p>
<div className="flex justify-center gap-4 flex-wrap">
  <Link
    href="/admission"
    className="bg-white text-[#0a1f44] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
  >
    Apply for Admission
  </Link>

  <Link
    href="/contact"
    className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0a1f44] transition"
  >
    Contact Us
  </Link>
</div>

      </div>
    </section>
  )
}
