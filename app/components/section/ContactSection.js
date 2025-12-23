'use client'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '../ui/H1'


gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
    const ref = useRef(null)

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null) // success | error

    useEffect(() => {
        gsap.from(ref.current.children, {
            opacity: 0,
            y: 60,
            stagger: 0.2,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
            },
        })
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

        // 👉 DATA LOG (backend / email / DB mate ready)
        console.log('CONTACT FORM DATA 👉', data)

        // Fake API delay (UX feedback mate)
        setTimeout(() => {
            setLoading(false)
            setStatus('success')
            e.target.reset()

            // success message auto hide
            setTimeout(() => setStatus(null), 3000)
        }, 1500)
    }

    return (
        <section className="bg-white py-10 flex flex-col items-center mt-3 gap-10">
            <div>
                <H1 data="Contact Us" />
            </div>


            <div
                ref={ref}
                className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-10 px-4"
            >
                {/* LEFT INFO */}
                <div className="space-y-5">
                    <p className="text-lg text-gray-600">
                        Feel free to contact us for admissions or any queries.
                    </p>

                    <div>
                        <h4 className="font-semibold">📍 Address</h4>
                        <p className="text-gray-600">
                            Gnanagangothri Vidyalaya, Bengaluru
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold">📞 Phone</h4>
                        <p className="text-gray-600">+91 98765 43210</p>
                    </div>

                    <div>
                        <h4 className="font-semibold">✉️ Email</h4>
                        <p className="text-gray-600">info@schoolname.com</p>
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
                        className="w-full p-3 border rounded-lg"
                        placeholder="Your Name"
                    />

                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full p-3 border rounded-lg"
                        placeholder="Email Address"
                    />

                    <textarea
                        name="message"
                        required
                        className="w-full p-3 border rounded-lg h-32"
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

                    {/* FEEDBACK MESSAGE */}
                    {status === 'success' && (
                        <p className="text-green-600 font-medium text-center">
                            ✅ Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}
