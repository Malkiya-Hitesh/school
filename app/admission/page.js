// app/admissions/page.js
'use client'

import React from 'react'
import AdmissionsHero from './components/AdmissionsHero'
import AdmissionProcess from './components/AdmissionProcess'
import RequiredDocuments from './components/RequiredDocuments'
import AdmissionsCTA from './components/AdmissionsCTA'
import Faq from './components/Faq'
import Programs from './components/Programs'
import AdmissionForm from './components/AdmissionForm'


const AdmissionsPage = () => {
  return (
    <main className="min-[1024px]:mt-[6.7rem] mt-[6.2rem] max-[640px]:mt-[4.2rem]">
      <AdmissionsHero />
      <Programs />
      <AdmissionProcess />
      <RequiredDocuments />
      <AdmissionForm />
      <Faq />
      <AdmissionsCTA />
    </main>
  )
}

export default AdmissionsPage
