import Calender from "../../Components/Dermetologistcomponent/Calender";
import ClientTableDetail from "../../Components/Dermetologistcomponent/ClientTableDetail";
import AppointmentTable from "../../Components/Dermetologistcomponent/AppointmentTable";
import Navbar from "@/Components/Navbar";
import { useState } from "react";
import { apiClient } from "@/api/client";
import { toast } from "sonner";
import { mutate } from "swr";

export default function Appointment() {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  const [reload, setReload] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  // Removed artificial loading delay for better performance

  // Centralized status update function
  const handleStatusUpdate = async (appointmentId, newStatus) => {
    setUpdatingId(appointmentId);

    try {
      await apiClient.patch(
        `/appointments/${appointmentId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );

      // Reload the appointments data
      mutate("/appointments/cosmetologist");
      setReload(true);

      // Show single success toast
      toast.success(`Appointment ${newStatus}!`, {
        description: `The appointment has been ${newStatus} successfully.`,
      });
    } catch (err) {
      console.error("Error updating appointment:", err);
      const errorMessage =
        err.response?.data?.message || `Failed to ${newStatus} appointment`;

      toast.error("Update Failed", {
        description: errorMessage,
      });
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#F6EBFD] min-h-screen">
        <div className="flex flex-col lg:flex-row gap-6 py-5 px-3 md:px-6 items-start">
          {/* Calendar - Hidden on mobile, shown on md+ */}
          <div className="hidden md:block lg:h-screen md:w-auto lg:w-auto">
            <Calender setReload={setReload} />
          </div>

          {/* Appointment Table - Full width on mobile */}
          <div className="flex-1 lg:h-screen w-full min-w-0 h-full">
            <AppointmentTable
              setDetail={setAppointmentDetail}
              setShowDetail={setShowDetail}
              showDetail={showDetail}
              setReload={setReload}
              reload={reload}
              onStatusUpdate={handleStatusUpdate}
              updatingId={updatingId}
            />
          </div>

          {/* Client Detail - Hidden on mobile/tablet, shown on lg+ */}
          <div className="hidden lg:block lg:w-auto">
            <ClientTableDetail
              detail={appointmentDetail}
              visible={showDetail}
              setShowDetail={setShowDetail}
              onStatusUpdate={handleStatusUpdate}
              updatingId={updatingId}
            />
          </div>
        </div>

        {/* Mobile Detail Modal - Show as overlay on mobile/tablet */}
        {showDetail && (
          <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4">
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto">
              <ClientTableDetail
                detail={appointmentDetail}
                visible={true}
                setShowDetail={setShowDetail}
                onStatusUpdate={handleStatusUpdate}
                updatingId={updatingId}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
