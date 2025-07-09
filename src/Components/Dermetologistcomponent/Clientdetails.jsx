import { ArrowUpRight } from "lucide-react"
import face from "../../assets/images/face.jpg"
import { Hourglass } from "lucide-react"
import { Weight } from "lucide-react"
import { MoveVertical } from "lucide-react"


export default function clientDetailsDem() {
    return (
        <section className="md:h-[272px] md:w-[30%] border rounded-2xl">
            <div className="flex justify-between md:p-3 p-2">
                <h1 className="text-xl font-bold">Client Details</h1>
                <button className="md:h-[20px] md:w-[20px] h-8 w-8 rounded-full bg-black text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
            {/* Client name & Pic */}
            <div className="flex gap-4 px-3 items-center">
                <img src={face} alt="" className="md:h-[50px] md:w-[50px] h-25 w-25 rounded-full" />
                <div>
                    <h1 className="md:text-lg text-lg">Abigail Adams</h1>
                    <p className="md:text-md text-md">Female</p>
                </div>
            </div>
            {/* Client Info Card*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3">
                <div className=" flex h-[65px] w-[100%] rounded-xl border bg-[#F6EBFD] px-6 py-4 gap-2">
                    <div className="h-10 w-10 rounded-full bg-[#9D105B26] flex justify-center items-center">
                        <Hourglass  className="text-[#9D105B] h-8 w-10"/>
                    </div>
                    <div className=" flex flex-col text-sm items-center">
                        <h1>Age</h1>
                        <h2>43</h2>
                    </div>
                </div>
                <div className=" flex h-[65px] w-[100%] rounded-xl border bg-[#F6EBFD] px-6 py-4 gap-2">
                    <div className="h-10 w-10 rounded-full bg-[#9D105B26] flex justify-center items-center">
                        <Weight  className="text-[#9D105B] h-8 w-10"/>
                    </div>
                    <div className=" flex flex-col text-sm items-center">
                        <h1>Weight</h1>
                        <h2>85 Kg</h2>
                    </div>
                </div>
                <div className=" flex h-[65px] w-[100%] rounded-xl border bg-[#F6EBFD] px-6 py-4 gap-2">
                    <div className="h-10 w-10 rounded-full bg-[#9D105B26] flex justify-center items-center">
                        <MoveVertical  className="text-[#9D105B] h-8 w-10"/>
                    </div>
                    <div className=" flex flex-col text-sm items-center">
                        <h1>Height</h1>
                        <h2>182 cm</h2>
                    </div>
                </div>
                <div className=" flex h-[65px] w-[100%] rounded-xl border bg-[#F6EBFD] px-6 py-4 gap-2">
                    <div className="h-10 w-10 rounded-full bg-[#9D105B26] flex justify-center items-center">
                        <Hourglass  className="text-[#9D105B] h-8 w-10"/>
                    </div>
                    <div className=" flex flex-col text-sm">
                        <h1>SkinType</h1>
                        <h2>Oily</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}