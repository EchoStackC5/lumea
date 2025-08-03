import Navbar from "@/Components/Navbar";
import AppointmentsDem from "../../Components/Dermetologistcomponent/AppointmentsDem";
import Skeletal from "../../Components/Dermetologistcomponent/Skeletal";
import AppointmentCalender from "../../Components/Dermetologistcomponent/AppointmentCalender"
import CalendarAndDay from "@/Components/Dermetologistcomponent/CanderAndDay";
import SkeletonLoader from "@/Components/custom/Skeleton";

import { useState, useEffect } from "react";

export default function Dermetologistdashboard() {
  const [loading, setIsloading] = useState(true);

  useEffect(() =>{
   const  loadPage = setTimeout(()=>{
    setIsloading(false)
   }, 3000)

   return() => clearTimeout(loadPage)
  }, [])
  

  return (
    <>
    <Navbar/>
      <section className="bg-backgrounds  min-h-screen w-full">
        {loading?  (
          <SkeletonLoader/>
        ):(<div className="flex gap-6 py-5 flex-col  md:flex-row px-6 w-full">
          <CalendarAndDay/>
          <Skeletal />
          <AppointmentsDem />
        </div>)}
      </section>
      <div>
            {/* <AppointmentCalender /> */}
          </div>
    </>
  );
}