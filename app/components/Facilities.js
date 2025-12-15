import React from 'react'
import FacilitieCard from './FacilitieCard'

function Facilities() {
    return (
        <section className="py-10 flex flex-col items-center gap-8">

            {/* Heading */}
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Our Facilities
                </h1>
            </div>
<FacilitieCard />
            

        </section>
    )
}

export default Facilities
