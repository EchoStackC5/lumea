import React, { useState } from 'react';
import { Search } from 'lucide-react';
import useSWR from 'swr';
import axios from 'axios';
import { Link } from 'react-router';
import { apiFetcher } from '@/api/client';
import { format } from 'date-fns';




const AppointmentTable = ({ setDetail, setShowDetail, showDetail, detail }) => {
  const { isLoading, error, data } = useSWR("/appointments", apiFetcher);



  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;

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

  if (isLoading) {
    return <div className="p-6 text-center">Loading appointments...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Failed to load appointments.</div>;
  }

  const appointments = data || []; // Use fetched data

  // Filter by search term
  const filteredAppointments = appointments.filter(appointment =>
    (appointment.cosmetologist?.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.status.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // Pagination
  const totalPages = Math.ceil(filteredAppointments.length / limit);
  const paginatedAppointments = filteredAppointments.slice((currentPage - 1) * limit, currentPage * limit);

  const handleAppointmentClick = (appointment) => {
    const detailData = {
      ...appointment,
      doctorName: appointment.cosmetologist?.name,
      avatar: appointment.cosmetologist?.profile?.image
    };
    setDetail(detailData);
    setShowDetail(true);
  };

  return (
    <div className="w-[686px] h-[500px]">
      <div className="p-6 bg-white rounded-2xl shadow-md mt-5">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[16px] font-bold text-gray-900">Appointments</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search list"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-80 pl-4 pr-12 py-3 border-0 rounded-full bg-purple-50 text-gray-700 placeholder-gray-500 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800">
                <Search size={16} />
              </button>
            </div>
            <Link to="/appointment-form" className="bg-black text-white text-[8px] px-7 py-3 rounded-full hover:bg-gray-800">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          <div className="bg-purple-100 px-6 py-4 border-b grid grid-cols-3 font-semibold text-sm text-gray-900">
            <div>Dermatologist Name</div>
            <div>Appointment Date</div>
            <div>Appointment Status</div>
          </div>

          <div className="divide-y divide-gray-100">
            {paginatedAppointments.map((appointment) => (
              <div
                key={appointment.id}
                onClick={() => handleAppointmentClick(appointment)}
                className={`px-6 py-5 cursor-pointer rounded-lg transition-colors ${showDetail && detail?.id === appointment.id ? 'bg-purple-50' : 'hover:bg-purple-100'
                  }`}
              >
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-200">
                      <img
                        src={appointment.cosmetologist?.profile?.image || 'https://via.placeholder.com/150'}
                        alt={appointment.cosmetologist?.name || "Doctor"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{appointment.cosmetologist?.name || "Unknown Doctor"}</span>
                  </div>
                  <div className="text-[14px] text-gray-700">{format(new Date(appointment.date), "MMMM d,yyyy")}</div>
                  <div>
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {paginatedAppointments.length === 0 && (
              <div className="text-center py-8 text-gray-500">No appointments found.</div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-3 space-x-5">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`bg-purple-100 rounded-2xl w-20 h-8 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`bg-purple-100 rounded-2xl w-20 h-8 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
