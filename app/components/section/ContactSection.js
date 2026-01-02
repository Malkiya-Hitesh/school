'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import H1 from '../ui/H1'
import H3 from '../ui/H3'
import Span from '../ui/Span'
import P from '../ui/P'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(sectionRef.current.children)

      gsap.from(items, {
        opacity: 0,
        y: 60,
        stagger: 0.18,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.target)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    console.log('📨 CONTACT FORM DATA →', data)

    setTimeout(() => {
      setLoading(false)
      setStatus('success')
      e.target.reset()
      setTimeout(() => setStatus(null), 3000)
    }, 1500)
  }

  return (
    <section className="bg-white flex flex-col items-center  gap-8  lg:py-18 xl:py-20 md:py-13 sm:py-8  py-5 xl:px-13 lg:px-10 md:px-7 sm:px-5 px-3">
      
      <div>
        <H1 data="Contact Us" />
      </div>



      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 "
      >

        <div>

          <div className="flex items-start gap-8 flex-col justify-center ">
            
            <ContactInfo icon={FiMapPin} title="Address" detail="Gnanagangothri Vidyalaya, Bengaluru" />
            <ContactInfo icon={FiPhone} title="Phone" detail="+91 98765 43210" />
            <ContactInfo icon={FiMail} title="Email" detail="info@schoolname.com" />
               

          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-2xl space-y-4"
        >
          <ContInput name="name" placeholder="Your Name" type='text' />
          <ContInput name="email" placeholder="Email Address" type='email' />
          <ContInput name="number" placeholder="Your Number" type='tel' />


          <textarea
            name="message"
            required
            className="w-full p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Your Message"
          />

          <button
            disabled={loading}
            type="submit"
            className={`w-full py-3 rounded-lg text-white transition
              ${loading ? 'bg-gray-400' : 'bg-black hover:opacity-90'}
            `}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 font-medium text-center">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}


const ContInput = ({ name, placeholder, type = 'text' }) => {
  return (
    <input
      name={name}
      type={type}
      required
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
      placeholder={placeholder}
    />
  )
}
const ContactInfo = ({ icon: Icon, title, detail }) => {
  return (
    <div className="flex items-start gap-4 justify-center">  
      <Icon className="font-semibold text-[14px] sm:text-[15px] md:text-[18px]  lg:text-[20px] xl:text-[22px] mt-1 text-blue-600" />
      <div>
        <Span className={"font-semibold "} data={title} />
        <P className={"text-gray-600  "} data={detail} />  
      </div>
    </div>
  )
} 