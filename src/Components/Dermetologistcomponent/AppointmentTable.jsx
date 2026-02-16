import Loaders from "../Loaders";
import { useState, useEffect } from "react";
import cheekbone from "../../assets/images/cheekbone.jpg";
import format from "date-fns/format";
import { apiFetcher } from "@/api/client";
import useSWR, { mutate } from "swr";
import { Badge } from "@/Components/ui/badge";
import SearchBar from "@/Components/ui/SearchBar";
import DataTable from "@/Components/ui/DataTable";
import { Check, XCircle } from "lucide-react";

export default function AppointmentTable({
  setDetail,
  setShowDetail,
  showDetail,
  setReload,
  reload,
  onStatusUpdate,
  updatingId,
}) {
  const { data, isLoading, error } = useSWR("/appointments/cosmetologist", apiFetcher);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 8;
  const [startIndex, setstartindex] = useState(0);
  const [endIndex, setendIndex] = useState(limit);
  const [subArray, setsubArray] = useState([]);
  const [reassign, setReassign] = useState(false);

  useEffect(() => {
    if (reload) {
      mutate("/appointments/cosmetologist");
      setReload(false);
      setReassign(true);
    }
  }, [reload, setReload]);

  const getStatusVariant = (status) => {
    const statusLower = status?.toLowerCase();
    if (statusLower === "accepted") return "accepted";
    if (statusLower === "rejected") return "rejected";
    return "pending";
  };

  // Logic for the search bar
  function filterApp(value) {
    let filteredItem;
    filteredItem = data.filter((app) => {
      let status = value === app.status;
      let skinType = value === app.skinType;
      let name = value === app.user.name;

      if (status || skinType || name) {
        return app;
      }
    });

    if (filteredItem.length > 0) {
      setsubArray(filteredItem);
      setstartindex(0);
      setendIndex(limit);
    }
  }

  useEffect(() => {
    if (!isLoading || reassign) {
      if (data?.length >= limit) {
        const items = data.slice(startIndex, endIndex);
        setsubArray(items);
      } else {
        setsubArray(data);
      }
      setReassign(false);
    }
  }, [isLoading, reassign, data, startIndex, endIndex, limit]);

  function showNext() {
    const remaining = data?.length - endIndex;

    if (remaining >= limit) {
      const newStartIndex = endIndex;
      const newEndIndex = endIndex + limit;

      const items = data.slice(newStartIndex, newEndIndex);
      setsubArray(items);
      setstartindex(newStartIndex);
      setendIndex(newEndIndex);
    } else {
      if (remaining > 0) {
        const newStartIndex = endIndex;
        const newEndIndex = endIndex + remaining;

        const items = data.slice(newStartIndex, newEndIndex);
        setsubArray(items);
        setstartindex(newStartIndex);
        setendIndex(newEndIndex);
      }
    }
  }

  function showPrevious() {
    if (startIndex === 0) {
      return;
    }

    const remaining = endIndex - startIndex;
    let newStartIndex = startIndex - limit;
    let newEndIndex = endIndex - remaining;

    const items = data.slice(newStartIndex, newEndIndex);
    setsubArray(items);
    setstartindex(newStartIndex);
    setendIndex(newEndIndex);
  }

  const handleRowClick = (row) => {
    setDetail(row);
    setShowDetail(true);
  };

  const handleStatusUpdate = async (appointmentId, newStatus, event) => {
    // Prevent row click when clicking action buttons
    event.stopPropagation();
    
    if (onStatusUpdate) {
      await onStatusUpdate(appointmentId, newStatus);
    }
  };

  // Define table columns
  const columns = [
    {
      header: "Client Name",
      accessorKey: "user.name",
      cell: (row) => (
        <div className="flex items-center gap-3">
          {row?.user ? (
            <img
              src={row.user?.profile?.image || cheekbone}
              alt="userProfile"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
          )}
          <span className="text-sm md:text-base font-inter text-primary-dark">
            {row.user.name}
          </span>
        </div>
      ),
    },
    {
      header: "Skin Type",
      accessorKey: "skinType",
      cell: (row) => (
        <span className="text-dashboar-secondary text-sm md:text-base font-inter">
          {row.skinType}
        </span>
      ),
    },
    {
      header: "Appointment Date",
      accessorKey: "date",
      cell: (row) => (
        <span className="text-dashboar-secondary text-xs md:text-sm font-inter">
          {format(new Date(row.date), "do MMM yyyy, h:mm a")}
        </span>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      align: "center",
      cell: (row) => (
        <div className="flex justify-center">
          <Badge variant={getStatusVariant(row.status)} className="min-w-[80px]">
            {row.status}
          </Badge>
        </div>
      ),
    },
    {
      header: "Actions",
      accessorKey: "actions",
      align: "center",
      cell: (row) => {
        const isPending = row.status?.toLowerCase() === "pending";
        const isUpdating = updatingId === row.id;
        const isDisabled = !isPending || isUpdating;

        return (
          <div className="flex gap-2 justify-center">
            <button
              onClick={(e) => !isDisabled && handleStatusUpdate(row.id, "accepted", e)}
              disabled={isDisabled}
              className={`p-2 rounded-full transition ${
                isDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
              }`}
              title={isPending ? "Accept" : "Already processed"}
            >
              <Check size={14} />
            </button>
            <button
              onClick={(e) => !isDisabled && handleStatusUpdate(row.id, "rejected", e)}
              disabled={isDisabled}
              className={`p-2 rounded-full transition ${
                isDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700 cursor-pointer"
              }`}
              title={isPending ? "Reject" : "Already processed"}
            >
              <XCircle size={14} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <section className=" w-full bg-white rounded-lg h-full">
      {/* Show loader while fetching */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <Loaders />
        </div>
      )}

      {/* Show error message if fetch fails */}
      {error && (
        <div className="flex justify-center items-center h-64 text-red-600 text-lg font-medium">
          Failed to load appointments. Please try again.
        </div>
      )}

      <div
        style={{ display: isLoading ? "none" : "flex" }}
        className="px-3 md:px-5 pt-5 pb-3 justify-between flex flex-col sm:flex-row gap-4 items-start sm:items-center"
      >
        <h1 className="text-base md:text-lg font-medium font-dm-sans text-primary-dark">
          Appointments & Client List
        </h1>
        <SearchBar
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          onSearch={filterApp}
          placeholder="Search list"
          className="w-full sm:w-[250px]"
        />
      </div>

      <div
        style={{ display: isLoading ? "none" : "block" }}
        className="px-3 md:px-4 pb-4 w-full overflow-x-auto"
      >
        <DataTable
          columns={columns}
          data={subArray}
          onRowClick={handleRowClick}
          emptyMessage="No Available Appointments"
        />
      </div>

      {/* Pagination - Only show if more than 8 appointments */}
      {!isLoading && data?.length > limit && (
        <div className="flex px-3 md:px-8 py-4 justify-between gap-2">
          <button
            className="flex-1 max-w-[120px] py-2 text-sm rounded-full border border-light-border hover:bg-[#1A151D] hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              showPrevious();
            }}
            disabled={startIndex === 0}
          >
            Previous
          </button>
          <button
            className="flex-1 max-w-[120px] py-2 text-sm rounded-full border bg-system-primary hover:bg-[#1A151D] text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              showNext();
            }}
            disabled={endIndex >= (data?.length || 0)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
