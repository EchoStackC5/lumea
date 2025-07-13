import Skeletal from "../../Components/Dermetologistcomponent/Skeletal";
import Cliendetails from "../../Components/Dermetologistcomponent/Clientdetails"
import RecentSkinAnalysis from "../../Components/Dermetologistcomponent/RecentSkinAnalysis"
import SkinReport from "../../Components/Dermetologistcomponent/SkinReport"

export default function Clientdashboard() {
  return (
    <>
      <section className="bg-[#F6EBFD] h-full p-5">
        {/* <Dashboardnavbar/> */}
        <div className="flex gap-6">
          <div>
            <Cliendetails />
            <RecentSkinAnalysis />
          </div>
          <Skeletal />
          <SkinReport />
        </div>
      </section>
    </>
  );
}