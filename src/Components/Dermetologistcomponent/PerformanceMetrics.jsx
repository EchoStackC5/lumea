import { Target, Award, Star, TrendingUp } from "lucide-react";

export default function PerformanceMetrics({ metrics }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-light-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-darkest">Performance</h3>
        <Award className="w-5 h-5 text-system-primary" />
      </div>

      <div className="space-y-4">
        {/* Monthly Goal */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-system-primary" />
              <span className="text-sm text-dashboar-secondary">Monthly Goal</span>
            </div>
            <span className="text-sm font-semibold text-darkest">
              {metrics.currentPatients}/{metrics.goalPatients}
            </span>
          </div>
          <div className="h-3 bg-backgrounds rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-system-primary to-button-hover rounded-full transition-all duration-500"
              style={{ width: `${(metrics.currentPatients / metrics.goalPatients) * 100}%` }}
            />
          </div>
          <p className="text-xs text-dashboar-secondary mt-1">
            {Math.round((metrics.currentPatients / metrics.goalPatients) * 100)}% completed
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between p-3 bg-backgrounds rounded-lg">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-dashboar-secondary">Average Rating</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-darkest">{metrics.rating}</span>
            <span className="text-sm text-dashboar-secondary">/5.0</span>
          </div>
        </div>

        {/* Revenue */}
        <div className="flex items-center justify-between p-3 bg-backgrounds rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-dashboar-secondary">Monthly Revenue</span>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-darkest">${metrics.revenue}</p>
            <p className="text-xs text-green-600">+{metrics.revenueGrowth}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
