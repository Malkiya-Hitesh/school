'use client'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '../ui/H1'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
    {
        q: 'What is the admission process?',
        a: 'Parents can apply online or visit the school campus. Our team will guide you through the complete admission process.',
    },
    {
        q: 'Which curriculum does the school follow?',
        a: 'We follow a well-structured curriculum focusing on academics, discipline, and overall student development.',
    },
    {
        q: 'Are transport facilities available?',
        a: 'Yes, safe and reliable transport facilities are available with GPS-enabled buses.',
    },
    {
        q: 'Does the school provide extracurricular activities?',
        a: 'Yes, we encourage sports, cultural activities, and skill-based learning.',
    },
]

export default function Fqa() {
    const sectionRef = useRef(null)
    const [active, setActive] = useState(null)

    useEffect(() => {
        gsap.from(sectionRef.current.children, {
            opacity: 0,
            y: 60,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
        })
    }, [])

    return (
        <section className="bg-white py-10 flex flex-col items-center mt-3 gap-10">
            <div>
                <H1 data="Frequently Asked Questions" />
            </div>
            <div ref={sectionRef} className="max-w-3xl mx-auto mt-12 space-y-4 px-4">
                {faqs.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white border rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => setActive(active === i ? null : i)}
                            className="w-full flex justify-between items-center p-5 text-left"
                        >
                            <span className="font-semibold text-lg">
                                {item.q}
                            </span>
                            <span className="text-2xl">
                                {active === i ? '−' : '+'}
                            </span>
                        </button>

                        <div
                            className="px-5 text-gray-600 transition-all duration-300"
                            style={{
                                maxHeight: active === i ? '200px' : '0px',
                                opacity: active === i ? 1 : 0,
                                paddingBottom: active === i ? '16px' : '0px',
                            }}
                        >
                            {item.a}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
