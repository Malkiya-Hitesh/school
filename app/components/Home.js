'use client'
import React, { useEffect } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import gsap from 'gsap';

function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.home-head', {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.4,
    })
    tl.from('.home-sub', {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.9')
    tl.from('.home-badge', {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.8')
  }, []);
  return (
    <>
      <main className="bg-[url('/image/logo.jpg')] min-w-[100vw] min-h-screen bg-cover bg-center bg-no-repeat mt-[7.5rem] lg:mt-[8.1rem]">
        <div className="bg-[#1111115a] min-w-[100vw] min-h-screen backdrop-brightness-50 flex items-center">
          <div className="w-full max-w-4xl mx-auto text-center px-6 py-24">
            <h1 className="home-head text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Sarsvati Vidhayalay School
            </h1>

            <p className="home-sub mt-6 text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Empowering students with quality education, strong values, and modern learning in Kamlapur, Surendranagar.
            </p>

            <span className="home-badge inline-block mt-6 bg-yellow-300/95 text-black text-sm font-medium px-3 py-1 rounded-full">
              Admissions Open for 2025–26
            </span>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <Button theme={"light"}>
                Admission Now
              </Button>
              <Button theme={"dark"}>Contact Us</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
