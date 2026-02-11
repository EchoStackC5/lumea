import { Clock, CheckCircle, Phone, FileText, Calendar } from "lucide-react";

export default function RecentActivity({ activities }) {
  const getIcon = (type) => {
    switch (type) {
      case 'consultation':
        return CheckCircle;
      case 'call':
        return Phone;
      case 'report':
        return FileText;
      case 'appointment':
        return Calendar;
      default:
        return Clock;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'consultation':
        return 'bg-green-100 text-green-700';
      case 'call':
        return 'bg-blue-100 text-blue-700';
      case 'report':
        return 'bg-purple-100 text-system-primary';
      case 'appointment':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-light-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-darkest">Recent Activity</h3>
        <button className="text-sm text-system-primary hover:underline">View All</button>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {activities.map((activity, index) => {
          const Icon = getIcon(activity.type);
          return (
            <div 
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-backgrounds transition-colors"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getColor(activity.type)}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-darkest">{activity.title}</p>
                <p className="text-xs text-dashboar-secondary mt-1">{activity.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-3 h-3 text-dashboar-secondary" />
                  <span className="text-xs text-dashboar-secondary">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
