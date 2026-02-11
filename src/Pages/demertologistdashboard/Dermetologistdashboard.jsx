import Navbar from "@/Components/Navbar";
import AppointmentsDem from "../../Components/Dermetologistcomponent/AppointmentsDem";
import CalendarAndDay from "@/Components/Dermetologistcomponent/CanderAndDay";
import DashboardAnalytics from "@/Components/Dermetologistcomponent/DashboardAnalytics";
import TodaysSummary from "@/Components/Dermetologistcomponent/TodaysSummary";
import RecentActivity from "@/Components/Dermetologistcomponent/RecentActivity";
import QuickStats from "@/Components/Dermetologistcomponent/QuickStats";
import PerformanceMetrics from "@/Components/Dermetologistcomponent/PerformanceMetrics";

export default function Dermetologistdashboard() {
  // Removed artificial loading delay for better performance

  // Mock data - replace with real API calls
  const todaysSummary = {
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    completed: 12,
    scheduled: 8,
    pending: 5,
    urgent: 2
  };

  const analytics = {
    patientsTreated: 156,
    patientsGrowth: 12,
    callsMade: 89,
    callsChange: -5,
    reportsGenerated: 203,
    reportsGrowth: 18,
    appointments: 45,
    appointmentsChange: 8
  };

  const weekData = [
    { day: 'Mon', value: 12 },
    { day: 'Tue', value: 15 },
    { day: 'Wed', value: 8 },
    { day: 'Thu', value: 18 },
    { day: 'Fri', value: 14 },
    { day: 'Sat', value: 6 },
    { day: 'Sun', value: 3 }
  ];

  const recentActivities = [
    {
      type: 'consultation',
      title: 'Completed consultation with Emma Wilson',
      description: 'Acne treatment follow-up - prescribed new medication',
      time: '15 minutes ago'
    },
    {
      type: 'call',
      title: 'Phone consultation with Michael Brown',
      description: 'Discussed skin cancer screening results',
      time: '1 hour ago'
    },
    {
      type: 'report',
      title: 'Generated treatment report',
      description: 'Comprehensive skin analysis for patient #2847',
      time: '2 hours ago'
    },
    {
      type: 'appointment',
      title: 'New appointment scheduled',
      description: 'Jessica Martinez - Botox consultation',
      time: '3 hours ago'
    },
    {
      type: 'consultation',
      title: 'Completed consultation with David Lee',
      description: 'Psoriasis treatment plan updated',
      time: '4 hours ago'
    }
  ];

  const quickStats = [
    { label: 'Patient Satisfaction', value: '94%', progress: 94, trend: 3 },
    { label: 'Avg. Consultation Time', value: '23m', progress: 76, trend: -8 },
    { label: 'Follow-up Rate', value: '87%', progress: 87, trend: 5 },
    { label: 'Treatment Success', value: '91%', progress: 91, trend: 2 }
  ];

  const performanceMetrics = {
    currentPatients: 156,
    goalPatients: 200,
    rating: 4.8,
    revenue: '12,450',
    revenueGrowth: 15
  };

  return (
    <>
      <Navbar />
      <section className="bg-backgrounds min-h-screen w-full">
        <div className="py-5 px-4 md:px-6 w-full space-y-6">
          {/* Top Analytics Cards */}
          <DashboardAnalytics analytics={analytics} />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Calendar */}
            <div className="lg:col-span-3 space-y-6">
              <CalendarAndDay />
              <PerformanceMetrics metrics={performanceMetrics} />
            </div>

            {/* Middle Column - Charts and Activity */}
            <div className="lg:col-span-6 space-y-6">
              <TodaysSummary summary={todaysSummary} />
              <RecentActivity activities={recentActivities} />
            </div>

            {/* Right Column - Appointments and Stats */}
            <div className="lg:col-span-3 space-y-6">
              <AppointmentsDem />
              <QuickStats stats={quickStats} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}