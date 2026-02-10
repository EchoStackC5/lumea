"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import useSWR from "swr";

import { Link } from "react-router";
import { apiFetcher } from "@/api/client";
import { format } from "date-fns";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
("use client");
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const AppointmentTable = ({ setDetail, setShowDetail,  }) => {
  const { isLoading, error, data } = useSWR("/appointments", apiFetcher);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 border border-green-200 w-[101px] ml-3";
      case "accepted":
        return "bg-green-100 text-green-700 border border-green-200 w-[101px] ml-3";
      case "rejected":
        return "bg-red-100 text-red-700 border border-red-200 w-[101px] ml-4";
      case "pending":
        return "bg-blue-100 text-blue-600 border border-blue-200 ";
      case "In progress":
        return "bg-blue-100 text-blue-700 border border-blue-200 w-[101px] ml-4";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  if (isLoading) {
    return <div className="p-6 text-center">Loading appointments...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        Failed to load appointments.
      </div>
    );
  }

  const appointments = data || []; // Use fetched data

  // Filter by search term
  const filteredAppointments = appointments.filter(
    (appointment) =>
      (appointment.cosmetologist?.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.status.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination
  const totalPages = Math.ceil(filteredAppointments.length / limit);
  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * limit,
    currentPage * limit,
  );

  const handleAppointmentClick = (appointment) => {
    const detailData = {
      ...appointment,
      doctorName: appointment.cosmetologist?.name,
      avatar: appointment.cosmetologist?.profile?.image,
    };
    setDetail(detailData);
    setShowDetail(true);
  };

  return (
    <div className="flex-1 w-full h-[529px] flex flex-col">
      <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 mt-5 flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-base font-dm-sans font-semibold text-primary-dark">
            Appointments
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:space-x-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-[250px] focus-within:">
              <input
                type="text"
                placeholder="Search list"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-4 pr-12 py-2 border-0 rounded-full bg-purple-50 text-gray-700 placeholder-gray-500 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800">
                <Search size={12} />
              </button>
            </div>
            <Link
              to="/appointment-form"
              className="bg-primary text-white font-poppins text-xs px-4 py-2 rounded-full hover:bg-gray-800 text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Responsive Table */}
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Dermatologist Name</TableHead>
              <TableHead>Appointment Date</TableHead>
              <TableHead>Appointment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedAppointments.map((appointment) => (
              <TableRow 
                key={appointment.id} 
                className="hover:bg-purple-100 cursor-pointer" 
                onClick={() => handleAppointmentClick(appointment)}
              >
                <TableCell className="font-medium">
                  <div className="flex  items-center gap-2">
                    <Avatar>
                      <AvatarImage src={appointment.cosmetologist?.profile?.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {appointment.cosmetologist?.name}
                  </div>
                </TableCell>
                <TableCell>
                    {format(new Date(appointment.date), "do MMMM yyyy")}
                </TableCell>
                <TableCell>
                    <div className={`text-center rounded-full items-center px-3 w-fit py-1 ${getStatusColor(appointment.status)}`}>{appointment.status}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AppointmentTable;
