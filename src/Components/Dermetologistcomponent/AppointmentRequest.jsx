import useSWR, { mutate } from "swr"
import { apiClient, apiFetcher } from "@/api/client";
import { useNavigate } from "react-router";
import { useState } from "react";
import format from "date-fns/format";
import { BeatLoader } from "react-spinners";


export default function AppointmentRequest({setReload}) {
    const { data, isLoading, error } = useSWR("/appointments/cosmetologist?status=pending", apiFetcher)
    const navigate = useNavigate();
    const [status, setStatus] = useState({ id: null, type: "" });


    function reject(id) {
        setStatus({ id, type: "rejected" });
        apiClient.patch(`https://lumea-api.onrender.com/api/appointments/${id}`, { status: 'rejected' }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                mutate("/appointments/cosmetologist?status=pending");
                setReload(true)
                console.log('res:', res)
            })
            .catch(err => {
                console.log('err:', err)
            })
            .finally(() => { setStatus("") })
    }
    function accept(id) {
        setStatus({ id, type: "accepted" });
        console.log('token:', localStorage.getItem("ACCESS_TOKEN"))
        apiClient.patch(`https://lumea-api.onrender.com/api/appointments/${id}`, { status: 'accepted' }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
                'Content-Type': 'application/json'
            },

        })
            .then(res => {
                mutate("/appointments/cosmetologist?status=pending");
                setReload(true)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => { setStatus("") })
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[269px]">
                <BeatLoader color="#ffffff" size={20} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-white text-center py-6">
                Failed to load appointments. Please try again.
            </div>
        );
    }


    return (
        <section className="h-[269px] overflow-scroll w-auto bg-[#310E47] p-2 mt-3 rounded-md">
            <h1 className="text-white py-1">Appointment Requests</h1>
            {
                data?.map((app) => (
                    <div key={app.id} className="h-[90px] rounded-md w-auto bg-backgrounds border border-backgrounds mt-2 px-2">
                        <p className="">{format(new Date(app.date), "do MMM yyyy")}</p>
                        <h1 className="text-[#6B6A6C] text-sm">{app.time}</h1>
                        <div className=" flex mt-2 gap-3">
                            <button onClick={() => reject(app.id)}
                                className={`text-white text-sm h-7 w-18 rounded-full bg-[#DF1316] border cursor-pointer px-3 font-inter text-center font-normal  ${status.id === app.id && status.type === "rejected" ? "animate-pulse opacity-70" : ""
                                    }`}
                            >
                                {status.id === app.id && status.type === "rejected" ? "Reject..." : "Reject"}</button>
                            <button onClick={() => accept(app.id)}
                                className={`text-white text-sm h-7 w-18 rounded-full bg-[#057A15] border cursor-pointer px-3 font-inter text-center font-normal ${status.id === app.id && status.type === "accepted" ? "animate-pulse opacity-70" : ""
                                    }`}
                            >
                                {status.id === app.id && status.type === "accepted" ? "Accept..." : "Accept"}</button>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}