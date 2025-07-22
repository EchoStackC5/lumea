import React from 'react';
import { Scan, ArrowRight } from 'lucide-react';

export default function AnalysisSummaryCard({ analysis }) {
  return (
    <div className="bg-gradient-to-br from-[#671699] to-[#501C70] rounded-2xl p-4 sm:p-6 text-white flex flex-col justify-between  w-full max-w-[312px] h-auto  mx-auto">
      <div className='flex flex-col justify-between flex-grow'>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Skin Summary</h2>
          <Scan size={16} />
        </div>

        <p className="text-sm mb-6">{analysis?.skinSummary || "Your skin health is good, showing balanced hydration and strong elasticity."}</p>

        <section className="flex flex-col items-center">
          <div className="relative flex justify-center items-center  h-28 sm:h-32">
            <svg className="absolute w-24 h-24 sm:w-28 sm:h-28 text-white/10" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#D084FF"
                strokeWidth="20"
                fill="none"
                strokeDasharray="314"
                strokeDashoffset="60"
              />
            </svg>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center z-10">
              <div className="text-2xl sm:text-3xl font-medium text-[#4E1571]">81%</div>
            </div>
          </div>
          <p className="text-center mb-6">Overall score</p>
        </section>

        <div className="grid grid-cols-2 mt-4 text-sm gap-4  bg-[#F6EBFD] w-full max-w-[265px] h-[56px] p-2 rounded-md mx-auto">
          <div className="border-r border-gray-300">
            <p className="text-[#4E1571]">Skin Age</p>
            <p className="font-medium text-[#4E1571]">{analysis?.skinAge || 22}</p>
          </div>
          <div>
            <p className="text-[#4E1571]">Skin Health</p>
            <p className="font-medium text-[#4E1571]">{analysis?.skinHealth || 45}</p>
          </div>
        </div>

        <div className="text-sm mt-4 ">
          <h3 className="font-medium mb-1 font-inter">Quantitative Analysis</h3>
          <p className='font-poppins text-white/80'>{analysis?.quantitativeAnalysis
|| "loading..."}</p>
        </div>

        <div className="text-sm mt-4 ">
          <h3 className="font-medium mb-1 font-inter">Precautions</h3>
          {Array.isArray(analysis?.precautions) && analysis.precautions.length > 0 ? (
            analysis.precautions.map((precaution, idx) => (
              <p key={idx} className="mb-2 text-white/90 font-poppins">{precaution}</p>
            ))
          ) : (
            <p>
              It may indicate increased sebum production or early fine lines if not cared for. Proactive attention can improve your skin health
            </p>
          )}
        </div>



      </div>
      <button className="w-full max-w-[280px] mt-6 h-[44px] flex justify-between items-center px-[25px] py-[10px] rounded-full bg-gradient-to-br from-[#8964A0]/60 to-[#6B3D88]/60 text-white shadow-lg hover:opacity-90 mx-auto">
        Find an Expert
        <ArrowRight size={18} />
      </button>
    </div>
  );
};


