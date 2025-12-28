

'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavButoon from '../ui/NavButoon'
import ResposiveNave from './ResposiveNave';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Rubik } from "next/font/google"
// import NavDropdown from './ui/NavDropdown';
const rubik = Rubik({ subsets: ["latin"], weight: ["500", "600", "700"] })
export default function NavbarClient() {
  const navRef = useRef(null)


  const animatedRef = useRef(false)
  useEffect(() => {
    const runAnimation = () => {
      if (animatedRef.current) return
      animatedRef.current = true

      const ctx = gsap.context(() => {
        const links = gsap.utils.toArray('.nav-link a')
        const logo = navRef.current.querySelector('.logo-img')

        gsap.fromTo(
          links,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
          }
        )

        gsap.from(logo, {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: 'power3.out',
        })
      }, navRef)

      return () => ctx.revert()
    }

    const handler = () => {
      requestAnimationFrame(() => runAnimation())
    }
 
    window.addEventListener('loaderFinished', handler)

    
    if (sessionStorage.getItem('school-loader-done')) {
      console.log('Loader already finished → running animation immediately')
      handler()
    } return () => window.removeEventListener('loaderFinished', handler)
  }, [])




  return (
    <nav ref={navRef} className='z-5 grid grid-cols-[0.5fr_1.8fr] w-[100vw] min-[1048px]:h-[6.7rem] h-[6.2rem] max-[640px]:h-[4.2rem]   items-center bg-[var(--color-border)] fixed top-0 mb-2 pr-2'>

      <div className='flex justify-start items-center  '>
        <Image
          className='logo-img min-[1024px]:w-[40%] w-[60%] max-[640px]:w-[70%] max-[450px]:w-[85%] min-[1024px]:h-[6.7rem] h-[6.2rem] max-[640px]:h-[4.2rem] object-contain  cursor-pointer '
          src='/image/logo.png'
          width={100}
          height={100}
          alt='logo'
        />

      </div>
      <div className='flex nav-link items-center gap-6 justify-end max-[1048px]:hidden' >
        <NavLink h={"/"} data={"home"} />
        <NavLink h={"/about"} data={"about"} />
        <NavLink h={"/Alumini"} data={"alumini"} />
        <NavLink h={"/academics"} data={"academics"} />
        <NavLink h={"/faculty"} data={"faculty"} />
        <Link href={"/contact"}>
          <NavButoon theme={"dark"}>contact</NavButoon>
        </Link>
        <Link href={"/admission"}>
          <NavButoon theme={"light"}>admission</NavButoon>
        </Link>


      </div>
      <div className=' max-[1048px]:flex hidden justify-end  items-center gap-5 ' >

        <ResposiveNave />

      </div>
    </nav>
  )
}




export const NavLink = ({ data, h }) => {
  return (
    <Link className={`${rubik.className} text-[1.35rem] tracking-[1.5px]
 hover:text-blue-600 font-semibold capitalize`} href={h} >{data}</Link>
  )
}