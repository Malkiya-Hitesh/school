'use client'
import React, { useEffect, useRef } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import gsap from 'gsap';

function Home() {


  const heroRef = useRef(null)

  useEffect(() => {
    const images = [
      "/image/hero_1.jpg",
      "/image/hero_2.jpg",
      "/image/hero_3.jpg",
      "/image/hero_4.jpg",
    ]

    let index = 0

    // set first image
    gsap.set(heroRef.current, {
      backgroundImage: `url(${images[0]})`,
    })

  
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % images.length

      // fade out current image
      gsap.to(heroRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })

      // fade in next image **overlapping**
      gsap.fromTo(heroRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out", onStart: () => {
          gsap.set(heroRef.current, { backgroundImage: `url(${images[nextIndex]})` })
        }}
      )

      index = nextIndex
    }, 4000)


    return () => clearInterval(interval)
  }, [])

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
      <main  className="relative min-w-[100vw] min-h-screen bg-cover bg-center bg-no-repeat mt-[7.5rem] lg:mt-[8.1rem]">
         <div
     ref={heroRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
        <div className="bg-[#1111115a] min-w-[100vw] min-h-screen backdrop-brightness-50 flex items-center">
          <div className="w-full max-w-4xl mx-auto text-center px-6 py-24">
            <h1 className="home-head text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
             Gnana Gangothri Vidyalaya
            </h1>

            <p className="home-sub mt-6 text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Empowering students with quality education, strong values, and modern learning in bangalore.
            </p>

            <span className="home-badge inline-block mt-6 bg-yellow-300/95 text-black text-sm font-medium px-3 py-1 rounded-full">
              Admissions Open for All
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
