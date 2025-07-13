import React from "react";
import cheekbone from "../../assets/images/cheekbone.jpg"

const appointmentstable = [
  {
    id: 1,
    image: "/cheekbone/.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00 AM",
    status: "Accepted",
  },
  {
    id: 2,
    image: "/cheekbone/2.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00 AM",
    status: "Rejected",
  },
  {
    id: 3,
    image: "/cheekbone/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00 AM",
    status: "Accepted",
  },
  {
    id: 4,
    image: "/cheekbone/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00 AM",
    status: "Accepted",
  },
  {
    id: 5,
    image: "/cheekbone/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00 AM",
    status: "Rejected",
  },
  {
    id: 6,
    image: "/avatars/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00 AM",
    status: "Pending",
  },
  {
    id: 7,
    image: "/avatars/3.jpg",
    name: "Ethan Alex Monroe",
    skinType: "Oily",
    date: "15th July 2025, 09:30AM - 10:00 AM",
    status: "Pending",
  },
 
];

const statusColors = {
  Accepted: "bg-[#079C4326] text-[#079C43]",
  Rejected: "bg-[#9C071D26] text-[#9C071D]",
  Pending: "bg-[#1D10AC26] text-[#1D10AC]",
};


export default function AppointmentTable() {
  return (
    <section className="h-auto w-[686px] bg-white rounded-lg">
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
          {appointmentstable.map((app) => (
            <tr key={app.id} className="bg-white shadow rounded-lg hover:bg-backgrounds cursor-pointer">
              <td className="py-2 px-4 flex items-center gap-3">
                <img
                  src={cheekbone}
                  alt={app.name}
                  className="w-14 h-10 rounded-full object-cover"
                />
                <span>{app.name}</span>
              </td>
              <td className="py-2 px-4 text-[#6B6A6C]">{app.skinType}</td>
              <td className="py-2 px-4 text-[#6B6A6C]">{app.date}</td>
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
    </section>
  );
};


