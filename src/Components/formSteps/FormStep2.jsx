import { useState } from "react";

export default function FormStep2({ onNext, defaultValues }) {
    const [dateTime, setDateTime] = useState(defaultValues?.date || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!dateTime) {
            alert("Please select a date and time.");
            return;
        }
        onNext({ date: dateTime });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6 text-lg font-inter font-medium text-primary-dark">
                <h1>Pick a Date and Time</h1>
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pick a date<span className="text-red-400">*</span>
                </label>
                <input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-light-border bg-white rounded-md outline-none focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            
            <button 
                type="submit" 
                className="w-full mt-6 bg-system-primary text-white py-3 px-4 rounded-md hover:bg-purple-600 transition-colors"
            >
                Next
            </button>
        </form>
    );
}