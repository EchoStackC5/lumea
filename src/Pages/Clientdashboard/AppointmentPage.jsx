

import AppointmentCalender from "../../Components/Clientdashboardcomponent/AppointmentCalender"
import ClientAppointmentTable from "../../Components/Clientdashboardcomponent/ClientAppointmentTable"
import AppointmentDetailsCard from "@/Components/Clientdashboardcomponent/AppointmentDetails";

export default function Appointment() {
  return (
   <>
  <div 
  className="grid gap-1 justify-center"
  style={{ gridTemplateColumns: '358px 686px 296px' }}
>
  <div className="w-[358px] h-[444px] ml-7">
    <AppointmentCalender />
  </div>

  <div className="w-[686px] h-[444px] mr-2">
    <ClientAppointmentTable />
  </div>

  <div className="w-[296px] h-[444px] mr-4 ">
    <AppointmentDetailsCard />
  </div>
</div>

</>

  );
}