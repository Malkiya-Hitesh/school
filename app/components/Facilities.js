import React from 'react'
import FacilitieCard from './FacilitieCard'
import H1 from './ui/H1'

function Facilities() {
    return (
        <section className="py-10 flex flex-col items-center mt-6  gap-8">

            {/* Heading */}
            <div>
                <H1 data={'Facilities'} />
            </div>
            <FacilitieCard />


        </section>
    )
}

export default Facilities
