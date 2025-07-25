import React from 'react';
import { X } from 'lucide-react';
import Face from "../../assets/images/u.png";
import { format } from 'date-fns';

const AppointmentDetailsCard = ({ detail, visible, setShowDetail }) => {
  if (!visible) return null;

  const getStatusStyles = (status) =>{
    switch(status.toLowerCase()) {
      case "accepted":
        return "bg-green-100 text-green-700 border-green-200"
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200"
      case "completed":
        return "bg-green-100 text-green-700 border-green-200"
      case "pending":
        return "bg-blue-100 text-blue-700 border-blue-200"
    }
  };

  return (
    <div className="bg-white rounded-2xl border w-[296px] h-[480px] p-4 relative flex flex-col justify-between mt-5">
      <button
        onClick={() => setShowDetail(false)}
        className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800"
      >
        <X size={20} />
      </button>

      <div className="text-center flex flex-col items-center flex-1 justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Appointment Details</h2>

          <div className="w-45 h-45 rounded-full overflow-hidden border-2  mx-auto mb-3">
            <img 
              src={detail.avatar || Face}
              alt="Doctor Avatar" 
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-1">{detail.doctorName}</h3>

          <p className="text-gray-600 text-sm pt-3">
            {format(new Date(detail.date), "MMMM d,yyyy")} – {detail.time}
          </p>

          <div className="mt-5">
            <span className={`inline-flex justify-center items-center w-[244px] h-[34px] text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200 rounded-full ${getStatusStyles(detail.status)}`}>
              {detail.status}
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-2 w-full px-4 pb-10">
          <button className="flex-1 bg-black text-[10px] text-white h-[36px] rounded-full hover:bg-gray-800">
            View Skin Report
          </button>
          <button className="flex-1 bg-transparent text-xs text-gray-900 h-[36px] rounded-full border border-gray-300 hover:bg-gray-50">
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsCard;
