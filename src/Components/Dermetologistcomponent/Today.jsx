import { Video } from "lucide-react"
import { format, addMinutes } from "date-fns"



export default function Today() {

    // const startTime = new Date(app.time); 
    // const duration = 30; // appointment duration in minutes
    // const endTime = addMinutes(startTime, duration);

    return (
        <section className="w-auto bg-backgrounds border border-light-border p-2 max-w-md rounded-md mt-3 space-y-3">

            <div className="flex justify-between font-semibold text-sm font-dm-sans">
                <h1 className="">Today</h1>
                <h2>{format(new Date(), "do MMM yyyy")}</h2>
            </div>
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center justify-start gap-2 ">
                        <div className="bg-[#12B76A] h-2 w-2 rounded-full">
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm text-[#6B6A6C]">8:30PM - 9:00PM</h1>
                            <p className="text-sm">Monthly skin checkup</p>
                        </div>

                    </div>
                    <div className=" bg-[#1056D326] h-8 w-8 rounded-full p-1.5 ">
                        <Video className="h-5 w-5 text-[#1056D3]" />
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between">
                    <div className="flex items-center justify-start gap-2 ">
                        <div className="bg-[#EF5DA8] h-2 w-2 rounded-full">
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm text-[#6B6A6C]">8:30PM - 9:00PM</h1>
                            <p className="text-sm">Monthly skin checkup</p>
                        </div>

                    </div>
                    <div className=" bg-[#1056D326] h-8 w-8 rounded-full p-1.5 ">
                        <Video className="h-5 w-5 text-[#1056D3]" />
                    </div>
                </div>
            </div>
        </section>
    )
}