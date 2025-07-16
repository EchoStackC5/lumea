import useSWR from "swr"
import { apiFetcher } from "@/api/client";

export default function AppointmentRequest() {
    const { data, isLoading, error } = useSWR("/appointments/cosmetologist?status=pending", apiFetcher)
    console.log(data)

    return (
        <section className="h-[249px] w-auto bg-[#310E47] p-2 rounded-md mt-3">
            <h1 className="text-white py-1">Appointment Requests</h1>
            <div className="h-[90px] rounded-md w-auto bg-backgrounds border border-backgrounds mt-2 px-2">
                <p className="">Monday, July 8th 2025</p>
                <h1 className="text-[#6B6A6C] text-sm">8:30PM - 9:00PM</h1>
                <div className=" flex mt-2 gap-3">
                    <button className="hover:text-white text-sm h-7 w-18 rounded-full hover:bg-[#DF1316] border cursor-pointer">Reject</button>
                    <button className="hover:text-white text-sm h-7 w-18 rounded-full hover:bg-[#057A15] border cursor-pointer">Accept</button>
                </div>
            </div>
            <div className="h-[90px] rounded-md w-auto bg-backgrounds border border-backgrounds mt-2 px-2">
                <p className="">Monday, July 8th 2025</p>
                <h1 className="text-[#6B6A6C] text-sm">8:30PM - 9:00PM</h1>
                <div className=" flex mt-2 gap-3">
                    <button className="hover:text-white text-sm h-7 w-18 rounded-full hover:bg-[#DF1316] border cursor-pointer">Reject</button>
                    <button className="hover:text-white text-sm h-7 w-18 rounded-full hover:bg-[#057A15] border-2 cursor-pointer">Accept</button>
                </div>
            </div>
        </section>
    )
}