import Modal from "../demertologistdashboard/Modal"
import Cliendetails from "../../Components/Dermetologistcomponent/Clientdetails"
import RecentSkinAnalysis from "../../Components/Dermetologistcomponent/RecentSkinAnalysis"
import SkinReport from "../../Components/Dermetologistcomponent/SkinReport"
import Navbar from "@/Components/Navbar";

export default function DemOverview() {
  return (
    <>
    <Navbar/>
      <section className="bg-[#F6EBFD] h-full py-5">
        <div className="flex gap-6">
          <div>
            <Cliendetails />
            <RecentSkinAnalysis />
          </div>
          <Modal />
          <SkinReport />
        </div>
      </section>
    </>
  );
}