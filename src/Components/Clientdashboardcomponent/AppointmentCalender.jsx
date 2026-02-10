import { useState } from "react";
import {  VideoIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white border space-y-3 rounded-lg mt-5 p-4 w-full h-full lg:w-sm flex flex-col justify-between md:hidden lg:flex ">
      {/* Top Header - Calendar Icon & Plus Button */}

      <h2 className="font-medium text-lg font-dm-sans">Calendar</h2>

      {/* Calendar Box */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border bg-backgrounds w-full"
      />

      {/* Today Section */}
      <div className="bg-backgrounds p-4 rounded-md w-full h-[124px] mt-2 flex flex-col justify-between mb-7">
        <div className="flex justify-between text-sm font-semibold text-gray-800 mb-2">
          <h1>Today</h1>
          <h2>{format(new Date(), "do MMMM yyyy")}</h2>
        </div>

        {/* Appointment 1 */}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-[#12B76A] h-2 w-2 rounded-full mr-2"></div>
            <div>
              <h1 className="text-xs text-[#6B6A6C]">9:00PM - 9:30PM</h1>
              <p className="text-[10px]">Monthly skin checkup</p>
            </div>
          </div>
          <div className="bg-[#1056D326] h-8 w-8 rounded-full flex items-center justify-center">
            <VideoIcon size={16} className="text-blue-600 " />
          </div>
        </div>

        {/* Appointment 2 */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center">
            <div className="bg-[#EF5DA8] h-2 w-2 rounded-full mr-2"></div>
            <div>
              <h1 className="text-xs text-[#6B6A6C]">9:00PM - 9:30PM</h1>
              <p className="text-[10px]">Monthly skin checkup</p>
            </div>
          </div>
          <div className="bg-[#1056D326] h-8 w-8 rounded-full flex items-center justify-center">
            <VideoIcon size={16} className="text-blue-600 " />
          </div>
        </div>
      </div>
    </div>
  );
}
