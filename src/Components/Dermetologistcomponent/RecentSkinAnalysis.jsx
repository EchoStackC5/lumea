import { ArrowUpRight } from "lucide-react"
import pixelsun from "../../assets/images/pixelsun.png"
import oildrop from "../../assets/images/oildrop.png"
import linewater from "../../assets/images/linewater.png"
import waves from "../../assets/images/waves.png"
import dateline from "../../assets/images/dateline.png"
import { Download } from "lucide-react"

export default function RecentSkinAnalysis() {
    return(
        <section className="bg-white rounded-xl p-4 shadow-md w-[296px] h-[239.2px] space-y-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-inter text-[#1A151D]">Recent skin Analysis</h1>
                <button className="md:h-[20px] md:w-[20px] h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><ArrowUpRight /></button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 rounded-md bg-[#F6EBFD] w-[126.7px] h-[61.24px]">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={pixelsun} alt="" className="bg-[#F5DBED] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C]">Poor Visibility</p>
                   </div>
              
              <h1 className="font-medium">High</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] w-[126.7px] h-[61.24px]">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={oildrop} alt="" className="bg-[#F2DEDF] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C]">Oil Level</p>
                   </div>
              
              <h1 className="font-medium ">Elevated</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] w-[126.7px] h-[61.24px]">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={linewater} alt="" className="bg-[#D6E0F2] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C]">Condition Flags</p>
                   </div>
              
              <h1 className="font-medium">Acne</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] w-[126.7px] h-[61.24px]">
                <div className="flex space-x-2">
                   <div className="">
                     <img src={waves} alt="" className="bg-[#D9D2F9] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C]">Poor Visibility</p>
                   </div>
              
              <h1 className="font-medium">UnEven</h1>
                </div>
              </div>
            </div>
           <div className="flex justify-between">
             <div className=" flex space-x-2">
                <img src={dateline} alt="" />
                <p className="text-xs  text-gray-500">Scan Date</p>
             </div>
             <p className="text-xs">July 5th 2025</p>
           </div>
            <div className="h-10 w-[268px] rounded-full border hover:bg-[#1A151D] hover:text-white cursor-pointer flex justify-center items-center gap-1 mt-10">
              <Download className="h-4 w-4"/>
              <button>Download AI Skin Report</button>
            </div>
        </section>
    )
}