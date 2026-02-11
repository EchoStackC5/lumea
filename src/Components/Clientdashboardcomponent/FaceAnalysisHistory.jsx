import { useNavigate } from "react-router";
import { Calendar, TrendingUp } from "lucide-react";
import useSWR from "swr";
import { apiFetcher } from "@/api/client";
import { format } from "date-fns";

export default function FaceAnalysisHistory() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useSWR("/users/me/history", apiFetcher);

  const handleViewReport = (report) => {
    navigate(`/ai-analyze/report/${report.userId}`, {
      state: { analysisData: report.analysis },
    });
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-6 border border-light-border">
        <p className="text-center text-gray-500">Loading analysis history...</p>
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <div className="bg-white rounded-xl p-6 border border-light-border">
        <h3 className="text-lg font-semibold text-darkest mb-4">Analysis History</h3>
        <p className="text-center text-gray-500">No analysis history yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-light-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-darkest">Analysis History</h3>
        <TrendingUp className="w-5 h-5 text-system-primary" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.slice(0, 8).map((report, index) => (
          <div
            key={report.id || index}
            // onClick={() => handleViewReport(report)}
            className="relative group cursor-pointer rounded-xl overflow-hidden border-2 border-light-border hover:border-system-primary transition-all"
          >
            <div className="aspect-square">
              <img
                src={report.imageUrl || "/placeholder-face.jpg"}
                alt={`Analysis ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <div className="flex items-center gap-1 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{format(new Date(report.createdAt), "MMM d, yyyy")}</span>
                </div>
                <p className="text-xs mt-1 font-medium">Click to view report</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.length > 8 && (
        <button
          onClick={() => navigate("/ai-analyze")}
          className="mt-4 cursor-pointer py-2 text-sm text-system-primary hover:text-button-hover font-medium transition"
        >
          {/* View All ({data.length} total) */}
          View Recent Report
        </button>
      )}
    </div>
  );
}
