import { ArrowUpRight } from "lucide-react"
import AppointmentCard from "./Appointmentcard"
import { Link } from "react-router"

import { apiFetcher } from "@/api/client";
import Loaders from "../Loaders"
import useSWR from "swr"


export default function AppointmentsDem({setDisplay}) {

    const {data, isLoading, error} = useSWR('/appointments' ,apiFetcher);
        if (isLoading)
            return
        <Loaders/>
    
        if (error) 
            return(
        <div>
            <p className="text-red-600 text-center">Something went wrong</p>
        </div>
        )
        // const appointment = data?.[0];

    



    return (
        <section className="bg-white rounded-xl p-3 border border-light-border w-full  md:w-[300px] space-y-4 mb-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-dm-sans text-[#1A151D] font-semibold">Appointments</h1>
                <Link to="/appointmentpage" className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83]  text-white flex justify-center items-center"><ArrowUpRight /></Link>
            </div>
            {/* Cards */}
            <div className="flex flex-col gap-3">
                {data?.length > 0 ? (
                    data.slice(0, 4).map((appointment) => (
                        <AppointmentCard setDisplay={setDisplay} key={appointment.id} appointment={appointment} />
                    ))
                ) : (
                    <p className="text-sm text-gray-500">No appointments found.</p>
                )}
            </div>
        </section>
    )
}