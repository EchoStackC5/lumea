import React from 'react';
import high from "../../assets/images/high.png";
import oil from "../../assets/images/oil.png";
import uneven from "../../assets/images/uneven.png";
import acne from "../../assets/images/acne.png";
import sdate from "../../assets/images/sdate.png";
import cream1 from "../../assets/images/a.png";
import cream2 from "../../assets/images/b.png";
import cream3 from "../../assets/images/c.png";
import Rating from "../../assets/images/RatingHalf.svg";


export default function AnalysisSidePanel() {
  const skinTags = [
    { img: high, label: "Pore Visibility", value: "High", bg: "#F5DBED" },
    { img: oil, label: "Oil Level", value: "Elevated", bg: "#F2DEDF" },
    { img: acne, label: "Condition Flags", value: "Acne", bg: "#D6E0F2" },
    { img: uneven, label: "Texture", value: "Uneven", bg: "#D9D2F9" }
  ];

  const products = [
    { img: cream1, label: "Blush", price: "$20" },
    { img: cream2, label: "Face mask", price: "$23" },
    { img: cream3, label: "Body oil", price: "$20" }
  ];

  return (
    <div className="flex flex-col space-y-4 lg:space-y-6 w-full max-w-[296px] mx-auto">
      <div className="bg-white rounded-xl p-4 border border-light-border w-full h-auto lg:h-[239.2px] space-y-4">
        <h3 className="font-semibold">Your Skin Analysis</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {skinTags.map(({ img, label, value, bg }, idx) => (
            <div key={idx} className="p-2 rounded-md bg-[#F6EBFD] w-full min-h-[61.24px]">
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

      <div className="bg-white rounded-xl p-3 border border-light-border w-full h-auto lg:h-[239.2px]">
        <div className="bg-[#F6EBFD] rounded-xl border border-light-border w-full max-w-[268px] h-auto lg:h-[178px] mx-auto mt-4">
          <h3 className="font-semibold pt-2 ml-2">Recommended Products</h3>
          <div className="grid grid-cols-3 gap-3 sm:gap-5 px-4 mt-4">
            {products.map((item, idx) => (
              <div key={idx}>
                <div className={`w-[67.17px] h-[85.26px] bg-[#EFD6FF] flex items-center justify-center ${idx === 1 ? 'rounded-full' : ''}`}>
                  <img src={item.img} alt={item.label} className="object-cover max-h-full" />
                </div>
                <p className="text-sm mt-2">{item.label}</p>
                <div className="flex items-center justify-between ">
                  <p className='text-[12px]'>{item.price}</p>
                  <div className="flex items-center gap-1">
                    <img src={Rating} alt="Rating" className='w-12' />
                    <p className='text-[12px]'>4.0</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


