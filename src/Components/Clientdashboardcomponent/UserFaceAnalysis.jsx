import React from 'react';
import { Scan } from 'lucide-react';
import userFace from "../../assets/images/u.png";
import scan from "../../assets/images/d.png";
import useSWR from 'swr';
import { apiFetcher } from '@/api/client';
import Loaders from '../Loaders';

export default function UserFaceAnalysis({ initialAnalysis, report }) {
  const { data, isLoading, error } = useSWR('/users/me/history', apiFetcher);

  if (isLoading) return <Loaders />;

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load analysis results. Please try again later.</p>
      </div>
    );
  }

  const latestReport = data?.[0];
  // const analysis = latestReport?.analysis || initialAnalysis;

  
  const imageUrl = latestReport?.imageUrl || userFace;

  return (
    <div className="bg-gradient-to-br from-[#EAC8FF] to-[#FEF8FE] shadow-xs rounded-2xl p-4 border border-light-border h-auto lg:h-[659px] w-full lg:max-w-xl xl:max-w-xl 2xl:max-w-3xl">
      <div className="flex justify-between text-sm text-gray-700 mb-6">
        <div>
          <p>Area ratio: <strong>4.2%</strong></p>
          <p>Severity: <strong>83.4%</strong></p>
        </div>
        <button className="text-black hover:underline flex flex-col items-center gap-1">
          <Scan size={16} /> Rescan
        </button>
      </div>
      <div className='flex flex-col mt-[86px]'>
        <div className="relative mt-4">
          <img src={imageUrl} alt="Analyzed face" className="rounded-xl w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px]" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full flex justify-center items-center">
            <img src={scan} alt="Highlight" className="w-[70%] h-[65%] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}



