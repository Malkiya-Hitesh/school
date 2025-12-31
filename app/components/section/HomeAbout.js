
import AboutCard from './AboutCard'


function HomeAbout() {
    return (
        <section className=" flex flex-col items-center justify-center gap-8  min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3  ">


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
