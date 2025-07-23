import face from "../../assets/images/face.jpg"
import ageIcon from "@/assets/ageIcon.svg";
import heightIcon from "@/assets/heightIcon.svg";
import weightIcon from "@/assets/weightIcon.svg";
import skinIcon from '@/assets/skintypeIcon.svg';
import vector from "../../assets/images/vector.png"
import vector1 from "../../assets/images/vector1.png"
import vector2 from "../../assets/images/vector2.png"
import vector3 from "../../assets/images/vector3.png"
import { Link } from "react-router"
import { apiFetcher } from "@/api/client";
import useSWR from "swr";
import Loaders from "../Loaders";
import useUserByID from "@/hooks/UserById";


export default function UserDetails() {
    const {user} = useUserByID()
     const {data, isLoading, error} = useSWR('/appointments' ,apiFetcher);
        if (isLoading)
            return
        <Loaders/>
    
        if (error) 
            return(
        <div>
            <p className="text-red-600 text-center">Something went wrong</p>
        </div>
        )
        const appointment = data?.[0];
        
    return (
        <section className="bg-white rounded-xl p-3 border border-light-border  max-w-full md:max-w-md lg:max-w-xs xl:max-w-sm 2xl:max-w-4xl space-y-4 mb-4">
            <div className="flex justify-between">
                <h1 className="md:text-lg text-md  text-primary-dark font-dm-sans font-semibold">Details</h1>
                <Link to= "/skin-analysis-form" className="font-poppins px-3 py-2 hover:bg-amber-500 hover:text-darkest txt-xs rounded-full bg-[#1A151D] text-white flex justify-center items-center text-sm">Analyze Skin</Link>
            </div>
            {/* Client name & Pic */}
            <div className="flex gap-2 items-center justify-start">
                <img src={user?.profile?.image || face} alt="" className="md:h-[35px] md:w-[35px] h-7 w-8 rounded-full" />
                <div className="flex flex-col">
                    <h1 className="md:text-md text-sm font-inter">{user?.name || "Anonymous"}</h1>
                    <p className="md:text-sm text-xs text-[#6B6A6C] font-inter">{appointment?.gender || "N/A"}</p>
                </div>
            </div>
            {/* Client Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-1">
                <div className=" flex rounded-md  border border-white bg-[#F6EBFD] p-2 gap-3">   
                        <img src={ageIcon} className="w-8" alt="" /> 
                    <div className=" flex flex-col text-xs items-center">
                        <h1 className="text-[#6B6A6C] font-inter">Age</h1>
                        <h2 className="font-inter text-[#1A151D]">{appointment?.age || 'N/A'}</h2>
                    </div>
                </div>
                <div className=" flex  rounded-md border border-white bg-[#F6EBFD] p-2 gap-3">
                        <img src={weightIcon} alt="" className="w-8" />
                    
                    <div className=" flex flex-col text-xs items-center">
                        <h1 className="text-[#6B6A6C] font-inter">Weight</h1>
                        <h2 className="font-inter text-[#1A151D]">{appointment?.weight || "N/A"}</h2>
                    </div>
                </div>
                <div className=" flex  rounded-md border border-white bg-[#F6EBFD] p-2 gap-3">
                  
                        <img src={heightIcon} className="w-8" alt="" />
                    
                    <div className=" flex flex-col text-xs items-center">
                        <h1 className="text-[#6B6A6C] font-inter">Height</h1>
                        <h2 className="font-inter text-[#1A151D]">{appointment?.height || "N/A"}</h2>
                    </div>
                </div>
                <div className=" flex  rounded-md border border-white bg-[#F6EBFD] p-2 gap-3">
                    
                        <img src={skinIcon} className="w-8" alt="" />
                    
                    <div className="text-xs">
                        <h1 className="text-[#6B6A6C] font-inter">SkinType</h1>
                        <h2 className="font-inter text-[#1A151D]">{appointment?.skinType}</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}