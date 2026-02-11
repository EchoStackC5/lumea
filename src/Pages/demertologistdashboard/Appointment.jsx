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
        <div className="flex gap-6 py-5 px-3 flex-col md:flex-row">
          <Calender setReload={setReload} />
          <AppointmentTable
            setDetail={setAppointmentDetail}
            setShowDetail={setShowDetail}
            showDetail={showDetail}
            setReload={setReload}
            reload={reload}
            onStatusUpdate={handleStatusUpdate}
            updatingId={updatingId}
          />
          <ClientTableDetail
            detail={appointmentDetail}
            visible={showDetail}
            setShowDetail={setShowDetail}
            onStatusUpdate={handleStatusUpdate}
            updatingId={updatingId}
          />
        </div>
      </section>
    </>
  );
}
