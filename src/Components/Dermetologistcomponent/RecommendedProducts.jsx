import lipgloss from "../../assets/images/lipgloss.png"
import Balm from "../../assets/images/Balm.png"
import lipstick from "../../assets/images/lipstick.png"
import { Ellipsis } from "lucide-react"


export default function RecommendedProducts() {
    return (
        <div>
            <div className="bg-[#F6EBFD] rounded-xl p-3 shadow">
                <div className="flex gap-10 mb-3">
                    <h1 className="font-md">Recommended Products</h1>
                    <Ellipsis />
                </div>
                <div className="grid grid-cols-3 gap-2 ">
                    <img src={lipgloss} className="rounded-lg bg-[#EFD6FF]" alt="" />
                    <img src={Balm} alt="" className="rounded-full bg-[#EFD6FF]" />
                    <img src={lipstick} className="rounded-lg bg-[#EFD6FF]" alt="" />
                </div>
            </div>
            <button className="h-12 w-65 bg-[#1A151D] rounded-full text-white flex justify-center items-center cursor-pointer gap-1 mt-5">
                {/* <Download className="h-5 w-5" /> */}
                <h1 className="text-xl"> +Add new note</h1>
            </button>
        </div>
    )
}