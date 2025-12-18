'use client'
import React, { useEffect } from 'react'
import H1 from './ui/H1'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const images = [
  { row: 1, col: 1, img: '/image/event_images/1.jpg' },
  { row: 1, col: 3, img: '/image/event_images/2.jpg' },
  { row: 1, col: 5, img: '/image/event_images/3.jpg' },
  { row: 2, col: 2, img: '/image/event_images/4.jpg' },
  { row: 2, col: 4, img: '/image/event_images/5.jpg' },
  { row: 3, col: 1, img: '/image/event_images/6.jpg' },
  { row: 3, col: 3, img: '/image/event_images/7.jpg' },
  { row: 3, col: 5, img: '/image/event_images/8.jpg' },
  { row: 4, col: 2, img: '/image/event_images/9.jpg' },
  { row: 4, col: 4, img: '/image/event_images/10.jpg' },
  { row: 5, col: 1, img: '/image/event_images/11.jpg' },
  { row: 5, col: 3, img: '/image/event_images/18.jpg' },
  { row: 5, col:5, img: '/image/event_images/10.jpg' },
  { row: 6, col: 2, img: '/image/event_images/11.jpg' },
  { row: 6, col: 4, img: '/image/event_images/12.jpg' },
  { row: 7, col: 1, img: '/image/event_images/13.jpg' },
  { row: 7, col: 3, img: '/image/event_images/14.jpg' },
  { row: 7, col: 5, img: '/image/event_images/15.jpg' },
  { row: 8, col: 2, img: '/image/event_images/16.jpg' },
  { row: 8, col: 4, img: '/image/event_images/17.jpg' },
  { row: 9, col: 1, img: '/image/event_images/18.jpg' },
  { row: 9, col: 3, img: '/image/event_images/19.jpg' },
  { row: 9, col: 5, img: '/image/event_images/20.jpg' },
]

export default function EventSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const gridItems = gsap.utils.toArray('.grids .grid')

      gridItems.forEach((item) => {
        const image = item.querySelector('.grid-img')

        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
          .fromTo(
            image,
            {
              scale: 0,
              opacity: 0,
             
            },
            {
              scale: 1.4,
              opacity: 1,
              ease: 'none',
            }
          )
          .to(image, {
            scale: 0,
            opacity: 0,
            ease: 'none',
          })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-white py-10 flex flex-col items-center mt-6 gap-8">
      <H1 data="School Events" />

      {/* ✅ ADD REQUIRED CLASSES */}
      <div className="grids relative grid grid-cols-5 w-full min-h-[300vh]">
        {images.map((item, index) => (
          <div
            key={index}
            className="grid relative will-change-transform"
            style={{
              gridColumn: item.col,
              gridRow: item.row,
            }}
          >
            <div
              className="grid-img aspect-square w-full rounded-xl bg-cover bg-center contrast-[70%]"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
