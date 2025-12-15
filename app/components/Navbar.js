'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavButoon from './ui/NavButoon'
import ResposiveNave from './ResposiveNave';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
// import NavDropdown from './ui/NavDropdown';
function Navbar() {


    useEffect(() => {

        gsap.from('.nav-link a', {
            x: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "elastic.out(1,0.3)",
        })

        gsap.from('.logo-img', {

            x: -40,
            opacity: 0,
            duration: 2,
            ease: "elastic.out(1,0.3)",
        })
    }, []);

    return (
        <nav className='z-5 grid grid-cols-[1fr_1fr] w-[100vw] overflow-visible min-[1024px]:h-[8rem] h-[7.5rem] max-[640px]:h-[5.5rem] pr-[2rem] max-[640px]:pr-[1.5rem] items-center bg-[var(--color-border)] fixed top-0 mb-2'>

            <div className=' '>
                <Image
                    className='logo-img min-[1024px]:w-[40%] w-[60%] max-[640px]:w-[70%] max-[450px]:w-[85%]    min-[1024px]:h-[8rem] h-[7.5rem] max-[640px]:h-[5.5rem]  object-contain  cursor-pointer '
                    src='/image/logo.png'
                    width={1000000}
                    height={100}
                    alt='logo'
                />

            </div>
            <div className='flex nav-link items-center gap-3 justify-between max-[1024]:hidden' >
                <NavLink h={"/"} data={"home"} />
                <NavLink h={"/about"} data={"about"} />
                <NavLink h={"/staff"} data={"staff"} />
                <NavLink h={"/notice"} data={"notice"} />
                <NavLink h={"/gallery"} data={"gallery"} />
                <Link href={"/contact"}>
                    <NavButoon theme={"dark"}>contact</NavButoon>
                </Link>
                <Link href={"/admission"}>
                    <NavButoon theme={"light"}>admission</NavButoon>
                </Link>
                {/* <div>
                    <NavDropdown
                    mobile={false}
                        title="city"
                        items={
                            city.map(item => ({ label: item, href: `/city/${item}` }))
                        }
                    />

                </div> */}
                {/* <NavButoon theme={"dark"}>subscribe</NavButoon> */}
                {/* <NavButoon theme={"light"}>login</NavButoon> */}


            </div>
            <div className=' max-[1024px]:flex hidden justify-end  items-center gap-5 ' >

                <ResposiveNave />

            </div>
        </nav>
    )
}

export default Navbar



export const NavLink = ({ data, h }) => {
    return (
        <Link className='text-[1.35rem] font-semibold capitalize' href={h} >{data}</Link>
    )
}