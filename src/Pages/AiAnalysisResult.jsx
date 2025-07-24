import React, { use } from 'react';
import { Download } from 'lucide-react';
import AnalysisImageSection from '../Components/AIAnalysisResult/AnalysisImageSection';
import AnalysisSummaryCard from '../Components/AIAnalysisResult/AnalysisSummaryCard';
import AnalysisSidePanel from '../Components/AIAnalysisResult/AnalysisSidePanel';
import SkinAnalysisNav from '@/Components/SkinAnalysNav';
import useSWR from 'swr';
import { apiFetcher } from '@/api/client';
import Loaders from '@/Components/Loaders';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image-more';
import { useParams, useLocation } from 'react-router';
// import domtoimage from 'dom-to-image';
import AnalysisReportPDF from '@/Components/custom/PdfDownloader';

// import html2canvas from 'html2canvas';

export default function AIAnalysisResult() {
 const { userId } = useParams();
 const location = useLocation();
 const analysisData = location.state?.analysisData;

 
  const { data, isLoading, error } = useSWR('/users/me/history', apiFetcher);
  // const apiEndpoint = userId ? `/users/${userId}/history` : '/users/me/history';
  // const { data, isLoading, error } = useSWR( userId? `/users/${userId}/history` : '/users/me/history', apiFetcher);
  console.log(data)

  

  if (isLoading) return <Loaders />;

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load analysis results. Please try again later.</p>
      </div>
    );
  }

  const latestReport = data?.[0];
  const analysis = latestReport?.analysis;
  console.log("Analysis data:", analysis);

  //a function to download analysis report


  const handlePDFdownload = async () => {
    try {
      const reportElement = document.querySelector(".report-wrapper");
      if (!reportElement) {
        console.error("Report element not found");
        return;
      }


      const { width, height } = reportElement.getBoundingClientRect();

      console.log("Capturing with width:", width, "height:", height);

      const dataUrl = await domtoimage.toPng(reportElement, {
        // quality: 1,
        // bgcolor: "#ffffff",
        width,
        height,
        style: {

          transform: "none",
          transformOrigin: "top left",
          width: `${width}px`,
          height: `${height}px`,
        },
      });


      const img = new Image();
      img.onload = () => {
        const pdf = new jsPDF("p", "mm", [height, width]);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (img.height * pdfWidth) / img.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("analysis-report.pdf");
        console.log("PDF generated successfully");
      };
      img.src = dataUrl;
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };


  return (
    <>
      <SkinAnalysisNav />
      <div className="min-h-screen  bg-gradient-to-br from-[#F5E6FF] to-[#ECE4F6] px-4 py-6 md:px-8 lg:px-12 md:py-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
            <h2 className="text-lg font-semibold md:ml-4">AI Analysis Results</h2>
            <button onClick={handlePDFdownload} className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-full mt-4 sm:mt-0 md:mr-4">
              <Download size={16} /> Download Result
            </button>
          </div>
          <div className="report-wrapper">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] xl:grid-cols-[579px_312px_296px]  gap-4 lg:gap-6 justify-center">
              {/* <AnalysisImageSection analysis={analysis} /> */}
              <AnalysisImageSection report={latestReport} analysis={analysis} />
              <AnalysisSummaryCard analysis={analysis} />
              <AnalysisSidePanel analysis={analysis} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


