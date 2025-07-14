import React from 'react';
import { Scan, ArrowRight } from 'lucide-react';

 export default function AnalysisSummaryCard () {
  return (
    <div className="bg-gradient-to-br from-[#671699] to-[#501C70] rounded-2xl p-4 sm:p-6 text-white flex flex-col justify-between w-full max-w-[312px] h-auto lg:h-[659px] mx-auto">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Healthy Skin</h2>
          <Scan size={16} />
        </div>

        <p className="text-sm mb-6">Your skin health is good, showing balanced hydration and strong elasticity.</p>

        <div className="relative flex justify-center items-center mb-6">
          <svg className="absolute w-24 h-24 sm:w-28 sm:h-28 text-white/10" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" stroke="#D084FF" strokeWidth="20" fill="none" strokeDasharray="314" strokeDashoffset="60" />
          </svg>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center z-10">
            <div className="text-2xl sm:text-3xl font-medium text-[#4E1571]">81%</div>
          </div>
        </div>

        <p className="text-center mb-6">Overall score</p>

        <div className="grid grid-cols-2 text-sm gap-4 mb-6 bg-[#F6EBFD] w-full max-w-[265px] h-[56px] p-2 rounded-md mx-auto">
          <div className="border-r border-gray-300">
            <p className="text-[#4E1571]">Skin Age</p>
            <p className="font-medium text-[#4E1571]">25</p>
          </div>
          <div>
            <p className="text-[#4E1571]">Skin Health</p>
            <p className="font-medium text-[#4E1571]">78</p>
          </div>
        </div>

        <div className="text-sm mb-4">
          <h3 className="font-semibold mb-1">Quantitative Analysis</h3>
          <p>Your hydration is 78% showing great moisture balance, and elasticity is 85% indicating firmness.</p>
        </div>

        <div className="text-sm mb-6">
          <h3 className="font-semibold mb-1">Precautions</h3>
          <p>It may indicate increased sebum production or early fine lines if not cared for.</p>
        </div>
      </div>

      <button className="w-full max-w-[280px] h-[44px] flex justify-between items-center px-[25px] py-[10px] rounded-full bg-gradient-to-br from-[#8964A0]/60 to-[#6B3D88]/60 text-white shadow-lg hover:opacity-90 mx-auto">
        Find an Expert
        <ArrowRight size={18} />
      </button>
    </div>
  );
};


