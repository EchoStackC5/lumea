import { TrendingUp, TrendingDown } from "lucide-react";

export default function QuickStats({ stats }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-light-border">
      <h3 className="text-lg font-semibold text-darkest mb-4">Quick Stats</h3>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-dashboar-secondary mb-1">{stat.label}</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-darkest">{stat.value}</p>
                {stat.trend && (
                  <div className={`flex items-center gap-1 text-xs font-medium ${
                    stat.trend > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend > 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{Math.abs(stat.trend)}%</span>
                  </div>
                )}
              </div>
            </div>
            {stat.progress && (
              <div className="w-24">
                <div className="h-2 bg-backgrounds rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-system-primary rounded-full transition-all"
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
                <p className="text-xs text-dashboar-secondary text-right mt-1">{stat.progress}%</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
