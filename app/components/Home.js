'use client'
import React, { useEffect, useRef } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import gsap from 'gsap';
import AchievementCard from './AchievementCard';

function Home() {


  // const heroRef = useRef(null)

  // useEffect(() => {
  //   const images = [
  //     "/image/hero_4.jpg",
  //     "/image/hero_4.jpg",
  //     "/image/hero_4.jpg",
  //     "/image/hero_4.jpg",
  //   ]

  //   let index = 0

  //   // set first image
  //   gsap.set(heroRef.current, {
  //     backgroundImage: `url(${images[0]})`,
  //   })


  //   const interval = setInterval(() => {
  //     const nextIndex = (index + 1) % images.length

  //     // fade out current image
  //     gsap.to(heroRef.current, {
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power2.out",
  //     })

  //     // fade in next image **overlapping**
  //     gsap.fromTo(heroRef.current,
  //       { scale: 0.8, opacity: 0 },
  //       { scale: 1, opacity: 1, duration: 1, ease: "power2.out", onStart: () => {
  //         gsap.set(heroRef.current, { backgroundImage: `url(${images[nextIndex]})` })
  //       }}
  //     )

  //     index = nextIndex
  //   }, 4000)


  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {

  gsap.to('.home-head', {
    backgroundPosition: '200% 50%',
    duration: 2,
    ease: 'linear',
    repeat: -1,
  
  })



    const startAnimation = () => {
      const tl = gsap.timeline();
      tl.from('.home-head', {
        y: -80,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',

      })
      tl.from('.home-sub', {
        y: -40,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      }, '-=0.5')
      tl.from('.home-badge', {
        y: -20,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      }, '-=0.5')
    }
    window.addEventListener('loaderFinished', startAnimation)

    return () => window.removeEventListener('loaderFinished', startAnimation)
  }, []);
  return (
    <>
      <main className=" bg-[url('/image/hero_4.jpg')] not-first: min-w-[100vw] bg-cover  min-h-screen object-cover bg-no-repeat mt-[7.5rem] lg:mt-[8.1rem] ">


        {/* <div className="bg-[#1111115a] min-w-[100vw] min-h-screen backdrop-brightness-50 flex items-center"> */}/
        <div className=' inset-0 bg-gradient-to-t from-black to-transparent'>
          <div className=" flex justify-center items-center  flex-col gap-4 w-full max-w-4xl mx-auto text-center px-6 py-24">
       <h1 className="home-head relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-[length:200%_200%] bg-[position:0%_50%] drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
  Gnana Gangothri Vidyalaya
</h1>







            {/* <p className="home-sub mt-6 text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Empowering students with quality education, strong values, and modern learning in bangalore.
            </p> */}

            {/* <span className="home-badge inline-block mt-6 bg-yellow-300/95 text-black text-sm font-medium px-3 py-1 rounded-full">
              Admissions Open for All
            </span> */}

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <Button theme={"light"}>
                Admission Now
              </Button>
              <Button theme={"dark"}>Contact Us</Button>
            </div>
            <div className=' w-[90vw] h-auto '>
              <AchievementCard />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
