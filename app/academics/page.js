import React from 'react'
import AcademicsHero from './components/AcademicsHero'
import AcademicPhilosophy from './components/AcademicPhilosophy'
import CurriculumOverview from './components/CurriculumOverview'
import AcademicLevels from './components/AcademicLevels'
import AcademicStructure from './components/AcademicStructure'
import AcademicsCTA from './components/AcademicsCTA'

function page() {
  return (
<>
    
   <AcademicsHero />
   <AcademicPhilosophy />
   <AcademicStructure />
   <AcademicsCTA />
   {/* <CurriculumOverview /> */}
   {/* <AcademicLevels /> */}
   </>
  )
}

export default page
