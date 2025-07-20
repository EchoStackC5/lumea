import useSWR from "swr"
import { apiClient, apiFetcher } from "@/api/client";

export default function AppointmentRequest() {
    const { data, isLoading, error } = useSWR("/appointments/cosmetologist?status=pending", apiFetcher)

    // if (isLoading) return <p className="text-xl flex justify-center items-center text-white">Loading...</p>
    // if (error) return <p>Failed to load</p>
    

    function reject(id) {
        apiClient.patch(`https://lumea-api.onrender.com/api/appointments/${id}`, {status: 'rejected'}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
                'Content-Type': 'application/json'
            },
        })
        .then (res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    function accept(id) {
        console.log('token:', localStorage.getItem("ACCESS_TOKEN"))
        apiClient.patch(`https://lumea-api.onrender.com/api/appointments/${id}`, {status: 'accepted'}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
                'Content-Type': 'application/json'
            },
            
        })
        .then (res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <section className="h-[269px] overflow-scroll w-auto bg-[#310E47] p-2 mt-3">
            <h1 className="text-white py-1">Appointment Requests</h1>
            {
                data?.map((app) => (
                    <div key={app.id} className="h-[90px] rounded-md w-auto bg-backgrounds border border-backgrounds mt-2 px-2">
                        <p className="">{app.date}</p>
                        <h1 className="text-[#6B6A6C] text-sm">{app.time}</h1>
                        <div className=" flex mt-2 gap-3">
                            <button onClick={() => reject(app.id)}
                            className="text-white text-sm h-7 w-18 rounded-full bg-[#DF1316] border cursor-pointer">Reject</button>
                            <button onClick={() => accept(app.id)}
                            className="text-white text-sm h-7 w-18 rounded-full bg-[#057A15] border cursor-pointer">Accept</button>
                        </div>
                    </div>
                ))
            }

        </section>
    )
}