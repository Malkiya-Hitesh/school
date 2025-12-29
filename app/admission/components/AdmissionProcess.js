// app/admissions/components/AdmissionProcess.jsx
import H1 from '@/app/components/ui/H1'
import React from 'react'

const steps = [
  { step: '01', title: 'Enquiry / Application', description: 'Submit basic details to initiate the admission process.' },
  { step: '02', title: 'Document Submission', description: 'Provide all required documents for verification.' },
  { step: '03', title: 'Interaction / Assessment', description: 'Friendly interaction or assessment session for your child.' },
  { step: '04', title: 'Confirmation & Fee Payment', description: 'Receive confirmation and complete the fee payment.' },
]

const AdmissionProcess = () => {
  return (
    <section className="  min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3  flex flex-col gap-8" style={{ background: 'linear-gradient(to right, #f0f4ff, #ffffff)' }}>
      <div>
        <H1 data="Admission Process" />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">

        {steps.map((item, index) => (
          <div key={index} className="flex-1 relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">

            {/* Step Circle */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white font-bold text-xl flex items-center justify-center shadow-lg">
              {item.step}
            </div>

            {/* Step Content */}
            <h3 className="mt-12 text-lg sm:text-[19px] md:text-[21px]  lg:text-[23px] xl:text-[25px]  font-semibold text-gray-800 text-center">{item.title}</h3>
            <p className="mt-4 text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px]  xl:text-[18px]  text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdmissionProcess
