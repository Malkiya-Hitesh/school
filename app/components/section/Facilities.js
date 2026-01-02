'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaChalkboardTeacher,
  FaFlask,
  FaBookOpen,
  FaBasketballBall,
  FaBus,
  FaShieldAlt,
} from 'react-icons/fa'
import H1 from '../ui/H1'
import H3 from '../ui/H3'
import P from '../ui/P'

gsap.registerPlugin(ScrollTrigger)

export default function Facilities() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const facilities = [
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
      title: 'Smart Classrooms',
      desc: 'Digitally enabled classrooms for interactive and effective learning.',
    },
    {
      icon: <FaFlask className="text-blue-600 text-4xl" />,
      title: 'Science & Computer Labs',
      desc: 'Well-equipped labs encouraging experimentation and innovation.',
    },
    {
      icon: <FaBookOpen className="text-blue-600 text-4xl" />,
      title: 'Library',
      desc: 'A rich collection of academic and reference resources.',
    },
    {
      icon: <FaBasketballBall className="text-blue-600 text-4xl" />,
      title: 'Sports Facilities',
      desc: 'Indoor and outdoor sports for physical development.',
    },
    {
      icon: <FaBus className="text-blue-600 text-4xl" />,
      title: 'Transport',
      desc: 'Safe and reliable transportation with trained staff.',
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-4xl" />,
      title: 'Safety & Security',
      desc: 'CCTV surveillance and disciplined campus environment.',
    },
  ]

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub :true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section

      className="bg-[var(--bg-light)] flex flex-col items-center justify-center gap-8  lg:py-18 xl:py-20 md:py-13 sm:py-8  py-5 xl:px-13 lg:px-10 md:px-7 sm:px-5 px-3"
    >
   <div>
    <H1 data="Our Facilities" />
   </div>

      <div  ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group bg-gradient-to-br from-blue-100 via-white to-white border border-blue-100   border-blue-400  rounded-2xl p-6  border-t-5 rounded-2xl shadow-md hover:shadow-lg "
          >
            {/* Icon */}
            <div className="mb-5">{item.icon}</div>

            {/* Content */}
            <H3  className="text-xl font-semibold text-[var(--text-d)] mb-2"
                data={item.title} />
            <P className="text-[var(--text-m)] mb-4"
              data={item.desc}
            />  

            
          </div>
        ))}
      </div>
    </section>
  )
}
