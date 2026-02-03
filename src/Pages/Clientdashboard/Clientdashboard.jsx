import { useState, useEffect } from "react";
import ClientSkinReport from "@/Components/Clientdashboardcomponent/ClientSkinReport";
import ClientDashboardNav from "@/Components/Clientdashboardcomponent/ClientDashboardNav";
import UserFaceAnalysis from "@/Components/Clientdashboardcomponent/UserFaceAnalysis";
import LeftPanel from "../../Components/Clientdashboardcomponent/LeftPanel";
import SkeletonLoader from "@/Components/custom/Skeleton";


export default function Clientdashboard() {

  const [display , setDisplay] = useState(false)
  const [loading, setIsloading] = useState(true)

  useEffect(() =>{
    const laodPage = setTimeout(() =>{
      setIsloading(false);
    }, 3000)

    return() => clearTimeout(laodPage);
  }, []);


  return (
    <>
    <ClientDashboardNav/>
      { loading? (
        <SkeletonLoader/>
      ):
      (<section className="bg-[#F6EBFD] h-full w-full px-2 lg:pt-8 ">
        <div className="flex px-1 md:px-6 gap-6 lg:flex-row flex-col">
          <LeftPanel setDisplay={setDisplay}/>
        <UserFaceAnalysis   />
        <ClientSkinReport display={display} setDisplay={setDisplay}/>
        </div>
      </section>)}
    </>
  );
}