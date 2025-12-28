'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '../ui/H1'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'What is the admission process?',
    a: 'Parents can apply online or visit the school campus. Our team will guide you through the complete admission process.',
  },
  {
    q: 'Which curriculum does the school follow?',
    a: 'We follow a well-structured curriculum focusing on academics, discipline, and overall student development.',
  },
  {
    q: 'Are transport facilities available?',
    a: 'Yes, safe and reliable transport facilities are available with GPS-enabled buses.',
  },
  {
    q: 'Does the school provide extracurricular activities?',
    a: 'Yes, we encourage sports, cultural activities, and skill-based learning.',
  },
]

export default function Faq() {
  const sectionRef = useRef(null)
  const contentRefs = useRef([])
  const [active, setActive] = useState(null)

  // 🔹 Scroll reveal animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(sectionRef.current.children)

      gsap.from(items, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Set initial accordion state
      contentRefs.current.forEach(el => {
        gsap.set(el, { height: 0, opacity: 0 })
      })
    })

    return () => ctx.revert()
  }, [])

  // 🔹 Accordion toggle handler
  const toggleItem = index => {
    if (active === index) {
      gsap.to(contentRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      })
      setActive(null)
      return
    }

    // Close previous
    if (active !== null) {
      gsap.to(contentRefs.current[active], {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.inOut',
      })
    }

    // Open current
    gsap.to(contentRefs.current[index], {
      height: 'auto',
      opacity: 1,
      duration: 0.35,
      ease: 'power2.out',
    })

    setActive(index)
  }

  return (
    <section className="bg-white flex flex-col items-center  gap-10 min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3">
      <div>
        <H1 data="FAQ " />
      </div>

      <div
        ref={sectionRef}
        className="    flex flex-col gap-3 "
      >
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleItem(i)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="text-[15px] sm:text-[17px] md:text-[19px]  lg:text-[21px] xl:text-[23px] font-semibold">{item.q}</span>
              <span className="text-2xl leading-none">
                {active === i ? '−' : '+'}
              </span>
            </button>

            <div
              ref={el => (contentRefs.current[i] = el)}
              className="px-5 text-[13px] sm:text-[14px] md:text-[16px]  lg:text-[18px] xl:text-[20px] text-gray-600 overflow-hidden"
            >
              <p className="pb-4">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
