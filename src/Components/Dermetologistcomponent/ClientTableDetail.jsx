import { X } from "lucide-react"
import cheekbone from "../../assets/images/cheekbone.jpg"
import { Download } from "lucide-react"

export default function ClientTableDetail() {
    return (
        <section className="bg-white rounded-xl p-3 shadow-md w-[296px] h-auto space-y-4 mb-4">
            <div className="flex justify-between">
                <h1 className="md:text-lg text-md">Client Details</h1>
                <button className="md:h-[20px] md:w-[20px] h-4 w-4 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><X /></button>
            </div>
            <div className="flex flex-col justify-center mt-3 items-center">
                <img src={cheekbone} alt="" className="rounded-full md:h-[185px] md:w-[185px]" />
                <p>Ethan Alex Monroe</p>
            </div>
            <div className="flex md:px-2 md:gap-22">
                <h1>Female</h1>
                <p>Oily Skin Type</p>
            </div>
            <p className="text-[#6B6A6C] px-2 ">I am currently dealing with acne and hyperpigmentation</p>
            <div className="flex gap-3">
                <button
                    className="md:h-10 md:w-35 text-sm border rounded-full hover:bg-secondary-text hover:text-white cursor-pointer">+ Add new note
                </button>
                <div className="md:h-10 md:w-35 text-xs border rounded-full hover:bg-secondary-text hover:text-white cursor-pointer flex justify-center items-center">
                    <Download  className="h-3 w-3"/>
                    <button className="">View Ai Skin Report</button>
                </div>
            </div>
        </section>
    )
}