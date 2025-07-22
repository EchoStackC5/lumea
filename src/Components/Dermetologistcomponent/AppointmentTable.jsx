import Loaders from "../Loaders";
import { useState, useEffect } from "react";
import cheekbone from "../../assets/images/cheekbone.jpg"
import format from "date-fns/format";
import { Search } from "lucide-react";
import { apiFetcher } from "@/api/client";
import useSWR from "swr";

const appointmentstable = [
  {
    id: 1,
    image: "/cheekbone/.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM-10:00AM",
    status: "Accepted",
    gender: 'Female',
    description: 'I am currently dealing with acne and hyperpigmentation'
  },
  {
    id: 2,
    image: "/cheekbone/2.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00AM",
    status: "Rejected",
    gender: 'Male',
    description: 'I am currently dealing with acne and hyperpigmentation'
  },

];



export default function AppointmentTable({ setDetail, setShowDetail, showDetail }) {
  const { data, isLoading, error } = useSWR("/appointments/cosmetologist", apiFetcher)
console.log("data", data)



  const statusColors = {
    Accepted: "bg-[#079C4326] text-[#079C43]",
    Rejected: "bg-[#9C071D26] text-[#9C071D]",
    Pending: "bg-[#1D10AC26] text-[#1D10AC]",
  };

  // const [items, setItems] = useState(6);
  const limit = 6;
  const [startIndex, setstartindex] = useState(0);
  const [endIndex, setendIndex] = useState(limit);
  const [subArray, setsubArray] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      if (data?.length >= limit) {

        const items = data.slice(startIndex, endIndex)
        setsubArray(items);
      }
      else {
        setsubArray(data)
      }
    }

  }, [isLoading]);

  function showNext() {
    const remaining = data?.length - endIndex;

    if (remaining >= limit) {
      const newStartIndex = endIndex
      const newEndIndex = endIndex + limit;

      const items = data.slice(newStartIndex, newEndIndex)
      setsubArray(items);
      setstartindex(newStartIndex)
      setendIndex(newEndIndex)
    }
    else {
      if (remaining > 0) {
        const newStartIndex = endIndex
        const newEndIndex = endIndex + remaining;

        const items = data.slice(newStartIndex, newEndIndex)
        setsubArray(items);
        setstartindex(newStartIndex)
        setendIndex(newEndIndex)
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

    const items = data.slice(newStartIndex, newEndIndex)
    setsubArray(items);
    setstartindex(newStartIndex)
    setendIndex(newEndIndex)
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const formattedDate = format(new Date(app.date), "dd MMM yyyy, h:mm a");


  return (
    <section style={{ width: showDetail ? '53%' : '75%' }} className="h-auto w-[686px] bg-white rounded-lg">
      <div className="mt-5 px-5 flex justify-between items-center">
        <h1 className="font-bold text-xl">Appointments & Client List</h1>
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
      </div>
      <div className="p-4 max-w-5xl mx-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-light-border text-left text-secondary-text text-lg font-semibold h-16">
              <th className="py-2 w-[30%] px-2 rounded-l-md">Client Name</th>
              <th className="py-2 w-[15%] px-2">Skin Type</th>
              <th className="py-2 w-[30%] px-2">Appointment Date</th>
              <th className="py-2 w-[20%] px-2 rounded-r-md">Appointment Status</th>
            </tr>
          </thead>
          <tbody className="">
            {subArray?.map((app) => (
              <tr key={app.id} className="border-b border-gray-200 hover:bg-backgrounds cursor-pointer"
                onClick={() => { setDetail(app); setShowDetail(true) }}
              >
                <td className="py-2 px-0 flex items-center gap-1 text-lg">
                  {app?.user ? (
                    <img
                      src={data?.profile?.image || cheekbone}
                      alt="userProfile"
                      className="w-14 h-14 mr-1 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 mr-1 rounded-full bg-gray-200" />
                  )}
                  <span>{app.user.name}</span>
                </td>
                <td className="py-2 px-4 text-[#6B6A6C] text-lg">{app.skinType}</td>
                <td className="py-2 px-4 text-[#6B6A6C] text-md">{format(new Date(app.date), "dd MMM yyyy, h:mm a")}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-4 py-1 rounded-full text-lg font-medium ${app.status === "accepted"
                      ? statusColors.Accepted
                      : app.status === "rejected"
                        ? statusColors.Rejected
                        : statusColors.Pending
                      }`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex px-8 justify-between">
        <button className="h-8 w-25 rounded-full border hover:bg-[#1A151D] hover:text-white cursor-pointer"
          onClick={() => { showPrevious() }}
        >Previous
        </button>
        <button className="h-8 w-25 rounded-full border hover:bg-[#1A151D] hover:text-white cursor-pointer"
          onClick={() => { showNext() }}
        >Next
        </button>
      </div>
    </section>
  );
};
