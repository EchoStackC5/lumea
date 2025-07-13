import { Link } from "react-router";
import massageImage from "../assets/massage.jpeg";
export default function HowItWorksSec2() {
    return (
        <section id="find-a-cosmotologist" className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="max-w-xs flex flex-col  gap-2 sm:gap-2 md:gap-3 lg:gap-4">
                    <h1 className="text-2xl md:text-3xl font-dm-sans font-medium ">Find a <span className="font-system-curved">Cosmotologist </span></h1>
                    <p className="text-[16px] font-inter  ">Connect with trusted dermatologists for real, personalized solutions.</p>
                    <Link to="/appointment-form" className="bg-primary-dark font-dm-sans text-lg text-white text-center  px-6 py-3 hover:bg-yellow-500 hover:text-darkest active:bg-yellow-500 active:text-darkest rounded-full font-medium   transition-all duration-200 ">Book Appointment</Link>
                </div>
                <img src={massageImage} alt="Massage Image" className="w-full grayscale  object-cover" />
            </div>

        </section>
    )
}
