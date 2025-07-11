import { ArrowUpRight } from "lucide-react"

export default function AppointmentsDem() {
    return (
        <section className="md:h-[272px] md:w-[30%] border rounded-2xl">
            <div className="flex justify-between md:p-3 p-2">
                <h1 className="text-xl font-bold">Appointments</h1>
                <button className="md:h-[20px] md:w-[20px] h-8 w-8 rounded-full bg-black text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
            <div className="px-4">
            <div className=" flex h-[65px] w-[90%] rounded-xl border bg-[#F6EBFD] px-6 py-4 gap-2">
                <div className="h-10 w-10 rounded-full bg-[#9D105B26] flex justify-center items-center">
                    {/* <Weight className="text-[#9D105B] h-8 w-10" /> */}
                </div>
                <div className=" flex flex-col text-sm items-center">
                    <h1>January 6TH 2026</h1>
                    <h2>Virtual Skin Review</h2>
                </div>
            </div> 
            <div className=" flex h-[65px] w-[90%] rounded-xl border bg-[#F6EBFD] px-6 py-4 gap-2">
                <div className="h-10 w-10 rounded-full bg-[#9D105B26] flex justify-center items-center">
                    {/* <Weight className="text-[#9D105B] h-8 w-10" /> */}
                </div>
                <div className=" flex flex-col text-sm items-center">
                    <h1>January 6TH 2026</h1>
                    <h2>Virtual Skin Review</h2>
                </div>
            </div>
            <div className=" flex h-[65px] w-[90%] rounded-xl border bg-[#F6EBFD] px-6 py-4 gap-2">
                <div className="h-10 w-10 rounded-full bg-[#9D105B26] flex justify-center items-center">
                    {/* <Weight className="text-[#9D105B] h-8 w-10" /> */}
                </div>
                <div className=" flex flex-col text-sm items-center">
                    <h1>January 6TH 2026</h1>
                    <h2>Virtual Skin Review</h2>
                </div>
            </div>
            <div className=" flex h-[65px] w-[90%] rounded-xl border bg-[#F6EBFD] px-6 py-4 gap-2">
                <div className="h-10 w-10 rounded-full bg-[#9D105B26] flex justify-center items-center">
                    {/* <Weight className="text-[#9D105B] h-8 w-10" /> */}
                </div>
                <div className=" flex flex-col text-sm items-center">
                    <h1>January 6TH 2026</h1>
                    <h2>Virtual Skin Review</h2>
                </div>
            </div>
            </div>
        </section>
    )
}