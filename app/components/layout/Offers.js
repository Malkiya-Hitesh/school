import React from 'react'
import OffersCard from './OffersCard'

function Offers() {
    return (
        <section className="py-10 flex flex-col items-center gap-8">

            {/* Heading */}
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Special Offers
                </h1>
            </div>

            <OffersCard />

        </section>
    )
}

export default Offers
