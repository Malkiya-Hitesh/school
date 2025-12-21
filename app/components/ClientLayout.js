
"use client"

import Curser from "./Curser"
import Navbar from "./Navbar"
import Footer from "./Footer"
import LenisProvider from "./LenisProvider"

export default function ClientLayout({ children }) {
  return (
    <>
      <Curser />
      <Navbar />
      <LenisProvider>
        {children}
      </LenisProvider>
      <Footer />
    </>
  )
}
