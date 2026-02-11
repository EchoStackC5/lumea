import Loaders from "../Loaders";
import { useState, useEffect } from "react";
import cheekbone from "../../assets/images/cheekbone.jpg";
import format from "date-fns/format";
import { apiFetcher } from "@/api/client";
import useSWR, { mutate } from "swr";
import { Badge } from "@/Components/ui/badge";
import SearchBar from "@/Components/ui/SearchBar";
import DataTable from "@/Components/ui/DataTable";

export default function AppointmentTable({ setDetail, setShowDetail, showDetail, setReload, reload }) {
  const { data, isLoading, error } = useSWR("/appointments/cosmetologist", apiFetcher);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 6;
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
  ];

  return (
    <section
      style={{ width: showDetail ? "53%" : "68%" }}
      className="h-auto w-full  bg-white rounded-lg mx-auto "
    >
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
        className="mt-5 px-5 justify-between flex flex-col sm:flex-row sm:justify-between gap-4 items-start sm:items-center"
      >
        <h1 className="text-lg font-medium font-dm-sans text-primary-dark">
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
        className="p-4 max-w-5xl mx-auto"
      >
        <DataTable
          columns={columns}
          data={subArray}
          onRowClick={handleRowClick}
          emptyMessage="No Available Appointments"
        />
      </div>

      
    </section>
  );
}
