'use client'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '@/app/components/ui/H1'


gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: "What is the age criteria for admission?",
    a: "The age criteria varies depending on the grade. Generally, for kindergarten, the age is 3-5 years, and for primary school, it is 6-10 years."
  },
  {
    q: "What documents are required for admission?",
    a: "You need to provide Birth Certificate, Previous School TC, Report Card, Aadhaar / ID proof, and passport-size photographs."
  },
  {
    q: "Is there any entrance test?",
    a: "For lower grades, there is no formal test. For higher grades, a friendly assessment or interaction session may be conducted."
  },
  {
    q: "How do I pay the fees?",
    a: "Fee payment can be done online via our payment portal or offline at the school office after admission confirmation."
  },
  {
    q: "When is the admission process open?",
    a: "Admissions are generally open from January to March for the new academic year. Exact dates are announced on the school website."
  },
  {
    q: "Can I apply for multiple grades?",
    a: "Yes, parents can submit applications for multiple grades, but each application must be submitted separately for evaluation."
  },
  {
    q: "Is there a registration fee?",
    a: "Yes, a nominal non-refundable registration fee is required at the time of submitting the application form."
  },
  {
    q: "Can I schedule a school visit before admission?",
    a: "Absolutely! Parents are encouraged to schedule a visit to our campus to understand the facilities and environment."
  },
  {
    q: "Do you provide scholarships?",
    a: "Yes, the school provides merit-based and need-based scholarships. Eligibility and application details are available on the admissions page."
  },
  {
    q: "Who can I contact for more admission details?",
    a: "You can contact our admission office via email or phone. Contact details are provided on the admissions page of the school website."
  }
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
