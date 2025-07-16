import GloriaDeoDoc from "@/assets/gloriaDedo.jpg";
// import { Verified } from "lucide-react";
import verifiedImg from "@/assets/verified.svg";
import Loaders from "./Loaders";
import useSWR from "swr";
import { apiFetcher } from "@/api/client";
export default function CosmetologistList() {
    const {data, isLoading, error} = useSWR("/users?role=cosmetologist",apiFetcher)
    if(isLoading){
        return (
             <Loaders />
        )
       
    }
    
    if (error){
        return(
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500">Failed to load cosmetologists. Please try again later.</p>
            </div>
        )
    }



    return (

        <form onSubmit={(e) => { e.preventDefault(); }}>
            {data?.map((cosmotologist) =>( 
            <div key={cosmotologist.id} className="flex flex-col space-y-3  w-full bg-white p-4 border border-light-border rounded-lg ">
                <img   src={
                                cosmotologist.profile?.image || 
                                GloriaDeoDoc
                            } 
                                GloriaDeoDoc alt="Doctor" className=" rounded-md" />
                <div className="flex justify-between">
                    <h2 className="text-lg font-medium   text-primary-dark">{cosmotologist.name}</h2>
                    <img src={verifiedImg} alt="Verified" className="w-8  " />
                </div>
                
                <p className="text-sm text-gray-600">{cosmotologist.profile?.areaOfExpertise}</p>

            </div>
            ))}
        </form>


        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        //     {cosmetologists.map((cosmetologist) => (
        //         <div key={cosmetologist.id} className="border p-4 rounded-lg shadow-md">
        //             <h2 className="text-lg font-semibold">{cosmetologist.name}</h2>
        //             <p className="text-sm text-gray-600">{cosmetologist.specialty}</p>
        //             <p className="text-sm text-gray-600">Rating: {cosmetologist.rating}</p>
        //         </div>
        //     ))}
        // </div>
    );
}