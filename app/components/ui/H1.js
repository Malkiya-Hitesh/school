'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Baloo_2 } from "next/font/google"
const baloo = Baloo_2({ subsets: ["latin"], weight: "700" })
gsap.registerPlugin(ScrollTrigger)

function H1({ data }) {
  useEffect(() => {
    gsap.fromTo(
      '.h1-animate',
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.h1-animate',
          start: 'top 80%',
          end: 'top 50%',
       
          // markers: true, // enable only for debugging
        },
      }
    )
  }, [])

  return (
    <h1 className={`${baloo.className} h1-animate text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text`}>
      {data}
    </h1>
  )
}

export default H1
