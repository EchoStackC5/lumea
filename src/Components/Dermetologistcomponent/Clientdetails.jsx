import { ArrowUpRight } from "lucide-react"
import face from "../../assets/images/face.jpg"
import vector from "../../assets/images/vector.png"
import vector1 from "../../assets/images/vector1.png"
import vector2 from "../../assets/images/vector2.png"
import vector3 from "../../assets/images/vector3.png"


export default function clientDetailsDem() {
    return (
        <section className="bg-white rounded-xl p-3 shadow-md w-[296px] h-[239.2px] space-y-4 mb-4">
            <div className="flex justify-between">
                <h1 className="md:text-lg text-md">Client Details</h1>
                <button className="md:h-[20px] md:w-[20px] h-4 w-4 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
            {/* Client name & Pic */}
            <div className="flex md:gap-5 items-center">
                <img src={face} alt="" className="md:h-[35px] md:w-[35px] h-7 w-8 rounded-full" />
                <div>
                    <h1 className="md:text-md text-sm">Abigail Adams</h1>
                    <p className="md:text-sm text-xs text-[#6B6A6C]">Female</p>
                </div>
            </div>
            {/* Client Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-1">
                <div className=" flex md:h-[50px] w-[100%] h-[30px] md:rounded-md rounded-md border border-white bg-[#F6EBFD] p-2 gap-3">
                    <div className="h-7 w-7 rounded-full bg-[#9D105B26] flex justify-center items-center">
                        <img src={vector} alt="" />
                    </div>
                    <div className=" flex flex-col text-xs items-center">
                        <h1 className="text-[#6B6A6C]">Age</h1>
                        <h2>43</h2>
                    </div>
                </div>
                <div className=" flex md:h-[50px] w-[100%] h-[30px] md:rounded-md rounded-md border border-white bg-[#F6EBFD] p-2 gap-3">
                    <div className="h-7 w-7 rounded-full bg-[#9D105B26] flex justify-center items-center">
                        <img src={vector2} alt="" />
                    </div>
                    <div className=" flex flex-col text-xs items-center">
                        <h1 className="text-[#6B6A6C]">Weight</h1>
                        <h2>85 Kg</h2>
                    </div>
                </div>
                <div className=" flex md:h-[50px] w-[100%] h-[30px] md:rounded-md rounded-md border border-white bg-[#F6EBFD] p-2 gap-3">
                    <div className="h-7 w-7 rounded-full bg-[#2572CB26] flex justify-center items-center">
                        <img src={vector1} alt="" />
                    </div>
                    <div className=" flex flex-col text-xs items-center">
                        <h1 className="text-[#6B6A6C]">Height</h1>
                        <h2>182 cm</h2>
                    </div>
                </div>
                <div className=" flex md:h-[50px] w-[100%] h-[30px] md:rounded-md rounded-md border border-white bg-[#F6EBFD] p-2 gap-3">
                    <div className="h-7 w-7 rounded-full bg-[#CFC31F26] flex justify-center items-center">
                        <img src={vector3} alt="" />
                    </div>
                    <div className="text-xs">
                        <h1 className="text-[#6B6A6C]">SkinType</h1>
                        <h2>Oily</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}