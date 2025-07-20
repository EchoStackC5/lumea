import Findings from "./Findings"
import RecommendedActions from "./RecommendedActions"
import RecommendedProducts from "./RecommendedProducts"
import { X } from "lucide-react"

export default function SkinReport() {
    return(
        
        <section className="bg-white rounded-xl p-4  max-w-full border border-light-border lg:max-w-xs h-auto space-y-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-dm-sans font-semibold text-[#1A151D]">Skin Report</h1>
                <button className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><X /></button>
            </div>
            <Findings/>
            <RecommendedActions/>
            <RecommendedProducts/>
        </section>
    )
}