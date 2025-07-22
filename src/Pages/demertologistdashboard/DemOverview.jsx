import Modal from "../demertologistdashboard/Modal"
import Cliendetails from "../../Components/Dermetologistcomponent/Clientdetails"
import RecentSkinAnalysis from "../../Components/Dermetologistcomponent/RecentSkinAnalysis"
import SkinReport from "../../Components/Dermetologistcomponent/SkinReport"
import AnalysisImageSection from "@/Components/AIAnalysisResult/AnalysisImageSection"
import Navbar from "@/Components/Navbar";

export default function DemOverview() {
  return (
    <>
    <Navbar/>
      <section className="bg-[#F6EBFD] h-full py-5">
        <div className="flex flex-col justify-between md:flex-row gap-6 mt-7 px-6">
          <div>
            <Cliendetails />
            <RecentSkinAnalysis />
          </div>
          <AnalysisImageSection />
          <SkinReport />
        </div>
      </section>
    </>
  );
}