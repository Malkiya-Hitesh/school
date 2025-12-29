// app/admissions/components/RequiredDocuments.jsx
import H1 from '@/app/components/ui/H1'
import React from 'react'

const documents = [
  'Birth Certificate',
  'Previous School Transfer Certificate (TC)',
  'Report Card / Marksheet',
  'Aadhaar Card / ID Proof',
  'Passport-size Photographs',
]

const RequiredDocuments = () => {
  return (
    <section className=" bg-gray-50 min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3flex flex-col gap-8">
        <H1 data="Required Documents" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center text-center"
          >
            {/* Optional Icon */}
            <div className="w-10 h-10 mb-3 flex items-center justify-center bg-blue-600 text-white rounded-full shadow text-base font-semibold">
              📄
            </div>
            <p className="text-lg sm:text-[19px] md:text-[21px]  lg:text-[23px] xl:text-[25px] font-semibold text-blue-600">{doc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RequiredDocuments
