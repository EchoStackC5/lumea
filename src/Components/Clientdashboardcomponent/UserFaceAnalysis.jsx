
import { Scan } from 'lucide-react';
import userFace from "../../assets/skinPage.svg";
import useSWR from 'swr';
import { apiFetcher } from '@/api/client';


export default function UserFaceAnalysis({ initialAnalysis, report }) {
  const { data, isLoading, error } = useSWR('/users/me/history', apiFetcher);


  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load analysis results. Please try again later.</p>
      </div>
    );
  }

  const latestReport = data?.[0];
  

  
  const imageUrl = latestReport?.imageUrl || userFace;

  return (
    <div className='flex flex-col h-auto '>
    <div className="bg-gradient-to-br from-[#EAC8FF] to-[#FEF8FE] shadow-xs rounded-2xl p-4 border border-light-border h-auto w-full ">
      <div className="flex justify-between text-sm text-gray-700 mb-6">
        <div>
          <p>Area ratio: <strong>4.2%</strong></p>
          <p>Severity: <strong>83.4%</strong></p>
        </div>
        <button className="text-black hover:underline flex flex-col items-center gap-1">
          <Scan size={16} /> Rescan
        </button>
      </div>
    </div>
    <img src={imageUrl} alt="Analyzed face" className="rounded-xl w-full object-cover " />
    </div>
  );
}



