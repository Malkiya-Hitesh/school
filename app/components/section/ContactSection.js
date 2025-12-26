'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import H1 from '../ui/H1'

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
    <section className="bg-white py-10 flex flex-col items-center mt-3 gap-10">
      <div>
        <H1 data="Contact Us" />
      </div>

      <div
        ref={sectionRef}
        className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-10 px-4 w-full"
      >
        {/* LEFT INFO */}
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Feel free to contact us for admissions or any queries.
          </p>

          <div className="flex items-start gap-4">
            <FiMapPin className="text-xl mt-1 text-black" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-600">
                Gnanagangothri Vidyalaya, Bengaluru
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiPhone className="text-xl mt-1 text-black" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiMail className="text-xl mt-1 text-black" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">info@schoolname.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-2xl space-y-4"
        >
          <input
            name="name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Your Name"
          />

          <input
            name="email"
            type="email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Email Address"
          />

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
