import React, { useState } from "react";
import cheekbone from "../../assets/images/cheekbone.jpg";
import { apiFetcher } from "@/api/client"; // already uses axios + token
import useSWR from "swr";

const statusColors = {
  Accepted: "bg-[#079C4326] text-[#079C43]",
  Rejected: "bg-[#9C071D26] text-[#9C071D]",
  Pending: "bg-[#1D10AC26] text-[#1D10AC]",
};

export default function AppointmentTable({ setDetail, setShowDetail, showDetail }) {
  const { data: allAppointments, isLoading: loadingAll, error: errorAll } = useSWR(
    "/cosmetologist/appointments",
    apiFetcher
  );

  const { data: pendingAppointments, isLoading: loadingPending, error: errorPending } = useSWR(
    "/appointments/cosmetologist?status=pending",
    apiFetcher
  );

  const limit = 6;
  const [startIndex, setStartIndex] = useState(0);
  const paginatedAppointments = allAppointments?.slice(startIndex, startIndex + limit) || [];

  const showNext = () => {
    if (allAppointments && startIndex + limit < allAppointments.length) {
      setStartIndex(startIndex + limit);
    }
  };

  const showPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - limit);
    }
  };

  return (
    <section style={{ width: showDetail ? "53%" : "75%" }} className="h-auto bg-white rounded-lg">
      <div className="mt-5 px-5">
        <h1 className="font-bold">Appointments & Client List</h1>
      </div>

      {/* Pending Requests */}
      <div className="mb-4 px-5">
        <h2 className="font-semibold mb-2">Appointments Requests</h2>
        {loadingPending ? (
          <p>Loading...</p>
        ) : errorPending ? (
          <p className="text-red-500">{errorPending.message || "Error loading pending requests"}</p>
        ) : pendingAppointments && pendingAppointments.length > 0 ? (
          <ul>
            {pendingAppointments.map((app) => (
              <li key={app._id || app.id} className="flex items-center gap-2 mb-2">
                <span>{app.date} {app.time}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[app.status] || ""}`}>
                  {app.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No pending requests</p>
        )}
      </div>

      {/* All Appointments Table */}
      <div className="p-4 max-w-5xl mx-auto">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
              <th className="py-2 px-2 rounded-l-md">Client Name</th>
              <th className="py-2 px-2">Skin Type</th>
              <th className="py-2 px-2">Appointment Date</th>
              <th className="py-2 px-2 rounded-r-md">Status</th>
            </tr>
          </thead>
          <tbody>
            {loadingAll ? (
              <tr>
                <td colSpan={4}>Loading...</td>
              </tr>
            ) : errorAll ? (
              <tr>
                <td colSpan={4} className="text-red-500">{errorAll.message || "Error loading appointments"}</td>
              </tr>
            ) : paginatedAppointments.length > 0 ? (
              paginatedAppointments.map((app) => (
                <tr
                  key={app._id || app.id}
                  className="bg-white shadow rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setDetail(app);
                    setShowDetail(true);
                  }}
                >
                  <td className="py-2 px-4 flex items-center gap-3">
                    <img
                      src={app.image || cheekbone}
                      onError={(e) => (e.target.src = cheekbone)}
                      alt={app.clientName || app.name || "Client"}
                      className="w-14 h-10 rounded-full object-cover"
                    />
                    <span>{app.clientName || app.name}</span>
                  </td>
                  <td className="py-2 px-4 text-[#6B6A6C]">{app.skinType}</td>
                  <td className="py-2 px-4 text-[#6B6A6C] text-sm">
                    {app.date} {app.time}
                  </td>
                  <td className="py-2 px-4">
                    <span className={`px-4 py-1 rounded-full text-sm font-medium ${statusColors[app.status] || ""}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No appointments found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-4 px-5 mt-4">
        <button
          onClick={showPrevious}
          className="h-8 w-28 rounded-full border hover:bg-[#1A151D] hover:text-white transition"
        >
          Previous
        </button>
        <button
          onClick={showNext}
          className="h-8 w-28 rounded-full border hover:bg-[#1A151D] hover:text-white transition"
        >
          Next
        </button>
      </div>
    </section>
  );
}
