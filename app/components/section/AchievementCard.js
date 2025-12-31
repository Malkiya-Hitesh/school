'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AchievementCard() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  const images = [
    "/image/Slide_1.webp",
    "/image/Slide_3.webp",
    "/image/Slide_2.webp"
  ]

  const titles = [
    "Best in class teachers",
    "Robotics & Automation",
    "Unity in Diversity"
  ]

  const descriptions = [
    "Awarded as best teachers of South Karnataka from Prestigious KAMS Organization.",
    "Hands-on experience is the way to go for the interdisciplinary aspects of Robotics",
    "We are only as strong as we are united, as weak as we are divided."
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { opacity: 1, y: 0 })
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      })
    }, containerRef)

    return () => {
      ctx.revert()         
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 gap-8 max-[640px]:grid-cols-1"
    >
      {images.map((img, index) => (
        <div
          key={index}
          ref={el => (cardsRef.current[index] = el)}
          className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
        >
          <Image
            src={img}
            width={400}
            height={300}
            alt={`Achievement ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end gap-2 p-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
            <h3 className="text-lg font-semibold">
              {titles[index]}
            </h3>
            <p className="text-sm">
              {descriptions[index]}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AchievementCard
