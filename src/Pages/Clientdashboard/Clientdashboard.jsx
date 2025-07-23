import AnalysisImageSection from "@/Components/AIAnalysisResult/AnalysisImageSection"
import UserDetails from "@/Components/Clientdashboardcomponent/UserDetails";
import ClientAppointment from "../../Components/Clientdashboardcomponent/ClientAppointment"
import ClientSkinReport from "@/Components/Clientdashboardcomponent/ClientSkinReport";
import ClientRecentSkinAnalysis from "@/Components/Clientdashboardcomponent/ClientRecentSkinAnalysis";
import ClientDashboardNav from "@/Components/Clientdashboardcomponent/ClientDashboardNav";
import UserFaceAnalysis from "@/Components/Clientdashboardcomponent/UserFaceAnalysis";
import LeftPanel from "../../Components/Clientdashboardcomponent/LeftPanel";
// import LeftPanel from "./leftPanel";
import LeftPanel from "../../Components/Clientdashboardcomponent/LeftPanel";

export default function Clientdashboard() {
  return (
    <>
    <ClientDashboardNav/>
      <section className="bg-[#F6EBFD] h-full w-full p-5 ">
        {/* <Dashboardnavbar/> */}
        <div className="flex px-1 md:px-6 gap-6 justify-between lg:flex-row flex-col">
          <LeftPanel/>
        <UserFaceAnalysis />
        <ClientSkinReport />
        </div>
       
        <div className="flex flex-col justify-between md:flex-row gap-6 px-6">
          {/* <div>
            <UserDetails />
            <ClientAppointment />
            <ClientRecentSkinAnalysis />
          </div> */}
          
          <div className="flex flex-col gap-6 lg:flex-row md:flex-col ">
            <div className="w-full flex-1 ">
              
            </div>
            
           
          </div>
        </div>
      </section>
    </>
  );
}