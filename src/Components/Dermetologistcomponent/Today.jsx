import tablevideo from "../../assets/images/tablevideo.png"


export default function Today() {
    return(
        <section className="h-[130px] w-auto bg-[#EAD7FB] p-2 rounded-md mt-3">
            <div className="flex gap-27">
                <h1 className="font-bold">Today</h1>
                <h2>5th July 2025</h2>
            </div>
            <div className="flex items-center py-1">
                <div className="bg-[#12B76A] h-2 w-2 rounded-full">
                </div>
                <div className="pr-12 pl-1">
                    <h1 className="text-sm text-[#6B6A6C]">8:30PM - 9:00PM</h1>
                <p>Monthly skin checkup</p>
                </div>
                <div className=" bg-[#1056D326] h-8 w-8 rounded-full p-1.5 ">
                    <img src={tablevideo} alt="" className="h-5 w-5"/>
                </div>
            </div>
            <div className="flex items-center">
                <div className="bg-[#EF5DA8] h-2 w-2 rounded-full">
                </div>
                <div className="pr-12 pl-1">
                    <h1 className="text-sm text-[#6B6A6C]">8:30PM - 9:00PM</h1>
                <p>Monthly skin checkup</p>
                </div>
                <div className=" bg-[#1056D326] h-8 w-8 rounded-full p-1.5 ">
                    <img src={tablevideo} alt="" className="h-5 w-5"/>
                </div>
            </div>
        </section>
    )
}