'use client'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">

        {/* SCHOOL INFO */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Gnanagangothri Vidyalaya
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering students with knowledge, values, and confidence for a
            better future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#programs" className="hover:text-white">Programs</a></li>
            <li><a href="#events" className="hover:text-white">Events</a></li>
            <li><a href="#teachers" className="hover:text-white">Teachers</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Bengaluru, Karnataka</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@gnanagangothri.in</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">Facebook</a>
            <a className="hover:text-white" href="#">Instagram</a>
            <a className="hover:text-white" href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gnanagangothri Vidyalaya. All rights reserved.
      </div>
    </footer>
  )
}
