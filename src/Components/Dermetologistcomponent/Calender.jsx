import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import Today from "../../Components/Dermetologistcomponent/Today"
import AppointmentRequest from '../../Components/Dermetologistcomponent/AppointmentRequest'

export default function CalendarIcon() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const today = new Date();

    // Get first day of the month and number of days in month
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Get days from previous month to fill the calendar
    const daysInPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    // Navigate to previous month
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    // Navigate to next month
    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // Navigate to specific month
    const goToMonth = (monthIndex) => {
        setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
    };

    // Navigate to specific year
    const goToYear = (year) => {
        setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    };

    // Handle date selection
    const handleDateClick = (day) => {
        const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(selected);
    };

    // Check if date is today
    const isToday = (day) => {
        return today.getDate() === day &&
            today.getMonth() === currentDate.getMonth() &&
            today.getFullYear() === currentDate.getFullYear();
    };

    // Check if date is selected
    const isSelected = (day) => {
        return selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();
    };

    // Generate calendar days
    const generateCalendarDays = () => {
        const days = [];

        // Previous month's days
        for (let i = startingDayOfWeek - 1; i >= 0; i--) {
            days.push(
                <button
                    key={`prev-${daysInPreviousMonth - i}`}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-[#BF04A6] rounded-full transition-colors"
                    onClick={() => {
                        goToPreviousMonth();
                        setTimeout(() => handleDateClick(daysInPreviousMonth - i), 0);
                    }}
                >
                    {daysInPreviousMonth - i}
                </button>
            );
        }

        // Current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <button
                    key={day}
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-medium transition-all duration-200 ${isToday(day)
                            ? 'bg-bg-[#BF04A6] text-gray-900 hover:bg-[#BF04A6]'
                            : isSelected(day)
                                ? 'bg-[#e7d1e4] text-[#BF04A6] ring-2 ring-[#BF04A6]'
                                : 'hover:bg-[#BF04A6] text-gray-900'
                        }`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </button>
            );
        }

        // Next month's days to complete the grid
        const remainingCells = 31 - days.length;
        for (let day = 1; day <= remainingCells; day++) {
            days.push(
                <button
                    key={`next-${day}`}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-[#BF04A6] rounded-full transition-colors"
                    onClick={() => {
                        goToNextMonth();
                        setTimeout(() => handleDateClick(day), 0);
                    }}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    return (
        <div className="h-full  w-[25%]  bg-white rounded-xl p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 ">
                <div className="flex justify-between gap-40">
                    <h1 className="text-xl font-inter text-[#1A151D]">Calender</h1>
                </div>
            </div>

            {/* Month/Year Navigation */}
            <div className='h-[220px] w-auto bg-[#EAD7FB] p-2 rounded-md'>
            <div className="flex items-center justify-between mb-2 ">
                <button
                    onClick={goToPreviousMonth}
                    className=" hover:bg-[#BF04A6] rounded-lg transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>

                <div className="flex items-center gap-1">
                    <select
                        value={currentDate.getMonth()}
                        onChange={(e) => goToMonth(parseInt(e.target.value))}
                        className="px-1  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF04A6] focus:border-transparent"
                    >
                        {months.map((month, index) => (
                            <option key={month} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>

                    <select
                        value={currentDate.getFullYear()}
                        onChange={(e) => goToYear(parseInt(e.target.value))}
                        className="px-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF04A6] focus:border-transparent"
                    >
                        {Array.from({ length: 21 }, (_, i) => currentDate.getFullYear() - 10 + i).map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={goToNextMonth}
                    className=" hover:bg-[#BF04A6] rounded-full transition-colors"
                >
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7">
                {daysOfWeek.map(day => (
                    <div key={day} className="h-5 flex items-center justify-center text-sm font-medium text-gray-500">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
                {generateCalendarDays()}
            </div>
            </div>
            <Today />
            <AppointmentRequest />
        </div>
    );
}