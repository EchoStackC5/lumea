import { Link } from "react-router"
export default function HowItWorksSec2() {
    return (
        <section id="find-a-cosmotologist" className="flex flex-col gap-8">
            <div>
                <div className="max-w-xs flex flex-col  gap-2 sm:gap-2 md:gap-3 lg:gap-4">
                    <h1 className="text-2xl md:text-3xl font-dm-sans font-medium ">Find a <span className="font-system-curved">Cosmotologist </span></h1>
                    <p className="text-[16px] font-inter  ">Connect with trusted dermatologists for real, personalized solutions.</p>
                    <Link to="/sign-up" className="bg-primary-dark font-dm-sans text-lg text-white text-center  px-6 py-3 hover:bg-yellow-500 hover:text-darkest active:bg-yellow-500 active:text-darkest rounded-full font-medium   transition-all duration-200 ">Book Appointment</Link>

                </div>
                
            </div>


        </section>
    )
}
