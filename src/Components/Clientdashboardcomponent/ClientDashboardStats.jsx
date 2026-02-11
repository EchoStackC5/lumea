import { Calendar, FileText, Activity, TrendingUp } from "lucide-react";
import useSWR from "swr";
import { apiFetcher } from "@/api/client";

export default function ClientDashboardStats() {
  const { data: appointments } = useSWR("/appointments", apiFetcher);
  const { data: analysisHistory } = useSWR("/users/me/history", apiFetcher);

  const stats = [
    {
      icon: Calendar,
      label: "Total Appointments",
      value: appointments?.length || 0,
      change: "+12%",
      positive: true,
      color: "text-purple-500 bg-purple-100",
    },
    {
      icon: FileText,
      label: "Skin Analysis",
      value: analysisHistory?.length || 0,
      change: "+8%",
      positive: true,
      color: "text-system-primary bg-system-primary/10",
    },
    {
      icon: Activity,
      label: "Pending Appointments",
      value: appointments?.filter((a) => a.status === "pending").length || 0,
      change: "-5%",
      positive: false,
      color: "text-orange-500 bg-orange-100",
    },
    {
      icon: TrendingUp,
      label: "Completed Sessions",
      value:
        appointments?.filter((a) => a.status === "completed" || a.status === "accepted")
          .length || 0,
      change: "+15%",
      positive: true,
      color: "bg-green-100 text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-xl p-5 border border-light-border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                <Icon className="w-6 h-6 " />
              </div>
              <div
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-darkest mb-1">{stat.value}</p>
              <p className="text-sm text-dashboar-secondary">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
