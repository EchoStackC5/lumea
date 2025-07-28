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
      case 'completed':
        return 'bg-green-100 text-green-700 border border-green-200 w-[101px] ml-3';
      case 'accepted':
        return 'bg-green-100 text-green-700 border border-green-200 w-[101px] ml-3';
      case 'rejected':
        return 'bg-red-100 text-red-700 border border-red-200 w-[101px] ml-4';
      case 'pending':
        return 'bg-blue-100 text-blue-600 border border-blue-200 w-[101px] ml-4';
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
    <div className="w-[800px] h-auto max-w-full px-4 sm:px-6 lg:px-0">
  <div className="p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 mt-5">

    {/* Header */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <h1 className="text-lg font-dm-sans font-medium text-primary-dark">Appointments</h1>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:space-x-4 w-full sm:w-auto">
        <div className="relative w-full sm:w-[250px] focus-within:">
          <input
            type="text"
            placeholder="Search list"
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            className="w-full pl-4 pr-12 py-3 border-0 rounded-full bg-purple-50 text-gray-700 placeholder-gray-500 focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800">
            <Search size={16} />
          </button>
        </div>
        <Link to="/appointment-form" className="bg-primary text-white font-poppins text-sm px-5 py-3 rounded-full hover:bg-gray-800 text-center">
          Book Appointment
        </Link>
      </div>
    </div>

    {/* Responsive Table */}
    <div className="overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="bg-light-border px-6 py-4 border-b grid grid-cols-3 text-[15px] font-medium font-poppins text-secondary-text">
          <div>Dermatologist Name</div>
          <div>Appointment Date</div>
          <div>Appointment Status</div>
        </div>

        <div className="divide-y divide-gray-100">
          {paginatedAppointments.map((appointment) => (
            <div
              key={appointment.id}
              onClick={() => handleAppointmentClick(appointment)}
              className={`px-6 py-5 cursor-pointer rounded-lg transition-colors ${
                showDetail && detail?.id === appointment.id ? 'bg-purple-50' : 'hover:bg-purple-100'
              }`}
            >
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-purple-200">
                    <img
                      src={appointment.cosmetologist?.profile?.image || 'https://via.placeholder.com/150'}
                      alt={appointment.cosmetologist?.name || 'Doctor'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm sm:text-md font-medium text-primary font-inter">{appointment.cosmetologist?.name || 'Unknown Doctor'}</span>
                </div>
                <div className="text-sm text-[#6B6A6C] font-inter">
                  {format(new Date(appointment.date), 'do MMMM yyyy')}
                </div>
                <div>
                  <span className={`px-3 py-1 flex justify-center items-center rounded-full text-sm font-medium text-center ${getStatusColor(appointment.status)}`}>
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
        <div className="flex justify-between mt-4 space-x-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`rounded-full w-[100px] py-2 border border-light-border hover:text-white hover:bg-black ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`bg-primary rounded-full w-[100px] py-2 text-white hover:bg-black ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default AppointmentTable;
