import { Calendar, Clock, User } from "lucide-react";
import { useNavigate } from "react-router";
import useSWR from "swr";
import { apiFetcher } from "@/api/client";
import { format } from "date-fns";
import { Badge } from "@/Components/ui/badge";

export default function UpcomingAppointments() {
  const navigate = useNavigate();
  const { data, isLoading } = useSWR("/appointments", apiFetcher);

  const getStatusVariant = (status) => {
    const statusLower = status?.toLowerCase();
    switch (statusLower) {
      case "completed":
      case "accepted":
        return "accepted";
      case "rejected":
        return "rejected";
      case "pending":
        return "pending";
      default:
        return "default";
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-6 border border-light-border">
        <p className="text-center text-gray-500">Loading appointments...</p>
      </div>
    );
  }

  const upcomingAppointments = data?.slice(0, 3) || [];

  return (
    <div className="bg-white rounded-xl p-6 border border-light-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-darkest">Upcoming Appointments</h3>
        <button
          onClick={() => navigate("/appointmentpage")}
          className="text-sm cursor-pointer text-system-primary hover:text-button-hover font-medium transition"
        >
          View All
        </button>
      </div>

      {upcomingAppointments.length === 0 ? (
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 mb-4">No upcoming appointments</p>
          <button
            onClick={() => navigate("/appointment-form")}
            className="px-4 py-2 bg-system-primary text-white rounded-full hover:bg-button-hover transition text-sm"
          >
            Book Appointment
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="p-4 border border-light-border rounded-xl hover:border-system-primary transition cursor-pointer"
              onClick={() => navigate("/appointmentpage")}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-system-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-system-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-darkest">
                      {appointment.cosmetologist?.name || "Dr. Specialist"}
                    </p>
                    <p className="text-xs text-dashboar-secondary">Dermatologist</p>
                  </div>
                </div>
                <Badge variant={getStatusVariant(appointment.status)} className="text-xs">
                  {appointment.status}
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-dashboar-secondary">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(appointment.date), "MMM d, yyyy")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{format(new Date(appointment.date), "h:mm a")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
