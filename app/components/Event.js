'use client'
import React, { useEffect } from 'react'
import H1 from './ui/H1'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const images = [
  { row: 1, col: 1, img: '/image/1.webp' },
  { row: 1, col: 3, img: '/image/2.webp' },
  { row: 1, col: 5, img: '/image/3.webp' },
  { row: 2, col: 2, img: '/image/4.webp' },
  { row: 2, col: 4, img: '/image/5.webp' },
  { row: 3, col: 1, img: '/image/6.webp' },
  { row: 3, col: 3, img: '/image/7.webp' },
  { row: 3, col: 5, img: '/image/8.webp' },
  { row: 4, col: 2, img: '/image/9.webp' },
  { row: 4, col: 4, img: '/image/10.webp' },
  { row: 5, col: 1, img: '/image/11.webp' },
  { row: 5, col: 3, img: '/image/18.webp' },
  { row: 5, col:5, img: '/image/10.webp' },
  { row: 6, col: 2, img: '/image/11.webp' },
  { row: 6, col: 4, img: '/image/12.webp' },
  { row: 7, col: 1, img: '/image/13.webp' },
  { row: 7, col: 3, img: '/image/14.webp' },
  { row: 7, col: 5, img: '/image/15.webp' },
  { row: 8, col: 2, img: '/image/16.webp' },
  { row: 8, col: 4, img: '/image/17.webp' },
  { row: 9, col: 1, img: '/image/18.webp' },
  { row: 9, col: 3, img: '/image/19.webp' },
  { row: 9, col: 5, img: '/image/20.webp' },
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
