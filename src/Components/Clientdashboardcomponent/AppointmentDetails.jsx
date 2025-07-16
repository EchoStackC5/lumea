import React, { useState } from 'react';
import { X } from 'lucide-react';
import Face from "../../assets/images/u.png";

const AppointmentDetailsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeCard = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
        >
          Show Appointment Details
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border w-[296px] h-[480px] p-4 relative flex flex-col justify-between mt-5">
      
      {/* Close Button */}
      <button
        onClick={closeCard}
        className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
      >
        <X size={20} />
      </button>

      {/* Card Content */}
      <div className="text-center flex flex-col items-center flex-1 justify-between">
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Appointment Details</h2>

          {/* Smaller Doctor Avatar */}
          <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-orange-300 mx-auto mb-3">
            <img 
              src={Face} 
              alt="Doctor Avatar" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor Name */}
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Naa Mensima</h3>

          {/* Appointment Date and Time */}
          <p className="text-gray-600 text-sm pt-3">
            July 10, 2025 – 10:00 AM - 11:00 AM
          </p>

          {/* Status Badge */}
          <div className="mt-5">
            <span className="inline-flex justify-center items-center w-[244px] h-[34px] text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200 rounded-full">
              In progress
            </span>
          </div>
        </div>

        {/* Action Buttons - FLEXED SIDE BY SIDE */}
        <div className="flex flex-row gap-2 w-full px-4 ">
          <button className="flex-1 bg-black text-[10px] text-white h-[36px] rounded-full  hover:bg-gray-800 transition-colors font-medium">
            View Skin Report
          </button>
          <button className="flex-1 bg-transparent text-xs text-gray-900 h-[36px] rounded-full border border-gray-300 hover:bg-gray-50 transition-colors font-medium">
            Reschedule
          </button>
        </div>

      </div>
    </div>
  );
};

export default AppointmentDetailsCard;
