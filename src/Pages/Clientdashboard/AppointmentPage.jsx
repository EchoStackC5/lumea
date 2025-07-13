

import AppointmentCalender from "../../Components/Clientdashboardcomponent/AppointmentCalender"
import ClientAppointmentTable from "../../Components/Clientdashboardcomponent/ClientAppointmentTable"

export default function Appointment() {
  return (
    <>
      <div className="grid grid-cols-3 mr-10">
        <AppointmentCalender className=""/>
        <ClientAppointmentTable/>
       
      </div>
    </>
  );
}