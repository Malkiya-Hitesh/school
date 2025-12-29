
// app/admissions/components/AdmissionsHero.jsx
'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import Button from '@/app/components/ui/Button'

const AdmissionsHero = () => {
  const p1 = useRef(null)
  const h1Ref = useRef(null)
  const p2 = useRef(null)
  const buttonsRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(p1.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )
    tl.fromTo(h1Ref.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      '-=0.8'
    )
    tl.fromTo(p2.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      '-=0.5'
    )
    tl.fromTo(buttonsRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 },
      '-=0.6'
    )
    tl.fromTo(
      rightRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1 },
      '-=1.6'
    )
  }, [])

  return (
    <section className=" w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3 ">

      {/* Decorative Blur Shapes */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div> */}



      <div className=" grid min-[885px]:grid-cols-2 grid-cols-1 xl:gap-15 sm:gap-10  lg:gap-10  min-[885px]:gap-6 items-center ">

        {/* LEFT CONTENT */}
        <div >
          <p ref={p1} className="inline-block px-4 py-1 mb-4 max-[490px]:text-[11px] text-[12px] sm:text-[14px] min-[885px]:text-[11px] lg:text-[14px] xl:text-[16px]  font-semibold text-blue-700 bg-blue-100 rounded-full">
            Admissions Open
          </p>

          <h1 ref={h1Ref} className="  text-[45px]  sm:text-[55px] min-[885px]:text-[42px] lg:text-[47px] xl:text-[55px] font-extrabold text-gray-900 leading-tight">
            Begin Your Child’s <br />
            <span className="text-blue-600">Learning Journey</span>
          </h1>

          <p ref={p2} className="sm:mt-6 mt-3   max-[490px]:text-[13px] text-[15px]  sm:text-[16px] min-[885px]:text-[13px] lg:text-[16px] xl:text-[18px] text-gray-600 max-w-xl">
            Join a nurturing environment that focuses on academic excellence,
            creativity, and holistic development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
             
            >
              <Button theme="dark">Apply Now</Button>

            </Link>

            <Link
              href="/about"
              >
              <Button theme="webp">Learn More</Button>
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div ref={rightRef} className="relative  ">
          <div className="relative w-full h-[420px] rounded-3xl bg-white shadow-2xl p-8">

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600 rounded-2xl"></div>

            <div className="relative h-full rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100">
              <Image
                src="/image/hero_4.webp"
                alt="Campus Preview"
                fill
                className="rounded-xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AdmissionsHero
