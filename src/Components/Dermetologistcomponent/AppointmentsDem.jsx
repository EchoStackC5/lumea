import { ArrowUpRight } from "lucide-react"
import cheekbone from "../../assets/images/cheekbone.jpg"
import face1 from "../../assets/images/face1.jpg"
import face2 from "../../assets/images/face2.jpg"
import face3 from "../../assets/images/face3.jpg"
import { ChevronRight } from "lucide-react"

export default function AppointmentsDem() {
    return (
        <section className="md:h-[auto] md:w-[105%] border border-white rounded-xl bg-white mb-3">
            <div className="flex justify-between md:p-3 p-2">
                <h1 className="text-xl font-inter text-[#1A151D]">Appointments</h1>
                <button className="md:h-[30px] md:w-[30px] h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83]  text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
            {/* Cards */}
            <div className="p-2 flex flex-col gap-3">
            <div className=" flex h-[75px] w-[100%] rounded-xl border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] transition-colors duration-300 cursor-pointer px-4 py-4 gap-2">
                <div className="h-10 w-10 rounded-full flex justify-center items-center">
                    <img src={cheekbone} alt="" className="h-10 w-10 rounded-full" />
                </div>
                <div className=" flex flex-col items-center ">
                    <h1 className="font-inter text-sm text-[#1A151D] group-hover:text-white transition-colors duration-300">January 6th 2026</h1>
                    <h2 className="font-inter text-[#1A151D] group-hover:text-white transition-colors duration-300">Virtual Skin Review</h2>
                </div>
            </div> 
            <div className=" flex h-[75px] w-[100%] rounded-xl border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] cursor-pointer px-4 py-4 gap-2">
                <div className="h-10 w-10 rounded-full flex justify-center items-center">
                    <img src={face1} alt="" className="h-10 w-10 rounded-full" />
                </div>
                <div className=" flex flex-col items-center">
                    <h1 className="font-inter text-sm text-[#1A151D] group-hover:text-white transition-colors duration-300">September 8th 2025</h1>
                    <h2 className="font-inter text-[#1A151D] group-hover:text-white transition-colors duration-300">Product Consultation</h2>
                </div>
            </div>
            <div className=" flex h-[75px] w-[100%] rounded-xl border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] cursor-pointer px-4 py-4 gap-2">
                <div className="h-10 w-10 rounded-full flex justify-center items-center">
                    <img src={face2} alt="" className="h-10 w-10 rounded-full" />
                </div>
                <div className=" flex flex-col items-center">
                    <h1 className="font-inter text-sm text-[#1A151D] group-hover:text-white transition-colors duration-300">January 6th 2026</h1>
                    <h2 className="font-inter text-[#1A151D] group-hover:text-white transition-colors duration-300">Skin Scan Follow-Up</h2>
                </div>
            </div>
            <div className=" flex h-[75px] w-[100%] rounded-xl border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] cursor-pointer px-4 py-4 gap-2">
                <div className="h-10 w-10 rounded-full flex justify-center items-center">
                    <img src={face3} alt="" className="h-10 w-10 rounded-full" />
                </div>
                <div className=" flex flex-col items-center">
                    <h1 className="font-inter text-sm text-[#1A151D] group-hover:text-white transition-colors duration-300">January 6TH 2025</h1>
                    <h2 className="font-inter text-[#1A151D] group-hover:text-white transition-colors duration-300">Hyperpigmentation</h2>
                </div>
            </div>
            </div>
        </section>
    )
}