import { ArrowUpRight } from "lucide-react"
import face from "../../assets/images/face.jpg"
import { Hourglass } from "lucide-react"
import { Weight } from "lucide-react"
import { MoveVertical } from "lucide-react"
import { Egg } from "lucide-react"


export default function clientDetailsDem() {
    return (
        <section className="md:h-[auto] md:w-[105%] h-[10%] w-[30%] border border-white rounded-xl mb-5 bg-white">
            <div className="flex justify-between md:p-3 p-2">
                <h1 className="md:text-xl text-md font-bold">Client Details</h1>
                <button className="md:h-[30px] md:w-[30px] h-6 w-6 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
            {/* Client name & Pic */}
            <div className="flex md:gap-7 md:px-3 px-1 items-center">
                <img src={face} alt="" className="md:h-[50px] md:w-[50px] h-7 w-8 rounded-full" />
                <div>
                    <h1 className="md:text-xl text-sm">Abigail Adams</h1>
                    <p className="md:text-md text-xs">Female</p>
                </div>
            </div>
            {/* Client Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-1 md:px-3 p-2">
                <div className=" flex md:h-[70px] w-[100%] h-[30px] md:rounded-xl rounded-md border border-white bg-[#F6EBFD] md:px-6 md:py-3 py-1 px-1 gap-3">
                    <div className="md:h-10 md:w-10 h-6 w-6 rounded-full bg-[#9D105B26] flex justify-center items-center">
                        <Hourglass  className="text-[#9D105B] md:h-8 md:w-10 h-3 w-4"/>
                    </div>
                    <div className=" flex flex-col md:text-md text-xs items-center">
                        <h1>Age</h1>
                        <h2>43</h2>
                    </div>
                </div>
                <div className=" flex md:h-[70px] w-[100%] h-[30px] md:rounded-xl rounded-md border border-white bg-[#F6EBFD] md:px-6 md:py-3 py-1 px-1 gap-3">
                    <div className="md:h-10 md:w-10 h-6 w-6 rounded-full bg-[#9D105B26] flex justify-center items-center">
                        <Weight  className="text-[#BF3AB4] md:h-8 md:w-10 h-3 w-4"/>
                    </div>
                    <div className=" flex flex-col md:text-md text-xs items-center">
                        <h1>Weight</h1>
                        <h2>85 Kg</h2>
                    </div>
                </div>
                <div className=" flex md:h-[70px] w-[100%] h-[30px] md:rounded-xl rounded-md border border-white bg-[#F6EBFD] md:px-6 md:py-3 py-1 px-1 gap-3">
                    <div className="md:h-10 md:w-10 h-6 w-6 rounded-full bg-[#2572CB26] flex justify-center items-center">
                        <MoveVertical  className="text-[#2572CB] md:h-8 md:w-10 h-3 w-4"/>
                    </div>
                    <div className=" flex flex-col md:text-md text-xs items-center">
                        <h1>Height</h1>
                        <h2>182 cm</h2>
                    </div>
                </div>
                <div className=" flex md:h-[70px] w-[100%] h-[30px] md:rounded-xl rounded-md border border-white bg-[#F6EBFD] md:px-6 md:py-3 py-1 px-1 gap-3">
                    <div className="md:h-10 md:w-10 h-6 w-6 rounded-full bg-[#CFC31F26] flex justify-center items-center">
                        <Egg  className="text-[#CFC31F] md:h-8 md:w-10 h-3 w-4"/>
                    </div>
                    <div className=" flex flex-col md:text-md text-xs">
                        <h1>SkinType</h1>
                        <h2>Oily</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}