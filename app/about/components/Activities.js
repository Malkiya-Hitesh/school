'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Activities() {
  const activities = [
    {
      title: 'Martial Arts',
      image: '/image/Martial Arts.webp',
      description:
        'Martial arts training builds discipline, focus, confidence, and self-defense skills.',
    },
    {
      title: 'Robotics',
      image: '/image/Robotics.webp',
      description:
        'Robotics encourages innovation, logic, problem-solving, and creativity.',
    },
    {
      title: 'Symphony',
      image: '/image/Slide_1.webp',
      description:
        'Music and performing arts nurture creativity and self-expression.',
    },
    {
      title: 'Science Fair',
      image: '/image/Slide_3.webp',
      description:
        'Science fairs promote curiosity, experimentation, and scientific thinking.',
    },
    {
      title: 'Annual Function',
      image: '/image/10.webp',
      description:
        'Annual functions celebrate talent, confidence, teamwork, and culture.',
    },
  ]

  const [current, setCurrent] = useState(0)

  // Auto slide (optional – remove if not needed)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % activities.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [activities.length])

  return (
    <section className="bg-[#f8fafc] py-16 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 text-center mb-14">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0a1f44]">
          Extra Curricular Activities
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Activities designed for creativity, discipline, and holistic development.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-5xl mx-auto px-5">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {activities.map((item, index) => (
              <div key={index} className="min-w-full bg-white">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0a1f44]/30"></div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#0a1f44] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xl mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index
                  ? 'bg-[#0a1f44] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
