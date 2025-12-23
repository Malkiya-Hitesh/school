'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Baloo_2 } from "next/font/google"

gsap.registerPlugin(ScrollTrigger)

const baloo = Baloo_2({ subsets: ["latin"], weight: "700" })

function H1({ data }) {
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      )
    }, headingRef)

    return () => ctx.revert()
  }, [])

  return (
    <h1
      ref={headingRef}
      className={`${baloo.className} text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text`}
    >
      {data}
    </h1>
  )
}

export default H1
