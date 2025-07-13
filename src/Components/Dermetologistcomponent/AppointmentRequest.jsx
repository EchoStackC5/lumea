

export default function AppointmentRequest() {
    return (
        <section className="h-[249px] w-auto bg-[#310E47] p-2 rounded-md mt-3">
            <h1 className="text-white py-1">Appointment Requests</h1>
            <div className="h-[90px] rounded-md w-auto bg-backgrounds border border-backgrounds mt-2 px-2">
                <p className="">Monday, July 8th 2025</p>
                <h1 className="text-[#6B6A6C] text-sm">8:30PM - 9:00PM</h1>
                <div className=" flex mt-2 gap-3">
                    <button className="text-white text-sm h-7 w-18 rounded-full bg-[#DF1316]">Reject</button>
                    <button className="text-white text-sm h-7 w-18 rounded-full bg-[#057A15]">Accept</button>
                </div>
            </div>
            <div className="h-[90px] rounded-md w-auto bg-backgrounds border border-backgrounds mt-2 px-2">
                <p className="">Monday, July 8th 2025</p>
                <h1 className="text-[#6B6A6C] text-sm">8:30PM - 9:00PM</h1>
                <div className=" flex mt-2 gap-3">
                    <button className="text-white text-sm h-7 w-18 rounded-full bg-[#DF1316]">Reject</button>
                    <button className="text-white text-sm h-7 w-18 rounded-full bg-[#057A15]">Accept</button>
                </div>
            </div>
        </section>
    )
}