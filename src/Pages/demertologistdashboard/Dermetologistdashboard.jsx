import Dashboardnavbar from "../../Components/Dashboardnavbar";
import Clientdetails from "../../Components/Dermetologistcomponent/Clientdetails";
import AppointmentsDem from "../../Components/Dermetologistcomponent/AppointmentsDem";
import RecentSkinAnalysis from "../../Components/Dermetologistcomponent/RecentSkinAnalysis";
import SkinReport from "../../Components/Dermetologistcomponent/SkinReport";
import Skeletal from "../../Components/Dermetologistcomponent/Skeletal";


export default function Dermetologistdashboard() {
  return (
    <>
      <section className="bg-[#F6EBFD] h-full px-3">
        {/* <Dashboardnavbar/> */}
        <div className="flex gap-6 p-8">
          <div>
            <Clientdetails />
            <AppointmentsDem />
            <RecentSkinAnalysis />
          </div>
          <Skeletal />
          <SkinReport />
        </div>
      </section>
    </>
  );
}