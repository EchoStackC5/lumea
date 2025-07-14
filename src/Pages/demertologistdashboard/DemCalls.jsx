import Navbar from "@/Components/Navbar";
import CallsAppointmentCard from "@/Components/Dermetologistcomponent/CallsApointmentcard";
import MessagingApp from "@/Components/Dermetologistcomponent/Messaging";
import CometChatNoSSR from "@/CometChat/CometChatNoSSR/CometChatNoSSR";
export default function DemCalls(){
    return(
        <>
        <Navbar/>
        <div className="min-h-screen bg-backgrounds ">
            <CometChatNoSSR/>

        </div>
        
        {/* <div className="min-h-screen bg-backgrounds flex flex-col p-4 sm:p-8 md:p-12 lg:p-14">
            
            <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="lg:w-[35%] space-y-3  w-full  bg-white p-4 rounded-lg border border-light-border">
             <p className="text-xl font-dm-sans  font-medium ">Appointments</p>
              {[1,2,3,4].map(n => <CallsAppointmentCard key={n} />)}
            </div  >
            <div className=" md:w-[65%] w-full">
                <MessagingApp/>
                
            </div>
            
            </div>
            
            <p>This is Dem calls</p>
        </div> */}
        </>
    )
}