'use client'

import React, { useEffect, useRef } from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import gsap from 'gsap'
import AchievementCard from './AchievementCard'
import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({ subsets: ['latin'], weight: '400' })

function HomeClient() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const buttonsRef = useRef(null)
 const animatedRef = useRef(false)



  

  useEffect(() => {

 const runAnimation = () => {
      if (animatedRef.current) return
      animatedRef.current = true

      const ctx = gsap.context(() => {

 gsap.to(titleRef.current, {
        backgroundPosition: '200% 50%',
        duration: 3,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
      })

      // Entrance animation using fromTo
      const tl = gsap.timeline()
      tl.fromTo(
        titleRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
      ).fromTo(
        buttonsRef.current,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
        '-=0.5'
      )
    }, containerRef)
   return () => ctx.revert()
    }

    const handler = () => requestAnimationFrame(() => runAnimation())

    // Listen for loaderFinished event
    window.addEventListener('loaderFinished', handler)

    // Run immediately if loader already finished
    if (sessionStorage.getItem('school-loader-done')) {
      console.log('Loader already finished → running animation immediately')
      handler()
    }

    return () => window.removeEventListener('loaderFinished', handler)
  }, [])

  return (
    <main
      ref={containerRef}
      className="bg-[url('/image/hero_4.webp')] min-w-[100vw] bg-cover bg-no-repeat min-[1024px]:mt-[6.7rem] mt-[6.2rem] max-[640px]:mt-[4.2rem]"
    >
      <div className="relative inset-0 bg-gradient-to-t from-black/90 to-transparent">
        <div className="flex flex-col items-center gap-4 w-full max-w-4xl mx-auto text-center px-6 py-32">
          <h1
            ref={titleRef}
            className={`${lilita.className} text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-[length:200%_200%] bg-[position:0%_50%] drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]`}
          >
            Gnana Gangothri Vidyalaya
          </h1>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
          >
            <Button theme="light">Admission Now</Button>
            <Button theme="dark">Contact Us</Button>
          </div>

          <div className="w-[90vw] h-auto">
            <AchievementCard />
          </div>
        </div>

        <Image
          src="/image/home-b.svg"
          alt="Hero Overlay"
          width={100}
          height={10}
          className="pointer-events-none rotate-180 select-none w-[100vw] absolute bottom-[-10] left-0 right-0"
        />
      </div>
    </main>
  )
}

export default HomeClient
