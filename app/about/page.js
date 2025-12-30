'use client'
import React from 'react'
import AboutHero from './components/AboutHero'
import VisionMission from './components/VisionMission'
// import CoreValues from './components/CoreValues'
import Activities from './components/Activities'
import PrincipalMessage from './components/PrincipalMessage'
import AchievementsAndFacilities  from './components/AchievementsAndFacilities'
import CallToAction from './components/CallToAction'

export default function Page() {
  return (
    <main id="about-main">
      <AboutHero />
      <VisionMission />
      {/* <CoreValues /> */}
     
      <Activities />
       <PrincipalMessage />
       <AchievementsAndFacilities />
       <CallToAction />
    </main>
  )
}
