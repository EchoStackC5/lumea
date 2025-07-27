import Findings from "../Dermetologistcomponent/Findings"
import RecommendedActions from "../Dermetologistcomponent/RecommendedActions"
import ClientRecommendedProduct from "../../Components/Clientdashboardcomponent/ClientRecommendedProduct"
import { X } from "lucide-react"

export default function SkinReport({display, setDisplay}) {
    return(
        
        <section style={{display: display ? "block" : "none"}} className="bg-white rounded-xl p-3  max-w-full border border-light-border lg:max-w-xs h-auto space-y-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-dm-sans font-semibold text-[#1A151D]">Skin Report</h1>
                <button onClick={() => setDisplay(false)} className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center cursor-pointer"><X /></button>
            </div>
            <Findings/>
            <RecommendedActions/>
            <ClientRecommendedProduct/>
        </section>
    )
}