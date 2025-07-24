import { ArrowUpRight } from "lucide-react"
import pixelsun from "../../assets/images/pixelsun.png"
import oildrop from "../../assets/images/oildrop.png"
import linewater from "../../assets/images/linewater.png"
import waves from "../../assets/images/waves.png"
import dateline from "../../assets/images/dateline.png"
import { Link } from "react-router";
import { apiFetcher } from "@/api/client";
import useSWR from "swr";

export default function ClientRecentSkinAnalysis() {
   const { data, isLoading, error } = useSWR('/users/me/history', apiFetcher);

  if (isLoading) return (
    <div>
      <p className="animate animate-pulse">Loading</p>
    </div>
  );

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load analysis results. Please try again later.</p>
      </div>
    );
  }

  const latestReport = data?.[0];
  const analysis = latestReport?.analysis;
  console.log("Analysis data:", analysis);

    return(
        <section className="bg-white rounded-xl p-4 border border-light-border max-w-full md:max-w-md lg:max-w-2xs xl:max-w-sm 2xl:max-w-4xl space-y-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-dm-sans text-[#1A151D]">Recent skin Analysis</h1>
                <Link to="/ai-analyze" className=" h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center"><ArrowUpRight /></Link>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 rounded-md bg-[#F6EBFD] ">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={pixelsun} alt="" className="bg-[#F5DBED] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C] font-inter">Pore Visibility</p>
                   </div>
              
              <h1 className="font-medium font-inter">{analysis?.poreVisibility || "N/A"}</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] ">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={oildrop} alt="" className="bg-[#F2DEDF] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C] font-inter">Oil Level</p>
                   </div>
              
              <h1 className="font-medium font-inter">{analysis?.oilLevel || "N/A"}</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] ">
                <div className="flex space-x-4">
                   <div className="">
                     <img src={linewater} alt="" className="bg-[#D6E0F2] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C] font-inter">Condition Flags</p>
                   </div>
              
              <h1 className="font-medium font-inter">{analysis?.conditions?.join(", ") || "None"}</h1>
                </div>
              </div>
                <div className="p-2 rounded-md bg-[#F6EBFD] ">
                <div className="flex space-x-2">
                   <div className="">
                     <img src={waves} alt="" className="bg-[#D9D2F9] rounded-full p-2 " />
                <p className="text-[8.74px] pt-2 text-[#6B6A6C] font-inter">Skin Texture</p>
                   </div>
              
              <h1 className="font-medium font-inter">{analysis?.texture || "N/A"}</h1>
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