import ClientDashboardNav from "@/Components/Clientdashboardcomponent/ClientDashboardNav";
import LeftPanel from "../../Components/Clientdashboardcomponent/LeftPanel";
import ClientDashboardStats from "@/Components/Clientdashboardcomponent/ClientDashboardStats";
import FaceAnalysisHistory from "@/Components/Clientdashboardcomponent/FaceAnalysisHistory";
import SkinHealthProgress from "@/Components/Clientdashboardcomponent/SkinHealthProgress";
import UpcomingAppointments from "@/Components/Clientdashboardcomponent/UpcomingAppointments";

export default function Clientdashboard() {
  // Removed artificial loading delay for better performance

  return (
    <>
      <ClientDashboardNav />
      <section className="bg-backgrounds min-h-screen w-full px-4 md:px-6 lg:px-8 py-6">
        {/* Top Stats */}
        <div className="mb-6">
          <ClientDashboardStats />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - User Info */}
          <div className="lg:col-span-3">
            <LeftPanel />
          </div>

          {/* Middle Column - Analysis History & Progress */}
          <div className="lg:col-span-6 space-y-6">
            <FaceAnalysisHistory />
            <SkinHealthProgress />
          </div>

          {/* Right Column - Appointments */}
          <div className="lg:col-span-3">
            <UpcomingAppointments />
          </div>
        </div>
      </section>
    </>
  );
}
