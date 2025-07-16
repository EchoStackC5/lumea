import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, VideoIcon, Plus } from 'lucide-react';

export default function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const today = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;

  const daysInPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToMonth = (monthIndex) => {
    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
  };

  const goToYear = (year) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
  };

  const handleDateClick = (day) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(selected);
  };

  const isToday = (day) => {
    return today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear();
  };

  const isSelected = (day) => {
    return selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear();
  };

  const generateCalendarDays = () => {
    const days = [];

    // Previous month
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className="text-gray-400 w-7 h-7 flex items-center justify-center text-xs"
        >
          {daysInPreviousMonth - i}
        </div>
      );
    }

    // Current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-200 ${
            isToday(day)
              ? 'bg-white border border-[#A035B2] text-[#A035B2] font-bold'
              : isSelected(day)
              ? 'bg-[#A035B2] text-white font-semibold'
              : 'text-gray-800 hover:bg-[#ecd5f1]'
          }`}
        >
          {day}
        </button>
      );
    }

    // Fill rest of grid
    const remaining = 31 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className="text-gray-400 w-7 h-7 flex items-center justify-center text-xs"
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className='bg-white border  rounded-xl w-[296px] h-[484px] mt-5 p-3 flex flex-col justify-between'>

      {/* Top Header - Calendar Icon & Plus Button */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-5 h-5 text-[black]" />
          <h2 className="font-semibold text-sm">Calendar</h2>
        </div>
        {/* <button className="p-1 rounded-full bg-[black] text-white hover:opacity-90">
          <Plus size={14} />
        </button> */}
      </div>

      {/* Calendar Box */}
      <div className="bg-[#EAD7FB] rounded-xl p-2 mb-8 text-gray-800 w-full ">
        <div className="flex items-center justify-between mb-2">
          <button onClick={goToPreviousMonth} className="p-1 rounded-lg hover:bg-white">
            <ChevronLeft className="w-3 h-3 text-gray-700" />
          </button>

          <div className="flex items-center gap-1">
            <select
              value={currentDate.getMonth()}
              onChange={(e) => goToMonth(parseInt(e.target.value))}
              className="bg-white text-xs rounded-md border px-1 py-0.5 focus:outline-none"
            >
              {months.map((month, idx) => (
                <option key={month} value={idx}>
                  {month}
                </option>
              ))}
            </select>

            <select
              value={currentDate.getFullYear()}
              onChange={(e) => goToYear(parseInt(e.target.value))}
              className="bg-white text-xs rounded-md border px-1 py-0.5 focus:outline-none"
            >
              {Array.from({ length: 21 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button onClick={goToNextMonth} className="p-1 rounded-lg hover:bg-white">
            <ChevronRight className="w-3 h-3 text-gray-700" />
          </button>
        </div>

        <div className="grid grid-cols-7 text-[10px] font-medium text-gray-600 mb-1">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5">
          {generateCalendarDays()}
        </div>
      </div>

      {/* Today Section */}
      <div className="bg-[#EAD7FB] p-3 rounded-md w-full h-[124px] mt-2 flex flex-col justify-between mb-7">
        <div className="flex justify-between text-sm font-semibold text-gray-800 mb-2">
          <h1>Today</h1>
          <h2>5th July 2025</h2>
        </div>

        {/* Appointment 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-[#12B76A] h-2 w-2 rounded-full mr-2"></div>
            <div>
              <h1 className="text-xs text-[#6B6A6C]">8:30PM - 9:00PM</h1>
              <p className="text-[10px]">Monthly skin checkup</p>
            </div>
          </div>
          <div className="bg-[#1056D326] h-8 w-8 rounded-full flex items-center justify-center">
            <VideoIcon className="text-blue-600 h-5 w-5" />
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
            <VideoIcon className="text-blue-600 h-5 w-5" />
          </div>
        </div>
      </div>

    </div>
  );
}
