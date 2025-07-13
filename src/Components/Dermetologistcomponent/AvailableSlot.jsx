import { SquarePen } from "lucide-react"
import { Trash2 } from "lucide-react"


export default function AvailableSlot() {
    return (
        <section className="h-[249px] w-auto bg-[#310E47] p-2 rounded-md mt-3">
            <div className="gap-7 px-2 flex">
                <h1 className="text-white py-1">Availability Slot</h1>
                <button className="h-8 w-25 rounded-full bg-[#CAA9E9] text-sm text-white cursor-pointer">
                    + add slot</button>
            </div>
            <div className="h-[90px] rounded-md w-auto bg-backgrounds border border-backgrounds mt-3 px-2">
                <p className="">Monday, July 8th 2025</p>
                <h1 className="text-[#6B6A6C] text-sm">8:30PM - 9:00PM</h1>
                <div className=" flex mt-2 gap-3">
                    <div className="text-white text-sm h-7 w-18 rounded-full bg-[#1A151D] flex justify-center items-center cursor-pointer">
                        <SquarePen className="h-3 w-3" />
                        <button>Edit</button>
                    </div>
                    <div className="text-white text-sm h-7 w-18 rounded-full bg-[#DF1316] flex justify-center items-center cursor-pointer">
                        <Trash2 className="h-3 w-3" />
                        <button >Delete</button>
                    </div>
                </div>
            </div>
            <div className="h-[90px] rounded-md w-auto bg-backgrounds border border-backgrounds mt-2 px-2">
                <p className="">Monday, July 8th 2025</p>
                <h1 className="text-[#6B6A6C] text-sm">8:30PM - 9:00PM</h1>
                <div className=" flex mt-2 gap-3">
                    <div className="text-white text-sm h-7 w-18 rounded-full bg-[#1A151D] flex justify-center items-center cursor-pointer">
                        <SquarePen className="h-3 w-3" />
                        <button>Edit</button>
                    </div>
                    <div className="text-white text-sm h-7 w-18 rounded-full bg-[#DF1316] flex justify-center items-center cursor-pointer">
                        <Trash2 className="h-3 w-3" />
                        <button >Delete</button>
                    </div>
                </div>
            </div>
        </section>
    )
}