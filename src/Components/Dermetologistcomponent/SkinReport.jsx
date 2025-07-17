import Findings from "./Findings"
import RecommendedActions from "./RecommendedActions"
import RecommendedProducts from "./RecommendedProducts"
import { X } from "lucide-react"

export default function SkinReport() {
    return(
        
        <section className="bg-white rounded-xl p-4 shadow-md w-[20%] h-auto space-y-4">
            <div className="flex justify-between">
                <h1 className="text-xl font-inter text-[#1A151D]">Skin Report</h1>
                <button className="md:h-[20px] md:w-[20px] h-4 w-4 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><X /></button>
            </div>
            <Findings/>
            <RecommendedActions/>
            <RecommendedProducts/>
        </section>
    )
}