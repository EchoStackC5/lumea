export default function WeeklyOverview({ weekData }) {
  const maxValue = Math.max(...weekData.map(d => d.value));

  return (
    <div className="bg-white rounded-xl p-5 border border-light-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-darkest">Weekly Overview</h3>
          <p className="text-sm text-dashboar-secondary">Patient consultations this week</p>
        </div>
        <div className="bg-system-primary text-white px-4 py-2 rounded-full text-sm font-medium">
          {weekData.reduce((sum, day) => sum + day.value, 0)} Total
        </div>
      </div>

      <div className="flex items-end justify-between h-48 gap-3">
        {weekData.map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-backgrounds rounded-lg h-full flex items-end overflow-hidden relative group">
              <div
                className={`w-full rounded-lg transition-all duration-500 ${
                  day.value >= maxValue * 0.8 ? 'bg-system-primary' : 'bg-darkest'
                }`}
                style={{ height: `${(day.value / maxValue) * 100}%` }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold text-sm">{day.value}</span>
                </div>
              </div>
            </div>
            <span className="text-xs font-medium text-dashboar-secondary">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
