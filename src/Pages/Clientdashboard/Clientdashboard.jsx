import Skeletal from "../../Components/Dermetologistcomponent/Skeletal";
import UserDetails from "@/Components/Clientdashboardcomponent/UserDetails";
import ClientAppointment from "../../Components/Clientdashboardcomponent/ClientAppointment"
import SkinReport from "../../Components/Dermetologistcomponent/SkinReport"
import ClientRecentSkinAnalysis from "@/Components/Clientdashboardcomponent/ClientRecentSkinAnalysis";
import Dashboardnavbar from "@/Components/Dashboardnavbar";

export default function Clientdashboard() {
  return (
    <>
      <section className="bg-[#F6EBFD] h-full p-5">
        {/* <Dashboardnavbar/> */}
        <div className="flex gap-6">
          <div>
            <UserDetails />
            <ClientAppointment />
            <ClientRecentSkinAnalysis />
          </div>
          <Skeletal />
          <SkinReport />
        </div>
      </section>
    </>
  );
}