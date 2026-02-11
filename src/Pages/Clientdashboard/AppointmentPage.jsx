import { useState } from "react";
import Navbar from "../../Components/Clientdashboardcomponent/ClientDashboardNav";
import DashboardTabs from "@/Components/ui/DashboardTabs";
import Calender from "../../Components/Clientdashboardcomponent/AppointmentCalender";
import AppointmentTable from "../../Components/Clientdashboardcomponent/ClientAppointmentTable";
import ClientTableDetail from "../../Components/Clientdashboardcomponent/AppointmentDetails";

export default function Appointment() {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const clientTabs = [
    { label: "Overview", path: "/clientdashboard" },
    { label: "Appointments", path: "/appointmentpage" },
    { label: "Calls", path: "/clientcalls" },
  ];

  return (
    <>
      <Navbar />
      <DashboardTabs tabs={clientTabs} />

      <section className="bg-backgrounds lg:px-4 min-h-screen">
        <div className="flex flex-col md:flex-row gap-3 lg:gap-6 py-5">
          <div className="hidden md:block">
            <Calender />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
            <AppointmentTable
              setDetail={setAppointmentDetail}
              setShowDetail={setShowDetail}
              showDetail={showDetail}
            />

            <div className="hidden lg:block">
              <ClientTableDetail
                detail={appointmentDetail}
                visible={showDetail}
                setShowDetail={setShowDetail}
              />
            </div>
          </div>
        </div>

        {/* Mobile Detail Modal */}
        {showDetail && (
          <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4">
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto">
              <ClientTableDetail
                detail={appointmentDetail}
                visible={true}
                setShowDetail={setShowDetail}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
