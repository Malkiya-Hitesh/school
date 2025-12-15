import React from 'react'
import Link from 'next/link'
import { NavLink } from './Navbar'
import { FaInstagram } from "react-icons/fa";
import NavButoon from './ui/NavButoon';
export default function Footer() {


    return (
        <footer className="bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="flex-1">
                    <Link href="/" className="text-2xl font-semibold inline-block"> sarasvati vidhyalay school </Link>
                    <p className="text-sm text-gray-600 mt-1"> one of the best schools in the city </p>
                </div>

                <nav aria-label="Footer navigation" className="flex-1 md:flex md:justify-center">
                    <ul className="flex flex-col md:flex-row gap-3 md:gap-6 list-none p-0 m-0">\

                        <li>
                            <NavLink h={"/"} data={"home"} />
                        </li>
                        <li>
                            <NavLink h={"/about"} data={"about"} />
                        </li>
                        <li>
                            <NavLink h={"/staff"} data={"staff"} />
                        </li>
                        <li>
                            <NavLink h={"/notice"} data={"notice"} />
                        </li>
                        <li>
                            <NavLink h={"/gallery"} data={"gallery"} />
                        </li>
                        <li>
                            <NavButoon theme={"dark"}>contact</NavButoon>

                        </li>
                        <li>
                            <NavButoon theme={"light"}>admission</NavButoon>  </li>
                    </ul>
                </nav>

                <div className="flex-1 flex items-start justify-end">
                    <Link href="" > <FaInstagram /></Link>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <small className="text-xs text-gray-500">© 2025 sarasvati vidhyalay school — All rights reserved.</small>
                </div>
            </div>
        </footer>
    )
}
