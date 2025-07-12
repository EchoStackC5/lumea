import iceImage from "../assets/ice.jpeg";
import clearSkinImage from "../assets/skincare6.jpeg";
import { Link } from "react-router";
export default function HowItWorks() {
    return (

       
            <section id="how-it-works" className="flex flex-col gap-8 w-full">
                <div>
                    <div className="max-w-md flex flex-col justify-self-end gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                        <h1 className="text-2xl md:text-3xl font-dm-sans font-medium text-left">Your <span className="font-system-curved">Skin </span>Your <span className="font-system-curved">Session</span></h1>
                        <p className="text-[16px] font-inter text-left ">Our licensed cosmetologists are here for every skin type, every shade, and every face.</p>
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <img src={iceImage} alt="Ice Image" className="w-full max-h-120 object-cover grayscale" />
                    <div className="bg-[#124946] text-white max-h-120 space-y-6 flex flex-col justify-between items-center p-6">
                        <h1 className="uppercase lg sm:xl md:xl lg:text-3xl text-center font-dm-sans font-semibold">Get Expert Skincare Advice</h1>
                        <p className="text-center font-inter font-normal text-sm sm:text-sm lg:text-[16px] md:text-[16px]">Book a session with a certified cosmetologist who understands your unique skin</p>
                        <Link to= "/clientsignUp" className="bg-white text-darkest hover:bg-yellow-500 text-center max-w-3xl px-6 py-3 rounded-full font-medium  hover:bg-system-primary transition-all duration-200 ">Book Appointment</Link>
                    </div>
                    <img src={clearSkinImage} alt="Ice Image" className="w-full max-h-120  object-cover  " />
                </div>

            </section>
        
    )
}
