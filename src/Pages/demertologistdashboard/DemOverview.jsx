import Modal from "../demertologistdashboard/Modal"
import Loaders from "@/Components/Loaders"
import { apiFetcher } from "@/api/client"
import useSWR from "swr"
import Cliendetails from "../../Components/Dermetologistcomponent/Clientdetails"
import RecentSkinAnalysis from "../../Components/Dermetologistcomponent/RecentSkinAnalysis"
import SkinReport from "../../Components/Dermetologistcomponent/SkinReport"
import AnalysisImageSection from "@/Components/AIAnalysisResult/AnalysisImageSection"
import Navbar from "@/Components/Navbar";

export default function DemOverview() {
  const { data, isLoading, error } = useSWR('/users/me/history', apiFetcher);
  
    if (isLoading) return <Loaders />;
  
    if (error) {
      return (
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">Failed to load analysis results. Please try again later.</p>
        </div>
      );
    }
    
    const latestReport = data?.[0];
    const analysis = latestReport?.analysis;
    console.log("Analysis data:", analysis);
  

  return (
    <>
    <Navbar/>
      <section className="bg-[#F6EBFD] h-full py-5">
        <div className="flex flex-col justify-between md:flex-row gap-6 mt-7 px-6">
          <div>
            <Cliendetails analysis={analysis}/>
            <RecentSkinAnalysis analysis={analysis}/>
          </div>
          <AnalysisImageSection report={latestReport} analysis={analysis}/>
          <SkinReport />
        </div>

      </section>
    </>
  );
}