import Dashboardnavbar from "../../Components/Dashboardnavbar";
import Clientdetails from "../../Components/Dermetologistcomponent/Clientdetails";
import AppointmentsDem from "../../Components/Dermetologistcomponent/AppointmentsDem";
import RecentSkinAnalysis from "../../Components/Dermetologistcomponent/RecentSkinAnalysis";
import SkinReport from "../../Components/Dermetologistcomponent/SkinReport";

export default function Dermetologistdashboard() {
  return (
    <>
      <div>
        {/* <Dashboardnavbar/> */}
        <div>
          <Clientdetails/>
          <AppointmentsDem/>
          {/* <RecentSkinAnalysis/>
          <SkinReport/> */}
        </div>
        <h1>DERMETOLOGIST DASHBOARD</h1>
      </div>
    </>
  );
}