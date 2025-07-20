import { useNavigate } from "react-router"
import { apiFetcher } from "@/api/client"
import useSWR from "swr"
import { ArrowUpRight } from "lucide-react"
import cheekbone from "../../assets/images/cheekbone.jpg"
import { ChevronRight } from "lucide-react"
import { BeatLoader } from "react-spinners"
import { format } from "date-fns"


export default function AppointmentsDem() {
    const { data, isLoading, error } = useSWR("/appointments/cosmetologist", apiFetcher)

    //  if (isLoading)
    //             return(
    //                 <BeatLoader />
    //         )
            
        
            if (error) 
                return(
            <div>
                <p className="text-red-600 text-center">Something went wrong</p>
            </div>)

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
                {data?.slice(0, 4).map((app) => {
                    const formattedDate = format(new Date(app.date), 'MMM do yyyy')
                    return(
                    <div className=" flex h-[50px] w-[100%] rounded-md border border-white bg-[#F6EBFD] group hover:bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] transition-colors duration-300 cursor-pointer p-1 gap-2">
                    <div className="h-10 w-10 rounded-full flex justify-center items-center">
                        <img src={cheekbone} alt="" className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="flex gap-17">
                        <div className=" flex flex-col items-center ">
                            <h1 className="font-inter text-xs text-[#6B6A6C] group-hover:text-[#6B6A6C] transition-colors duration-300">{formattedDate}</h1>
                            <h2 className="font-inter text-[#1A151D] text-xs group-hover:text-white transition-colors duration-300">{app?.concern  || "N/A"}</h2>
                        </div >
                        <div className="flex justify-center items-center">
                            <ChevronRight className="h-4 w-4 text-[#6B6A6C]" />
                        </div>
                    </div>
                </div>
                )
                })}
            </div>
        </section>
    )
}