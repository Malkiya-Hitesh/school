import React from 'react'
import FacilitieCard from './FacilitieCard'
import H1 from './ui/H1'
import AchievementCard from './AchievementCard'

function Achievement() {
    return (
        <section className="py-10 flex flex-col items-center mt-6  gap-8">

            {/* Heading */}
            <div>
                <H1 data={'Achievement'} />
            </div>
            <AchievementCard />


        </section>
    )
}

export default Achievement
