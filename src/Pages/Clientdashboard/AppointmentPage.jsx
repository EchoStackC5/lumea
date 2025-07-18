import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Calender from '../../Components/Clientdashboardcomponent/AppointmentCalender';
import AppointmentTable from '../../Components/Clientdashboardcomponent/ClientAppointmentTable';
import ClientTableDetail from '../../Components/Clientdashboardcomponent/AppointmentDetails';

export default function Appointment() {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="bg-[#F6EBFD] h-full px-5">
      <Navbar />
      <div className="flex gap-6">
        <Calender />

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
    </section>
  );
}
