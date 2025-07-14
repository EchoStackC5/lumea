import React, { useState } from 'react';
import { Search, Calendar, Clock, User } from 'lucide-react';

// Import your images here
import Face from "../../assets/images/u.png"
// import Doctor2 from "../assets/2.png"
// import Doctor3 from "../assets/3.png"

const DermatologistAppointments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: 'Dr. Naa Mensima',
      date: '15th July 2025',
      time: '09:30AM - 10:00 AM',
      status: 'Completed',
      avatar: Face
    },
    {
      id: 2,
      doctorName: 'Dr. Naa Mensima',
      date: '15th July 2025',
      time: '09:30AM - 10:00 AM',
      status: 'Rejected',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      doctorName: 'Dr. Naa Mensima',
      date: '15th July 2025',
      time: '09:30AM - 10:00 AM',
      status: 'In progress',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border border-red-200';
      case 'In progress':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  const filteredAppointments = appointments.filter(appointment =>
    appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white border-1 rounded-2xl  shadow-md mt-5 w-[686px] h-[444px] ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="search list"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-80 pl-4 pr-12 py-3 border-0 rounded-full focus:outline-none bg-purple-50 text-gray-700 placeholder-gray-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Search size={16} />
            </button>
          </div>
          
          <button className="bg-black text-white text-xs px-8 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <div className=" overflow-hidden ">
        {/* Table Header */}
        <div className="bg-purple-100 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-3 gap-4">
            <div className="font-semibold text-gray-900 text-sm">Dermatologist Name</div>
            <div className="font-semibold text-gray-900 text-sm">Appointment Date</div>
            <div className="font-semibold text-gray-900 text-sm">Appointment Status</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="px-6 py-5 hover:bg-gray-25 transition-colors">
              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Doctor Name with Avatar */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-200">
                    <img 
                      src={appointment.avatar} 
                      alt={appointment.doctorName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '';
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{appointment.doctorName}</span>
                </div>

                {/* Appointment Date and Time */}
                <div className="text-sm text-gray-700">
                  {appointment.date}, {appointment.time}
                </div>

                {/* Status Badge */}
                <div>
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredAppointments.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No appointments found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default DermatologistAppointments;