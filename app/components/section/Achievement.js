
import H1 from '../ui/H1'
import AchievementCard from './AchievementCard'

function Achievement() {
    return (
        <section className=" flex flex-col items-center justify-center gap-8">

            {/* Heading */}
            <div>
                <H1 data={'Achievement'} />
            </div>
             <div className="w-[90vw] h-auto">
            <AchievementCard />
          </div>
            


        </section>
    )
}

export default Achievement
