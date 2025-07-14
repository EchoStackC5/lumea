import React from 'react';
import { Download } from 'lucide-react';
import AnalysisImageSection from '../Components/AIAnalysisResult/AnalysisImageSection';
import AnalysisSummaryCard from '../Components/AIAnalysisResult/AnalysisSummaryCard';
import AnalysisSidePanel from '../Components/AIAnalysisResult/AnalysisSidePanel';

export default function AIAnalysisResult() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6FF] to-[#ECE4F6] px-4 py-6 md:px-8 lg:px-12 md:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
          <h2 className="text-lg font-semibold md:ml-4">AI Analysis Results</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-full mt-4 sm:mt-0 md:mr-4">
            <Download size={16} /> Download Result
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] xl:grid-cols-[579px_312px_296px] gap-4 lg:gap-6 justify-center">
          <AnalysisImageSection />
          <AnalysisSummaryCard />
          <AnalysisSidePanel />
        </div>
      </div>
    </div>
  );
};


