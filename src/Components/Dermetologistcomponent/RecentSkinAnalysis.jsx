import { ArrowUpRight } from "lucide-react"

export default function RecentSkinAnalysis() {
    return(
        <section className="md:h-[auto] md:w-[105%] border border-white rounded-xl bg-white">
            <div className="flex justify-between md:p-3 p-2">
                <h1 className="text-xl font-inter text-[#1A151D]">Recent skin Analysis</h1>
                <button className="md:h-[30px] md:w-[30px] h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
        </section>
    )
}