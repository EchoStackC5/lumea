import { useNavigate } from "react-router"
import { apiFetcher } from "@/api/client"
import useSWR from "swr"
import { ArrowUpRight } from "lucide-react"
import cheekbone from "../../assets/images/cheekbone.jpg"
import { ChevronRight } from "lucide-react"
import { BeatLoader } from "react-spinners"
import { format } from "date-fns"
import useUserByID from "@/hooks/UserById"

export default function AppointmentsDem() {
    const { data, isLoading, error } = useSWR("/appointments/cosmetologist", apiFetcher)
    const {user} = useUserByID();

    const navigate = useNavigate()
    
    return (
        <section className="bg-white rounded-xl p-3 border border-light-border max-w-xs w-full space-y-4 mb-4">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-inter text-[#1A151D]">Appointments</h1>
                <button 
                    onClick={() => navigate("/appointment")}
                    className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center hover:shadow-lg transition-shadow"
                >
                    <ArrowUpRight className="h-4 w-4" />
                </button>
            </div>
            
            {/* Cards */}
            <div className="flex flex-col gap-3">
                {data?.slice(0, 4).map((app, index) => {
                    const formattedDate = format(new Date(app.date), 'MMM do yyyy')
                    return (
                        <div 
                            key={app.id || index}
                            className="flex justify-between items-center py-3 px-3 rounded-md border border-light-border bg-backgrounds group hover:bg-gradient-to-r from-[#1A151D] to-[#755F83] transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="flex-shrink-0">
                                    <img 
                                        src={user?.profile.image} 
                                        alt="" 
                                        className="h-10 w-10 rounded-full object-cover" 
                                    />
                                </div>
                                
                                <div className="flex flex-col min-w-0 flex-1">
                                    <h1 className="font-inter text-xs text-[#6B6A6C] group-hover:text-white/70 transition-colors duration-300 truncate">
                                        {formattedDate}
                                    </h1>
                                    <h2 className="font-inter text-[#1A151D] text-sm group-hover:text-white transition-colors duration-300 truncate">
                                        {app?.concern || app?.tone}
                                    </h2>
                                </div>
                            </div>
                            
                            <div className="flex-shrink-0 ml-2">
                                <ChevronRight className="h-4 w-4 text-[#6B6A6C] group-hover:text-white transition-colors duration-300" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}