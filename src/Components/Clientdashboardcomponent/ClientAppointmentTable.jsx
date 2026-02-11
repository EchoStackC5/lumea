"use client";
import { useState } from "react";
import useSWR from "swr";
import { Link } from "react-router";
import { apiFetcher } from "@/api/client";
import { format } from "date-fns";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import SearchBar from "../ui/SearchBar";
import DataTable from "../ui/DataTable";

const AppointmentTable = ({ setDetail, setShowDetail }) => {
  const { isLoading, error, data } = useSWR("/appointments", apiFetcher);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  const getStatusVariant = (status) => {
    const statusLower = status?.toLowerCase();
    switch (statusLower) {
      case "completed":
      case "accepted":
        return "accepted";
      case "rejected":
        return "rejected";
      case "pending":
      case "in progress":
        return "pending";
      default:
        return "default";
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

  const appointments = data || [];

  // Filter by search term
  const filteredAppointments = appointments.filter(
    (appointment) =>
      (appointment.cosmetologist?.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * limit,
    currentPage * limit
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

  // Define table columns
  const columns = [
    {
      header: "Dermatologist Name",
      accessorKey: "cosmetologist.name",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={row.cosmetologist?.profile?.image} />
            <AvatarFallback>
              {row.cosmetologist?.name?.charAt(0) || "D"}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm md:text-base font-inter">
            {row.cosmetologist?.name}
          </span>
        </div>
      ),
    },
    {
      header: "Appointment Date",
      accessorKey: "date",
      cell: (row) => (
        <span className="text-dashboar-secondary text-sm md:text-base font-inter">
          {format(new Date(row.date), "do MMMM yyyy")}
        </span>
      ),
    },
    {
      header: "Appointment Status",
      accessorKey: "status",
      align: "center",
      cell: (row) => (
        <div className="flex justify-center">
          <Badge variant={getStatusVariant(row.status)} className="min-w-[90px]">
            {row.status}
          </Badge>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 w-full h-[529px] flex flex-col">
      <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 mt-5 flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-base font-dm-sans font-semibold text-primary-dark">
            Appointments
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:space-x-4 w-full sm:w-auto">
            <SearchBar
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search list"
              className="w-full sm:w-[250px]"
            />
            <Link
              to="/appointment-form"
              className="bg-primary text-white font-poppins text-xs px-4 py-2 rounded-full hover:bg-gray-800 text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={paginatedAppointments}
          onRowClick={handleAppointmentClick}
          emptyMessage="No appointments found"
        />

        {/* Pagination - Only show if more than 8 appointments */}
        {filteredAppointments.length > limit && (
          <div className="flex px-8 py-4 justify-between mt-4">
            <button
              className="max-w-md w-[100px] py-2 rounded-full border border-light-border hover:bg-[#1A151D] hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="max-w-md w-[100px] py-2 rounded-full border bg-system-primary hover:bg-[#1A151D] text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage * limit >= filteredAppointments.length}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentTable;
