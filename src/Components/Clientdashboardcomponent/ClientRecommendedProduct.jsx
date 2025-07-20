import lipgloss from "../../assets/images/lipgloss.png"
import Balm from "../../assets/images/Balm.png"
import lipstick from "../../assets/images/lipstick.png"
import { Download } from "lucide-react"
import { Ellipsis } from "lucide-react"


export default function ClientRecommendedProduct() {
    return (
        <div>
            <div className="bg-[#F6EBFD] rounded-md p-3 ">
                <div className="flex gap-7 mb-3">
                    <h1 className="font-md font-inter">Recommended Products</h1>
                    {/* <Ellipsis className="font-inter"/> */}
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-5 px-4 mt-4">
                    <img src={lipgloss} className=" flex items-center bg-[#EFD6FF]" alt="" />
                    <img src={Balm} alt="" className="rounded-full flex items-center bg-[#EFD6FF]" />
                    <img src={lipstick} className="flex items-center bg-[#EFD6FF]" alt="" />
                </div>
            </div>
            <button className=" w-full py-3 hover:bg-yellow-500 hover:text-darkest bg-[#1A151D] rounded-full text-white flex justify-center items-center cursor-pointer gap-1 mt-5">
                <Download className="h-5 w-5" />
                 Download Report
            </button>
        </div>
    )
}