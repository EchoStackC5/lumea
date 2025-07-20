import { Ellipsis } from "lucide-react"

export default function RecommendedActions() {
    return (
        <section className="w-auto bg-[#F6EBFD] rounded-lg p-2 mt-3">
            <div>
                <div className="flex gap-13">
                    <h1 className="font-md font-inter text-[#1A151D]">Recommended Actions</h1>
                    {/* <Ellipsis className="text=[#1A151D]"/> */}
                </div>
                <div className="text-xs ">
                    <h1 className="py-1.5 text-[#6B6A6C] font-bold font-inter">Hydration-focused routine</h1>
                    <p className="text-[#6B6A6C] font-inter">Focus on gentle, water-based products to restore misture balance and support skin barrier repair</p>
                </div>
                <div className="text-xs py-2">
                    <h1 className="py-1.5 text-[#6B6A6C] font-bold font-inter">Reduce actives to 2x/week</h1>
                    <p className="text-[#6B6A6C] font-inter">Limit the use of strong exfoliants or acids to twice a week to prevent over-irritation and allow skin to heal</p>
                </div>
                <div className="text-xs py-2">
                    <h1 className="py-1.5 text-[#6B6A6C] font-bold font-inter">Book facial in 2 weeks</h1>
                    <p className="text-[#6B6A6C] font-inter">Schedule a follow-up facial to deeply cleanse pulse, calm inflamation and assess progress.</p>
                </div>
            </div>
        </section>
    )
}