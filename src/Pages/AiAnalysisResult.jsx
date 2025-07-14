import { Download, ArrowRight } from "lucide-react";
import userFace from "../assets/images/u.png";
import cream1 from "../assets/images/a.png";
import cream2 from "../assets/images/b.png";
import cream3 from "../assets/images/c.png";
import scan from "../assets/images/d.png";
import { Scan } from "lucide-react";
import high from "../assets/images/high.png";
import oil from "../assets/images/oil.png";
import uneven from "../assets/images/uneven.png";
import acne from "../assets/images/acne.png";
import sdate from "../assets/images/sdate.png";
import Rating from "../assets/images/Rating.png";

export default function AnalysisResult() {
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
          {/* Left - Image Analysis */}
          <div className="bg-gradient-to-br from-[#EAC8FF] to-[#FEF8FE] backdrop-blur-md rounded-2xl p-4 shadow-md h-auto lg:h-[659px] w-full max-w-[579px] mx-auto relative">
            <div className="flex justify-between text-sm text-gray-700 mb-6">
              <div>
                <p>Area ratio: <strong>4.2%</strong></p>
                <p>Severity: <strong>83.4%</strong></p>
              </div>
              <button className="text-black hover:underline flex flex-col items-center gap-1">
                <Scan size={16} /> Rescan
              </button>
            </div>
            <div className="relative mt-4">
              <img src={userFace} alt="Analyzed face" className="rounded-xl w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px]" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full flex justify-center items-center">
                <img src={scan} alt="Highlight" className="w-[70%] h-[65%] object-contain" />
              </div>
            </div>
          </div>

          {/* Middle - Result Summary */}
          <div className="bg-gradient-to-br from-[#671699] to-[#501C70] rounded-2xl p-4 sm:p-6 text-white flex flex-col justify-between w-full max-w-[312px] h-auto lg:h-[659px] mx-auto">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Healthy Skin</h2>
                <Scan size={16} />
              </div>
              <p className="text-sm mb-6">Your skin health is good, showing balanced hydration and strong elasticity</p>
              <div className="relative flex justify-center items-center mb-6">
                <svg className="absolute w-24 h-24 sm:w-28 sm:h-28 text-white/10" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" stroke="#D084FF" strokeWidth="20" fill="none" strokeDasharray="314" strokeDashoffset="60" strokeLinecap="curve"/>
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
                <p>It may indicate increased sebum production or early fine lines if not cared for. Proactive attention can improve your skin health.</p>
              </div>
            </div>
            <button className="w-full max-w-[280px] h-[44px] flex justify-between items-center px-[25px] py-[10px] rounded-full bg-gradient-to-br from-[#8964A0]/60 to-[#6B3D88]/60 text-white backdrop-blur-[42px] shadow-lg font-medium transition duration-300 hover:opacity-90 mx-auto">
              Find an Expert
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right - Tags & Recommendations */}
          <div className="flex flex-col space-y-4 lg:space-y-6 w-full max-w-[296px] mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-md w-full h-auto lg:h-[239.2px] space-y-4">
              <h3 className="font-semibold">Your Skin Analysis</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[{ img: high, label: "Pore Visibility", value: "High", bg: "#F5DBED" },
                  { img: oil, label: "Oil Level", value: "Elevated", bg: "#F2DEDF" },
                  { img: acne, label: "Condition Flags", value: "Acne", bg: "#D6E0F2" },
                  { img: uneven, label: "Texture", value: "Uneven", bg: "#D9D2F9" }].map(({ img, label, value, bg }, idx) => (
                    <div key={idx} className="p-2 rounded-md bg-[#F6EBFD] w-full h-auto min-h-[61.24px]">
                      <div className="flex space-x-2">
                        <div className="flex-shrink-0">
                          <img src={img} alt="" style={{ backgroundColor: bg }} className="rounded-full p-2 w-8 h-8" />
                          <p className="text-[8.74px] pt-2 text-[#6B6A6C]">{label}</p>
                        </div>
                        <h1 className="font-medium text-xs sm:text-sm">{value}</h1>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 -mt-2">
                <div className="flex items-center gap-2">
                  <img src={sdate} alt="Scan Date" className="w-4 h-4" />
                  <p>Scan Date</p>
                </div>
                <p>July 5th 2025</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 shadow-md w-full h-auto lg:h-[239.2px]">
              <div className="bg-[#F6EBFD] rounded-xl shadow-md w-full max-w-[268px] h-auto lg:h-[178px] mx-auto mt-4">
                <h3 className="font-semibold pt-2 ml-2">Recommended Products</h3>
                <div className="grid grid-cols-3 gap-3 sm:gap-5 px-4 mt-4">
                  {[{ img: cream1, label: "Blush", price: "$20" }, { img: cream2, label: "Face mask", price: "$23" }, { img: cream3, label: "Body oil", price: "$20" }].map((item, idx) => (
                    <div key={idx}>
                      <div className={`w-[67.17px] h-[85.26px] bg-[#EFD6FF] flex items-center justify-center ${idx === 1 ? 'rounded-full' : ''}`}>
                        <img src={item.img} alt={item.label} className="object-cover max-h-full" />
                      </div>
                      <p className="text-[7.52px] mt-2">{item.label}</p>
                      <div className="flex items-center justify-between text-[3.55px]">
                        <p>{item.price}</p>
                        <div className="flex items-center gap-1">
                          <img src={Rating} alt="Rating" />
                          <p>4.0</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}