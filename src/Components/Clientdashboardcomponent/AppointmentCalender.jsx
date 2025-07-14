import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

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

    // Fill rest of the grid
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
    <div className="max-w-xs mx-auto bg-[#F8EBF8] rounded-xl p-5 shadow-md text-gray-800 h-70 mt-15">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-5 h-5 text-[#A035B2]" />
          <h2 className="font-semibold text-sm">Calendar</h2>
        </div>
        <button className="p-1 rounded-full bg-[#A035B2] text-white hover:opacity-90">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

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
  );
}
