import { ChevronRight } from "lucide-react";
import { format } from "date-fns";


export default function AppointmentCard({ appointment , setDisplay }) {
        const formattedDate = format(new Date(appointment.date), "MMMM do yyyy");

        if (!appointment) return null;
        return (
                <div onClick={() => setDisplay(true)} className=" flex justify-between py-2 rounded-md border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D]  to-[#755F83] transition-colors duration-300 cursor-pointer p-1 gap-2">

                        <div className="flex gap-2">
                                <div className=" rounded-full flex justify-center items-center">
                                        <img src={appointment?.cosmetologist?.profile?.image} alt="" className="h-10 w-10 rounded-full" />
                                </div>

                                <div className=" flex flex-col  text-start group">
                                        <h1 className="font-inter text-start text-xs text-[#6B6A6C] group-hover:text-white/70 transition-colors duration-300">{formattedDate}</h1>
                                        <h2 className="font-inter text-start text-[#1A151D] text-sm group-hover:text-white transition-colors duration-300">{appointment.concern || appointment.tone}</h2>
                                </div >

                        </div>
                        <div className="flex justify-center items-center  group hover:text-white">
                                <ChevronRight className="h-4 w-4 text-[#6B6A6C] group hover:text-white" />
                        </div>
                </div>
        )
}