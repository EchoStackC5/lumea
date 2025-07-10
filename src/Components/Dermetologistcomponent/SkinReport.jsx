import Findings from "./Findings"
import RecommendedActions from "./RecommendedActions"
import RecommendedProducts from "./RecommendedProducts"
import { X } from "lucide-react"

export default function SkinReport() {
    return(
        
        <section className="md:h-[auto] w-[25%] border border-white rounded-xl mb-5 bg-white px-5 py-2">
            <div className="flex justify-between md:p-3">
                <h1 className="text-xl font-inter text-[#1A151D]">Skin Report</h1>
                <button className="md:h-[30px] md:w-[30px] h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><X /></button>
            </div>
            <Findings/>
            <RecommendedActions/>
            <RecommendedProducts/>
        </section>
    )
}