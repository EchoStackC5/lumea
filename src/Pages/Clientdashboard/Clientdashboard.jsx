import { useState } from "react";
import ClientSkinReport from "@/Components/Clientdashboardcomponent/ClientSkinReport";
import ClientDashboardNav from "@/Components/Clientdashboardcomponent/ClientDashboardNav";
import UserFaceAnalysis from "@/Components/Clientdashboardcomponent/UserFaceAnalysis";
import LeftPanel from "../../Components/Clientdashboardcomponent/LeftPanel";


export default function Clientdashboard() {

  const [display , setDisplay] = useState(false)

  return (
    <>
    <ClientDashboardNav/>
      <section className="bg-[#F6EBFD] h-full w-full p-5 ">
        <div className="flex px-1 md:px-6 gap-6 justify-between lg:flex-row flex-col">
          <LeftPanel setDisplay={setDisplay}/>
        <UserFaceAnalysis   />
        <ClientSkinReport display={display} setDisplay={setDisplay}/>
        </div>
      </section>
    </>
  );
}