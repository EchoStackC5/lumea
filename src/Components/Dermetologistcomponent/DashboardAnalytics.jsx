import { TrendingUp, Users, Phone, FileText, Calendar } from "lucide-react";

export default function DashboardAnalytics({ analytics }) {
  const stats = [
    {
      icon: Users,
      label: "Patients Treated",
      value: analytics.patientsTreated,
      change: `+${analytics.patientsGrowth}%`,
      positive: true,
      color: "bg-system-primary"
    },
    {
      icon: Phone,
      label: "Calls Made",
      value: analytics.callsMade,
      change: `${analytics.callsChange}%`,
      positive: analytics.callsChange > 0,
      color: "bg-darkest"
    },
    {
      icon: FileText,
      label: "Reports Generated",
      value: analytics.reportsGenerated,
      change: `+${analytics.reportsGrowth}%`,
      positive: true,
      color: "bg-system-primary"
    },
    {
      icon: Calendar,
      label: "Appointments",
      value: analytics.appointments,
      change: `${analytics.appointmentsChange}%`,
      positive: analytics.appointmentsChange > 0,
      color: "bg-darkest"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div 
            key={index}
            className="bg-white rounded-xl p-4 border border-light-border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-darkest mb-1">{stat.value}</p>
              <p className="text-sm text-dashboar-secondary">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
