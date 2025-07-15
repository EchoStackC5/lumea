import Navbar from "@/Components/Navbar";
import Step1 from "@/Components/formSteps/step1";
import { steps } from "@/constants/data";

export default function AppointmentForm() {
    return(
        <>
        <Navbar/>
        
       
        <section className="min-h-screen bg-backgrounds flex flex-col p-4 sm:p-8 md:p-12 lg:p-16">
            
            
            <div className="flex justify-center items-center   ">
                <Step1 steps={steps}  />
            </div>
        </section>

         </>
    )
}
