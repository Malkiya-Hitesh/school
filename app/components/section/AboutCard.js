'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TbTargetArrow } from 'react-icons/tb'
import { FaEye, FaSchool } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

export default function AboutCard() {
    const containerRef = useRef(null)
    const cardsRef = useRef([])

    const data = [
        {
            icon: <TbTargetArrow className="text-blue-500 text-2xl" />,
            title: 'Our Mission',
            description:
                'Our mission is to provide a nurturing and inclusive learning environment that empowers students with knowledge, skills, and strong moral values. We are committed to academic excellence, creativity, and character development, preparing students to succeed in a rapidly changing world.',
        },
        {
            icon: <FaEye className="text-blue-500 text-2xl" />,
            title: 'Our Vision',
            description:
                'Our vision is to become a leading educational institution that inspires lifelong learning, innovation, and social responsibility. We strive to shape confident, compassionate, and future-ready individuals who contribute positively to society.',
        },
        {
            icon: <FaSchool className="text-blue-500 text-2xl" />,
            title: 'Origin & History',
            description:
                'Founded with a strong belief in quality education, our school began its journey with a vision to serve the community through knowledge and values. Over the years, we have grown into a trusted institution, nurturing generations of students with dedication and excellence.',
        },
    ]

    useEffect(() => {


        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    end: 'bottom 60%',
                    scrub: true,
                },
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {data.map((item, index) => (
                <div
                    key={index}
                    ref={el => (cardsRef.current[index] = el)}
                    className={` bg-gradient-to-br from-blue-100 via-white to-white border border-blue-100 p-6 rounded-2xl border-t-5 border-blue-400 shadow-md hover:shadow-lg transition-shadow duration-300
            ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
          `}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            {item.icon}
                        </div>
                        <h3 className="ml-3 text-xl font-semibold text-gray-800">
                            {item.title}
                        </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
