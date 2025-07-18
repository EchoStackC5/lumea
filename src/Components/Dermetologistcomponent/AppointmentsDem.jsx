import { useNavigate } from "react-router"
import { ArrowUpRight } from "lucide-react"
import cheekbone from "../../assets/images/cheekbone.jpg"
import face1 from "../../assets/images/face1.jpg"
import face2 from "../../assets/images/face2.jpg"
import face3 from "../../assets/images/face3.jpg"
import { ChevronRight } from "lucide-react"


export default function AppointmentsDem() {
    const navigate = useNavigate()


    return (
        <section className="bg-white rounded-xl p-3 shadow-md w-[296px] h-[303.2px] space-y-4 mb-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-inter text-[#1A151D]">Appointments</h1>
                <button onClick={() => navigate("/appointment")}
                className="md:h-[20px] md:w-[20px] h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83]  text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
            {/* Cards */}
            <div className="flex flex-col gap-3">
                <div className=" flex h-[50px] w-[100%] rounded-md border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] transition-colors duration-300 cursor-pointer p-1 gap-2">
                    <div className="h-10 w-10 rounded-full flex justify-center items-center">
                        <img src={cheekbone} alt="" className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="flex gap-17">
                        <div className=" flex flex-col items-center ">
                            <h1 className="font-inter text-xs text-[#6B6A6C] group-hover:text-[#6B6A6C] transition-colors duration-300">January 6th 2026</h1>
                            <h2 className="font-inter text-[#1A151D] text-sm group-hover:text-white transition-colors duration-300">Virtual Skin Review</h2>
                        </div >
                        <div className="flex justify-center items-center">
                            <ChevronRight className="h-4 w-4 text-[#6B6A6C]" />
                        </div>
                    </div>
                </div>
                <div className=" flex h-[50px] w-[100%] rounded-md border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] cursor-pointer p-1 gap-2">
                    <div className="h-10 w-10 rounded-full flex justify-center items-center">
                        <img src={face1} alt="" className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="flex gap-13">
                    <div className=" flex flex-col items-center">
                        <h1 className="font-inter text-xs text-[#6B6A6C] group-hover:text-[#6B6A6C] transition-colors duration-300">September 8th 2025</h1>
                        <h2 className="font-inter text-[#1A151D] text-sm group-hover:text-white transition-colors duration-300">Product Consultation</h2>
                    </div>
                    <div className="flex justify-center items-center">
                    <ChevronRight className="h-4 w-4 text-[#6B6A6C]"/>
                    </div>
                    </div>
                </div>
                <div className=" flex h-[50px] w-[100%] rounded-md border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] cursor-pointer p-1 gap-2">
                    <div className="h-10 w-10 rounded-full flex justify-center items-center">
                        <img src={face2} alt="" className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="flex gap-13">
                        <div className=" flex flex-col items-center">
                            <h1 className="font-inter text-xs text-[#6B6A6C] group-hover:text-[#6B6A6C] transition-colors duration-300">January 6th 2026</h1>
                            <h2 className="font-inter text-[#1A151D] text-sm group-hover:text-white transition-colors duration-300">Skin Scan Follow-Up</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <ChevronRight className="h-4 w-4 text-[#6B6A6C]" />
                        </div>
                    </div>
                </div>
                <div className=" flex h-[50px] w-[100%] rounded-md border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] cursor-pointer p-1 gap-2">
                    <div className="h-10 w-10 rounded-full flex justify-center items-center">
                        <img src={face3} alt="" className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="flex gap-17">
                        <div className=" flex flex-col items-center">
                            <h1 className="font-inter text-xs text-[#6B6A6C] group-hover:text-[#6B6A6C] transition-colors duration-300">January 6TH 2025</h1>
                            <h2 className="font-inter text-[#1A151D] text-sm group-hover:text-[#FFFFFF] transition-colors duration-300">Hyperpigmentation</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <ChevronRight className="h-4 w-4 text-[#6B6A6C]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}