import Dashboardnavbar from "../../Components/Dashboardnavbar";
import SkinAnalysis from "../../Components/Clientdashboardcomponent/SkinAnalysis";


export default function Clientdashboard() {
  return (
    <>
      <div>
        <Dashboardnavbar />
        <SkinAnalysis/>
        <h1>Client Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
      
    </>
  );
}