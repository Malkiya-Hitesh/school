   'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from './ui/H1'





export default function Programs() {


 


  const sectionRef = useRef(null)
  const itemsRef = useRef([])
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    itemsRef.current.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 95%',
          end: 'top 45%',
          toggleActions: 'play none none reverse',
          scrub: 0.5,
        },
      });
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);




  const programs = [
    {
      title: 'Pre-Primary Nursery & KG',
      desc: 'Play-based learning that builds curiosity and confidence.',
    },
    {
      title: 'Primary 1 to 5',
      desc: 'Strong foundations in academics and values.',
    },
    {
        title: 'Middle School 6 to 8',
        desc: 'Critical thinking and creativity development.',
    },
    {
      title: 'Secondary 9 & 10',
      desc: 'Concept clarity, discipline and critical thinking.',
    },
    {
      title: 'Higher Secondary 11 & 12',
      desc: 'Career-focused education for future success.',
    },
    {
      title: 'Activities & Skill Programs',
      desc: 'Sports, arts, leadership and personality development.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-white text-slate-900"
    >
      
      <div className="text-center mb-24">
        <H1 data={'Our Programs'} />
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          A structured educational path guiding students at every stage.
        </p>
      </div>

      {/* Path */}
      <div className="relative max-w-4xl mx-auto">
        
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-slate-200 -translate-x-1/2" />

        {programs.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className={`relative mb-24 flex ${
              i % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            
            <div className="absolute left-1/2 top-6 w-5 h-5 bg-blue-600 rounded-full -translate-x-1/2 z-10" />

            {/* content */}
            <div className="w-[80%] md:w-[45%] bg-slate-50 p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
