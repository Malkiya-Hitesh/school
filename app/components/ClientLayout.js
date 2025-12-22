'use client'

import Cursor from "./Curser"
import Footer from "./Footer"
import SmoothScrollProvider from "./LenisProvider"
import Navbar from "./Navbar"



export default function ClientLayout({ children }) {
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
