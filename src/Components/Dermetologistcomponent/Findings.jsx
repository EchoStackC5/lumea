import face from "../../assets/images/face.jpg"


export default function Findings() {
    return (
        <section className="h-[150px] w-auto bg-[#F6EBFD] rounded-lg p-2">
            <div>
                <h1 className="font-inter">Findings</h1>
                <p className="text-xs text-[#6B6A6C] font-inter">Visible signs of congestion on T-zone, mid inflamation on cheeks. Recommending oil-free hydrating cleanser and daily SPF</p>
            </div>
            <div className="flex gap-15 py-2 items-center ">
            <div className="flex text-xs gap-2 items-center">
                <img src={face} alt="" className="h-10 w-10 rounded-full" />
                <h1 className="font-inter">Alex Moyo</h1>
            </div>
            <div className="text-xs">
                <h1 className="text-[#6B6A6C] font-inter">July 5th 2021</h1>
            </div>
            </div>
        </section>
    )
}