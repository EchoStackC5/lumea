import Navbar from "@/Components/Navbar";
import AppointmentsDem from "../../Components/Dermetologistcomponent/AppointmentsDem";
import Skeletal from "../../Components/Dermetologistcomponent/Skeletal";
import AppointmentCalender from "../../Components/Dermetologistcomponent/AppointmentCalender"

import { useState } from "react";

export default function Dermetologistdashboard() {
  

  return (
    <>
      <section className="bg-[#F6EBFD] h-full">
        <Navbar/>
        <div className="flex gap-6">
          <div>
            <AppointmentCalender />
          </div>
          <Skeletal />
          <AppointmentsDem />
        </div>
      </section>
    </>
  );
}