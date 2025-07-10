import { Download } from "lucide-react"


export default function RecommendedProducts() {
    return(
        <div>
            <h1>Recommended Products</h1>
            <button className="h-12 w-65 bg-[#1A151D] rounded-full text-white flex justify-center items-center cursor-pointer gap-1">
                <Download className="h-5 w-5"/>
                <h1 className="text-xl">Download Report</h1>
            </button>
        </div>
    )
}