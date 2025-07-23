import AnalysisImageSection from "@/Components/AIAnalysisResult/AnalysisImageSection"
import UserDetails from "@/Components/Clientdashboardcomponent/UserDetails";
import ClientAppointment from "../../Components/Clientdashboardcomponent/ClientAppointment"
import ClientSkinReport from "@/Components/Clientdashboardcomponent/ClientSkinReport";
import ClientRecentSkinAnalysis from "@/Components/Clientdashboardcomponent/ClientRecentSkinAnalysis";
import ClientDashboardNav from "@/Components/Clientdashboardcomponent/ClientDashboardNav";
import UserFaceAnalysis from "@/Components/Clientdashboardcomponent/UserFaceAnalysis";
export default function LeftPanel(){
    return(
        <div className="flex flex-col justify-between ">
                    <UserDetails />
                    <ClientAppointment />
                    <ClientRecentSkinAnalysis />
         </div>
    )
}