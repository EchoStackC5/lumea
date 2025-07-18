import Skeletal from "../../Components/Dermetologistcomponent/Skeletal";
import Cliendetails from "../../Components/Dermetologistcomponent/Clientdetails"
import RecentSkinAnalysis from "../../Components/Dermetologistcomponent/RecentSkinAnalysis"
import SkinReport from "../../Components/Dermetologistcomponent/SkinReport"
import Navbar from "@/Components/Navbar";

export default function DemOverview() {
  return (
    <>
      <section className="bg-[#F6EBFD] h-full px-5">
        <Navbar/>
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