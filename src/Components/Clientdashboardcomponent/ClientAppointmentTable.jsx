import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Face from "../../assets/images/u.png";
import AppointmentDetailsCard from '../../Components/Clientdashboardcomponent/AppointmentDetails'; 

const DermatologistAppointments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [appointments] = useState([
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
        return 'bg-green-100 text-green-700 border border-green-200 w-[101px] ml-3';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border border-red-200 w-[101px] ml-4';
      case 'In progress':
        return 'bg-blue-100 text-blue-700 border border-blue-200 w-[101px] ml-4';
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
    <div className="flex space-x-6">
      {/* Appointments Table */}
      <div className="max-w-6xl p-6 bg-white rounded-2xl shadow-md w-[686px] h-[444px] mt-5">
        <div className="flex items-center justify-between mb-6 space-x-3">
          <h1 className="text-[16px] font-bold text-gray-900">Appointments</h1>
          
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
            
            <button className="bg-black text-white text-[8px] px-7 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
              Book Appointment
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="bg-purple-100 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold text-gray-900 text-sm">Dermatologist Name</div>
              <div className="font-semibold text-gray-900 text-sm">Appointment Date</div>
              <div className="font-semibold text-gray-900 text-sm">Appointment Status</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className={`px-6 py-5 cursor-pointer transition-colors rounded-lg ${
                  selectedAppointment?.id === appointment.id
                    ? 'bg-purple-50'
                    : 'hover:bg-purple-100'
                }`}
                onMouseEnter={() => setSelectedAppointment(appointment)}
                onClick={() => setSelectedAppointment(appointment)}
              >
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-200">
                      <img
                        src={appointment.avatar}
                        alt={appointment.doctorName}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = ''; }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{appointment.doctorName}</span>
                  </div>

                  <div className="text-[14px] text-gray-700">
                    {appointment.date}, {appointment.time}
                  </div>

                  <div>
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAppointments.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No appointments found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Appointment Details */}
      <div className="w-[296px] h-[444px]">
        {selectedAppointment ? (
          <AppointmentDetailsCard appointment={selectedAppointment} />
        ) : (
          <div className="w-full h-full flex items-center justify-center border rounded-2xl bg-white text-gray-400">
            Hover or click a doctor to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default DermatologistAppointments;
