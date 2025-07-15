import GloriaDeoDoc from "@/assets/gloriaDedo.jpg";
// import { Verified } from "lucide-react";
import verifiedImg from "@/assets/verified.svg"
export default function CosmetologistList() {

    return (

        <div>
            <div className="flex flex-col space-y-3  w-full bg-white p-4 border border-light-border rounded-lg ">
                <img src={GloriaDeoDoc} alt="Doctor" className=" rounded-md" />
                <div className="flex justify-between">
                    <h2 className="text-lg font-medium   text-primary-dark">Dr. Gloria Dedo</h2>
                    <img src={verifiedImg} alt="Verified" className="w-8  " />
                    

                </div>
                
                <p className="text-sm text-gray-600">Board-Certified Dermatologist & Specialist in Acne & Pigmentation</p>

            </div>
        </div>


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