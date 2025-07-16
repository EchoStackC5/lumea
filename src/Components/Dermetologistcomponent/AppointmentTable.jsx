import React from "react";
import { useState, useEffect } from "react";

import cheekbone from "../../assets/images/cheekbone.jpg"

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
    name: "Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00AM",
    status: "Rejected",
    gender: 'Male',
    description: 'I am currently dealing with acne and hyperpigmentation'
  },
  {
    id: 3,
    image: "/cheekbone/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00AM",
    status: "Accepted",
    gender: 'Female',
    description: 'I am currently dealing with acne and hyperpigmentation'
  },
  {
    id: 4,
    image: "/cheekbone/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00AM",
    status: "Accepted",
    gender: 'Female',
    description: 'I am currently dealing with acne and hyperpigmentation'
  },
  {
    id: 5,
    image: "/cheekbone/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00AM",
    status: "Rejected",
    gender: 'Male',
    description: 'I am currently dealing with acne and hyperpigmentation'
  },
  {
    id: 6,
    image: "/avatars/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00AM",
    status: "Pending",
    gender: 'Female',
    description: 'I am currently dealing with acne and hyperpigmentation'
  },
  {
    id: 7,
    image: "/avatars/3.jpg",
    name: "Ethan Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00AM",
    status: "Pending",
    gender: 'Male',
    description: 'I am currently suffering from Korshiokor'
  },
  
];



export default function AppointmentTable({setDetail, setShowDetail, showDetail}) {
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
    if (appointmentstable.length >= limit) {

      const items = appointmentstable.slice(startIndex, endIndex)
      setsubArray(items);
    }
    else {
      setsubArray(appointmentstable)
    }
  }, []);

  function showNext() {
    const remaining = appointmentstable.length - endIndex;

    if (remaining >= limit) {
      const newStartIndex = endIndex
      const newEndIndex = endIndex + limit;

      const items = appointmentstable.slice(newStartIndex, newEndIndex)
      setsubArray(items);
      setstartindex(newStartIndex)
      setendIndex(newEndIndex)
    }
    else {
      if (remaining > 0) {
        const newStartIndex = endIndex
        const newEndIndex = endIndex + remaining;

        const items = appointmentstable.slice(newStartIndex, newEndIndex)
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

      const items = appointmentstable.slice(newStartIndex, newEndIndex)
      setsubArray(items);
      setstartindex(newStartIndex)
      setendIndex(newEndIndex)
  }

  return (
    <section style={{width: showDetail?'53%':'75%'}} className="h-auto w-[686px] bg-white rounded-lg">
      <div className="mt-5 px-5">
        <h1 className="font-bold">Appointments & Client List</h1>
      </div>
      <div className="p-4 max-w-5xl mx-auto">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-backgrounds text-left text-secondary-text font-semibold">
              <th className="py-2 px-2 rounded-l-md">Client Name</th>
              <th className="py-2 px-2">Skin Type</th>
              <th className="py-2 px-2">Appointment Date</th>
              <th className="py-2 px-2 rounded-r-md">Appointment Status</th>
            </tr>
          </thead>
          <tbody className="">
            {subArray.map((app) => (
              <tr key={app.id} className="bg-white shadow rounded-lg hover:bg-backgrounds cursor-pointer"
               onClick={() => {setDetail(app); setShowDetail(true)}}
              >
                <td className="py-2 px-4 flex items-center gap-3">
                  <img
                    src={cheekbone}
                    alt={app.name}
                    className="w-14 h-10 rounded-full object-cover"
                  />
                  <span>{app.name}</span>
                </td>
                <td className="py-2 px-4 text-[#6B6A6C]">{app.skinType}</td>
                <td className="py-2 px-4 text-[#6B6A6C] text-sm">{app.date}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${statusColors[app.status]}`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex md:px-8 md:gap-95">
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


