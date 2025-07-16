import { useState } from "react";
import verifiedImg from "@/assets/verified.svg";
import Loaders from "../Loaders";
import useSWR from "swr";
import { apiFetcher } from "@/api/client";
import GloriaDeoDoc from "@/assets/gloriaDedo.jpg";

export default function FormStep3({ onNext, defaultValues }) {
  const { data, isLoading, error } = useSWR("/users?role=cosmetologist", apiFetcher);
  const [page, setPage] = useState(0);
  const [selectedId, setSelectedId] = useState(defaultValues?.cosmetologist || "");
  const pageSize = 2;

  if (isLoading) return <Loaders />;
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load cosmetologists. Please try again later.</p>
      </div>
    );
  }

  // Get only two cosmetologists for current page
  const visibleCosmetologists = data?.slice(page * pageSize, page * pageSize + pageSize) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedId) {
      alert("Please select a cosmetologist.");
      return;
    }
    onNext({ cosmetologist: selectedId });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6 text-lg font-inter font-medium text-primary-dark">
        <h1>Based on your concerns and skin type, here are experts for you.</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {visibleCosmetologists.map((cosmetologist) => (
          <div
            key={cosmetologist.id}
            className={`flex flex-col space-y-3 w-full bg-white p-4 border rounded-lg cursor-pointer transition-all ${
              selectedId === cosmetologist.id 
                ? 'border-system-primary bg-purple-50' 
                : 'border-light-border hover:border-purple-300'
            }`}
            onClick={() => setSelectedId(cosmetologist.id)}
          >
            <img
              src={cosmetologist.profile?.image || GloriaDeoDoc}
              alt="Doctor"
              className="rounded-md object-cover w-full h-40"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-primary-dark">
                {cosmetologist.name}
              </h2>
              <img src={verifiedImg} alt="Verified" className="w-6" />
            </div>
            <p className="text-sm text-gray-600">
              {cosmetologist.profile?.areaOfExpertise || "No specialization listed"}
            </p>
            
            {/* Selection indicator */}
            <div className="flex justify-center">
              <input
                type="radio"
                name="cosmetologist"
                value={cosmetologist.id}
                checked={selectedId === cosmetologist.id}
                onChange={() => setSelectedId(cosmetologist.id)}
                className="w-4 h-4 text-system-primary"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="px-4 py-2 rounded bg-light-border text-primary-dark font-medium disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded bg-system-primary text-white font-medium disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={data && (page + 1) * pageSize >= data.length}
        >
          Load More
        </button>
      </div>

      <button 
        type="submit" 
        className="w-full mt-6 bg-system-primary text-white py-3 px-4 rounded-md hover:bg-purple-600 transition-colors"
      >
        Book Appointment
      </button>
    </form>
  );
}