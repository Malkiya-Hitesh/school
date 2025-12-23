'use client'
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "./Navbar"
import SmoothScrollProvider from "./LenisProvider"
import Cursor from "./Curser"
import Footer from "./Footer"

export default function ClientLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [pathname])

  return (
    <>
      <Navbar />

      <SmoothScrollProvider>
        <Cursor />
        {children}
      </SmoothScrollProvider>

      <Footer />
    </>
  )
}
