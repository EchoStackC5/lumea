import { Link } from "react-router"
export default function HeroSection(){
    return(
        <section className="bg-[url(./assets/skincare8.jpg)]  bg-cover bg-center h-screen relative">
            <div className="absolute inset-0 bg-black opacity-43"></div>
            <div className=" flex flex-col justify-center items-center h-screen relative z-10 text-white">
                <div className="flex  items-center justify-center gap-2">
                    <p className=" text-2xl md:text-7xl sm:text-7xl lg:text-8xl  font-dm-sans" >Clean <span className="font-system-curved">Skin </span></p>
                    <hr className="w-20 h-1 bg-white" />
                    <p className=" text-2xl md:text-7xl sm:text-7xl lg:text-8xl  font-dm-sans" >Starts <span className="font-system-curved">Here </span></p>
                </div>
                <p className=" max-w-lg w-full text-center text-sm md:text-lg sm:text-lg lg:text-xl font-dm-sans mt-4">Discover your skin’s true needs with AI analysis and expert cosmetologist guidance.</p>
                <div className="flex flex-col md:flex-row mt-8 w-full max-w-md gap-4 px-3">
                    <Link to="/skin-analysis-form" className="bg-[#9D82B6] text-center max-w-3xl px-6 py-3 rounded-full font-medium  hover:bg-system-primary transition-all duration-200 ">Analyze My Skin</Link>
                    <Link to="/skin-analysis-form" className="bg-transparent text-center border border-white active:border-none active:bg-system-primary  hover:border-none max-w-3xl px-6 py-3 rounded-full font-medium  hover:bg-system-primary transition-all duration-200 ">Book Appointment</Link>
                </div>
            </div>
            

        </section>
    )
}