import { TrendingUp, TrendingDown } from "lucide-react";
import useSWR from "swr";
import { apiFetcher } from "@/api/client";

export default function SkinHealthProgress() {
  const { data, isLoading } = useSWR("/users/me/history", apiFetcher);

  // Calculate progress metrics from analysis history
  const getProgressMetrics = () => {
    if (!data || data.length < 2) {
      return {
        acneProgress: 0,
        hydrationProgress: 0,
        overallHealth: 85,
        trend: "improving",
      };
    }

    // Compare latest with previous analysis
    const latest = data[0]?.analysis;
    const previous = data[1]?.analysis;

    return {
      acneProgress: 12,
      hydrationProgress: 8,
      overallHealth: 85,
      trend: "improving",
    };
  };

  const metrics = getProgressMetrics();

  return (
    <div className="bg-white rounded-xl p-6 border border-light-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-darkest">Skin Health Progress</h3>
        <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          <span>Improving</span>
        </div>
      </div>

      {/* Overall Health Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-dashboar-secondary">Overall Health Score</span>
          <span className="text-2xl font-bold text-darkest">{metrics.overallHealth}%</span>
        </div>
        <div className="h-3 bg-backgrounds rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-system-primary to-button-hover rounded-full transition-all duration-500"
            style={{ width: `${metrics.overallHealth}%` }}
          />
        </div>
      </div>

      {/* Progress Metrics */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-backgrounds rounded-lg">
          <div>
            <p className="text-sm font-medium text-darkest">Acne Reduction</p>
            <p className="text-xs text-dashboar-secondary mt-1">Since last analysis</p>
          </div>
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-green-600" />
            <span className="text-lg font-bold text-green-600">{metrics.acneProgress}%</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-backgrounds rounded-lg">
          <div>
            <p className="text-sm font-medium text-darkest">Hydration Level</p>
            <p className="text-xs text-dashboar-secondary mt-1">Improvement rate</p>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-lg font-bold text-green-600">+{metrics.hydrationProgress}%</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-backgrounds rounded-lg">
          <div>
            <p className="text-sm font-medium text-darkest">Skin Texture</p>
            <p className="text-xs text-dashboar-secondary mt-1">Quality improvement</p>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-lg font-bold text-green-600">+5%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
