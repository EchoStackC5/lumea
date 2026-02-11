import { Clock, CheckCircle2, AlertCircle, Calendar } from "lucide-react";

export default function TodaysSummary({ summary }) {
  return (
    <div className="bg-gradient-to-br from-system-primary to-button-hover rounded-xl p-5 text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Today's Summary</h3>
          <p className="text-sm text-white/80 mt-1">{summary.date}</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <Clock className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-green-300" />
            <p className="text-sm text-white/80">Completed</p>
          </div>
          <p className="text-3xl font-bold">{summary.completed}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-300" />
            <p className="text-sm text-white/80">Scheduled</p>
          </div>
          <p className="text-3xl font-bold">{summary.scheduled}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-yellow-300" />
            <p className="text-sm text-white/80">Pending</p>
          </div>
          <p className="text-3xl font-bold">{summary.pending}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-300" />
            <p className="text-sm text-white/80">Urgent</p>
          </div>
          <p className="text-3xl font-bold">{summary.urgent}</p>
        </div>
      </div>
    </div>
  );
}
