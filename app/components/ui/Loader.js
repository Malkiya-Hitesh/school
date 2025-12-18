'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Loading from '@/app/loading'

export default function SchoolLoader() {
  const loaderRef = useRef(null)
  const progressBarRef = useRef(null)
  const contentRef = useRef(null)

  // waiting | progress | video | done
  const [phase, setPhase] = useState('waiting')

  /* ----------------------------------------
     1️⃣ WAIT FOR FULL WEBSITE LOAD
  ---------------------------------------- */
  useEffect(() => {
    const handleLoad = () => {
      setPhase('progress')
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  /* ----------------------------------------
     2️⃣ PROGRESS BAR
  ---------------------------------------- */
  useEffect(() => {
    if (phase !== 'progress') return

    gsap.fromTo(
      progressBarRef.current,
      { width: '0%' },
      {
        width: '100%',
        duration: 2.5,
        ease: 'power1.inOut',
        onComplete: () => setPhase('video'),
      }
    )
  }, [phase])

  /* ----------------------------------------
     3️⃣ VIDEO / TEXT ANIMATION
  ---------------------------------------- */
  useEffect(() => {
    if (phase !== 'video') return

    const tl = gsap.timeline()

    tl.from('.line-1', { y: 60, opacity: 0, duration: 1 })
      .from('.line-2', { y: 80, opacity: 0, duration: 1.3 }, '-=0.6')
      .from('.line-3', { opacity: 0, duration: 1 }, '-=0.8')
      .to(contentRef.current, { scale: 1.15, duration: 1.6 })
      .to(loaderRef.current, {
        y: '-100%',
        duration: 1.6,
        ease: 'power4.inOut',
        onComplete: () => {
          setPhase('done')
          window.dispatchEvent(new Event('loaderFinished'))
        },
      })

    return () => tl.kill()
  }, [phase])

  /* ----------------------------------------
     4️⃣ STATES
  ---------------------------------------- */

  // ⏳ Simple spinner till full load
  if (phase === 'waiting') {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <Loading />
      </div>
    )
  }

  if (phase === 'done') return null

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08192b] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#08192b] via-[#0f2c4d] to-[#08192b]" />

      {phase === 'progress' && (
        <div className="relative w-[65%] max-w-lg text-center">
          <p className="mb-6 text-white tracking-widest text-sm opacity-80">
            Preparing Your Learning Experience
          </p>
          <div className="h-[3px] w-full bg-white/20 overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-white"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      )}

      {phase === 'video' && (
        <div ref={contentRef} className="relative text-center text-white">
          <h1 className="line-1 text-sm tracking-[0.35em] opacity-90">
            WELCOME TO
          </h1>
          <h1 className="line-2 mt-4 text-6xl font-bold tracking-wide">
            GNANA GANGOTHRI VIDYALAYA SCHOOL
          </h1>
          <p className="line-3 mt-6 text-sm tracking-widest opacity-70">
            Knowledge • Discipline • Success
          </p>
        </div>
      )}
    </div>
  )
}
