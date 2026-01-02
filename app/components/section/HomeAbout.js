
import AboutCard from './AboutCard'


function HomeAbout() {
    return (
        <section className=" flex flex-col items-center justify-center gap-8  lg:py-18 xl:py-20 md:py-13 sm:py-8  py-5 xl:px-13 lg:px-10 md:px-7 sm:px-5 px-3 bg-[var(--bg-light)] ">


            <div className="w-[90vw] h-auto">
                <AboutCard />
            </div>
            <div>
                <button className="group mt-5 inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-all duration-200 hover:border-blue-300 hover:bg-blue-100">
                    Read More
                    <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                </button>


            </div>



        </section>
    )
}

export default HomeAbout
