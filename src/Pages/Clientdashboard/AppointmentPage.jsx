import React, { useState } from 'react';
import Navbar from '../../Components/Clientdashboardcomponent/ClientDashboardNav';
// import Navbar from "../../Components/Dashboardnavbar"
import Calender from '../../Components/Clientdashboardcomponent/AppointmentCalender';
import AppointmentTable from '../../Components/Clientdashboardcomponent/ClientAppointmentTable';
import ClientTableDetail from '../../Components/Clientdashboardcomponent/AppointmentDetails';

export default function Appointment() {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="bg-[#F6EBFD] h-screen px-5 ">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6">
        <Calender />

       <div className='flex-1 flex flex-col md:flex-row gap-6'>
         <AppointmentTable 
          setDetail={setAppointmentDetail} 
          setShowDetail={setShowDetail} 
          showDetail={showDetail} 
        />

        <ClientTableDetail 
          detail={appointmentDetail} 
          visible={showDetail} 
          setShowDetail={setShowDetail} 
        />
       </div>
      </div>
    </section>
  );
}
