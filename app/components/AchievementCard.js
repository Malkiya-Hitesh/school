'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AchievementCard() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  const images = [
    "/image/Slide_1.webp",
    "/image/Slide_2.webp",
    "/image/Slide_3.webp"
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
    /* ---------------- SCROLL ANIMATION ---------------- */
    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    })

    /* ---------------- HOVER ANIMATIONS ---------------- */
    cardsRef.current.forEach(card => {
      const overlay = card.querySelector('.overlay')
      const image = card.querySelector('img')
      const text = overlay.querySelectorAll('.text')

      gsap.set(overlay, { y: '100%' })
      gsap.set(text, { y: 20, opacity: 0 })

      card.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power3.out'
        })

        gsap.to(overlay, {
          y: 0,
          duration: 0.5,
          ease: 'power3.out'
        })

        gsap.to(text, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.4,
          ease: 'power3.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: 'power3.inOut'
        })

        gsap.to(overlay, {
          y: '100%',
          duration: 0.4,
          ease: 'power3.in'
        })

        gsap.to(text, {
          y: 20,
          opacity: 0,
          duration: 0.3
        })
      })
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24"
    >
      {images.map((img, index) => (
        <div
          key={index}
          ref={el => (cardsRef.current[index] = el)}
          className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
        >
          <Image
            src={img}
            width={400}
            height={300}
            alt={`Achievement ${index + 1}`}
            className="w-full h-full object-cover"
          />

          <div className="overlay absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end text-white">
            <h3 className="text text-lg font-semibold">
              {titles[index]}
            </h3>
            <p className="text text-sm mt-2">
              {descriptions[index]}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AchievementCard
