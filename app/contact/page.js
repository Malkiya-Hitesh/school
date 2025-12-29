'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSchool,
  FaWhatsapp,
} from 'react-icons/fa'
import { MdAccessTime, MdSend } from 'react-icons/md'
import H1 from '../components/ui/H1'
import gsap from 'gsap'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // GSAP refs
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const successRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      e.target.reset()
    }, 1500)
  }

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.from(leftRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.9,
        delay: 0.4,
        ease: 'power3.out',
      })

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  // Success message animation
  useEffect(() => {
    if (success && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [success])

  return (
    <section
      ref={sectionRef}
      className="min-[1024px]:mt-[6.7rem] mt-[6.2rem] max-[640px]:mt-[4.2rem] relative w-full  bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3"
    >
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <H1 data="Contact Us" />
        <h1 className="mt-4 text-indigo-900 font-semibold text-lg">
          We'd love to hear from you! Reach out with any questions or feedback.
        </h1>
      </div>

      <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div ref={leftRef} className="space-y-8">

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <InfoCard icon={<FaSchool />} title="Our School" text="XYZ Public School" />
            <InfoCard icon={<FaPhoneAlt />} title="Call Us" text="+91 9XXXXXXXXX" />
            <InfoCard icon={<FaEnvelope />} title="Email" text="info@schoolname.com" />
            <InfoCard icon={<MdAccessTime />} title="Working Hours" text="Mon – Sat | 8 AM – 4 PM" />
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe
              title="School Location"
              src="https://www.google.com/maps?q=Rajkot,Gujarat&output=embed"
              className="w-full h-72"
              loading="lazy"
            />
          </div>

          {/* Admission Highlight */}
          <div className="flex items-center gap-4 p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
            <FaWhatsapp className="text-4xl" />
            <div>
              <h3 className="text-xl font-bold">Admissions Open</h3>
              <p className="text-sm">WhatsApp us for quick admission support</p>
              <p className="font-semibold mt-1">+91 9XXXXXXXXX</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div
          ref={rightRef}
          className="bg-white rounded-3xl shadow-2xl p-4 sm:p-5  md:p-6 lg:p-7 xl-9 relative overflow-hidden"
        >
          <div className="absolute top-20 right-20 w-40 h-40 bg-indigo-200 rounded-full opacity-40" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-100 rounded-full opacity-40" />

          <h2 className="text-2xl font-bold text-indigo-900 mb-6">
            Send Message
          </h2>

          {success && (
            <p
              ref={successRef}
              className="mb-4 text-green-600 font-semibold"
            >
              Message sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <input required placeholder="Full Name" className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input required placeholder="Mobile Number" className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input placeholder="Email Address" className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none" />

            <select required className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none">
              <option value="">Select Subject</option>
              <option>Admission Inquiry</option>
              <option>General Question</option>
              <option>Feedback / Complaint</option>
            </select>

            <textarea rows="4" required placeholder="Your Message" className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none" />

            <button
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              <MdSend />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="p-6 rounded-2xl bg-white text-indigo-900 shadow-lg flex flex-col items-center gap-4 text-center">
      <div className="text-3xl">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm">{text}</p>
    </div>
  )
}
