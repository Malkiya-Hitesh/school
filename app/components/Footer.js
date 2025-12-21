import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { NavLink } from './NavbarClient';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white text-gray-800" role="contentinfo">
            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="flex-1">
                    <Link href="/" className="text-2xl font-semibold inline-block">Gnana Gangothri Vidyalaya</Link>
                    <p className="text-sm text-gray-600 mt-2">Committed to nurturing curious, confident learners through holistic education.</p>

                    <address className="not-italic mt-4 text-sm text-gray-600">
                        Kamlapur, Surendranagar, Gujarat<br />
                        <a href="tel:+919000000000" className="text-gray-700 hover:underline">+91 90000 00000</a> · <a href="mailto:info@ggnanagangothrividyalaya.in" className="text-gray-700 hover:underline">info@ggnanagangothrividyalaya.in</a>
                    </address>
                </div>

                <nav aria-label="Footer navigation" className="flex-1 md:flex md:justify-center">
                    <ul className="flex flex-col md:flex-row gap-3 md:gap-6 list-none p-0 m-0">
                        <li><NavLink h={'/'} data={'Home'} /></li>
                        <li><NavLink h={'/about'} data={'About'} /></li>
                        <li><NavLink h={'/staff'} data={'Staff'} /></li>
                        <li><NavLink h={'/notice'} data={'Notice'} /></li>
                        <li><NavLink h={'/gallery'} data={'Gallery'} /></li>
                        <li><Link href="/admission" className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">Admission</Link></li>
                        <li><Link href="/contact" className="px-3 py-1 rounded-md border border-gray-200 text-sm">Contact</Link></li>
                    </ul>
                </nav>

                <div className="flex-1 flex items-start justify-end">
                    <ul className="flex gap-4">
                        <li>
                            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500"> <FaInstagram /> </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600"> <FaFacebookF /> </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-500"> <FaTwitter /> </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <small className="text-xs text-gray-500">© {year} Gnana Gangothri Vidyalaya — All rights reserved.</small>
                    <small className="text-xs text-gray-500">Designed &amp; by the  malkiya hitesh</small>
                </div>
            </div>
        </footer>
    )
}
