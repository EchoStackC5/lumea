import React from 'react';
import { Scan } from 'lucide-react';
import userFace from "../../assets/images/u.png";
import scan from "../../assets/images/d.png";

export default function AnalysisImageSection ({analysis, report}) {
  return (
    <div className="bg-gradient-to-br from-[#EAC8FF] to-[#FEF8FE] shadow-xs rounded-2xl p-4 border border-light-border h-auto lg:h-[659px] w-full max-w-[579px] mx-auto relative ">
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
        <img src={report?.imageUrl || userFace}  alt="Analyzed face" className="rounded-xl w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px]" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full flex justify-center items-center">
          {/* <img src={scan} alt="Highlight" className="w-[70%] h-[65%] object-contain" /> */}
        </div>
      </div>
      </div>

      
    </div>
  );
};


