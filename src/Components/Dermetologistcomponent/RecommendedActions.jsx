import { Ellipsis } from "lucide-react"

export default function RecommendedActions() {
    return (
        <section className="w-[270px] bg-[#F6EBFD] rounded-lg p-2 mt-3">
            <div>
                <div className="flex gap-15">
                    <h1 className="font-md">Recommended Actions</h1>
                    <Ellipsis />
                </div>
                <div className="text-xs ">
                    <h1 className="py-1.5 text-[#6B6A6C] font-bold">Hydration-focused routine</h1>
                    <p className="text-[#6B6A6C]">Focus on gentle, water-based products to restore misture balance and support skin barrier repair</p>
                </div>
                <div className="text-xs py-2">
                    <h1 className="py-1.5 text-[#6B6A6C] font-bold">Reduce actives to 2x/week</h1>
                    <p className="text-[#6B6A6C]">Limit the use of strong exfoliants or acids to twice a week to prevent over-irritation and allow skin to heal</p>
                </div>
                <div className="text-xs py-2">
                    <h1 className="py-1.5 text-[#6B6A6C] font-bold">Book facial in 2 weeks</h1>
                    <p className="text-[#6B6A6C]">Schedule a follow-up facial to deeply cleanse pulse, calm inflamation and assess progress.</p>
                </div>
            </div>
        </section>
    )
}