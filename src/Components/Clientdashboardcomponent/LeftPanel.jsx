import AnalysisImageSection from "@/Components/AIAnalysisResult/AnalysisImageSection"
import UserDetails from "@/Components/Clientdashboardcomponent/UserDetails";
import ClientAppointment from "./ClientAppointment"
import ClientSkinReport from "@/Components/Clientdashboardcomponent/ClientSkinReport";
import ClientRecentSkinAnalysis from "@/Components/Clientdashboardcomponent/ClientRecentSkinAnalysis";

export default function LeftPanel({setDisplay}){
    return(
        <div className="flex flex-col justify-between ">
                    <UserDetails />
                    <ClientAppointment setDisplay={setDisplay}/>
                    <ClientRecentSkinAnalysis />
         </div>
    )
}