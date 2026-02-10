import { useState, useEffect } from "react";
import Navbar from "../../Components/Clientdashboardcomponent/ClientDashboardNav";
import Calender from "../../Components/Clientdashboardcomponent/AppointmentCalender";
import AppointmentTable from "../../Components/Clientdashboardcomponent/ClientAppointmentTable";
import ClientTableDetail from "../../Components/Clientdashboardcomponent/AppointmentDetails";
import Loaders from "@/Components/Loaders";

export default function Appointment() {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    const pageLoad = setTimeout(() => {
      setIsloading(false);
    }, 3000);
    return () => clearTimeout(pageLoad);
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-backgrounds lg:px-4 ">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loaders />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
            <Calender />

            <div className=" flex flex-col lg:flex-row gap-6 w-full h-full">
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
        )}
      </section>
    </>
  );
}
