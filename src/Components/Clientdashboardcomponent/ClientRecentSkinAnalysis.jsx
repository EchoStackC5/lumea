import { ArrowUpRight } from "lucide-react"
import pixelsun from "../../assets/images/pixelsun.png"
import oildrop from "../../assets/images/oildrop.png"
import linewater from "../../assets/images/linewater.png"
import waves from "../../assets/images/waves.png"
import dateline from "../../assets/images/dateline.png"

export default function ClientRecentSkinAnalysis() {
    return(
        <section className="bg-white rounded-xl p-4 shadow-md w-[296px] h-[239.2px] space-y-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-dm-sans text-[#1A151D]">Recent skin Analysis</h1>
                <button className="md:h-[20px] md:w-[20px] h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 rounded-md bg-[#F6EBFD] w-[126.7px] h-[61.24px]">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={pixelsun} alt="" className="bg-[#F5DBED] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C] font-inter">Poor Visibility</p>
                   </div>
              
              <h1 className="font-medium font-inter">High</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] w-[126.7px] h-[61.24px]">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={oildrop} alt="" className="bg-[#F2DEDF] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C] font-inter">Oil Level</p>
                   </div>
              
              <h1 className="font-medium font-inter">Elevated</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] w-[126.7px] h-[61.24px]">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={linewater} alt="" className="bg-[#D6E0F2] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C] font-inter">ConditionFlags</p>
                   </div>
              
              <h1 className="font-medium font-inter">Acne</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] w-[126.7px] h-[61.24px]">
                <div className="flex space-x-2">
                   <div className="">
                     <img src={waves} alt="" className="bg-[#D9D2F9] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C] font-inter">PoorVisibility</p>
                   </div>
              
              <h1 className="font-medium font-inter">UnEven</h1>
                </div>
              </div>
            </div>
           <div className="flex justify-between">
             <div className=" flex space-x-2">
                <img src={dateline} alt="" />
                <p className="text-xs  text-gray-500 font-inter">Scan Date</p>
             </div>
             <p className="text-xs font-inter">July 5th 2025</p>
           </div>
        </section>
    )
}