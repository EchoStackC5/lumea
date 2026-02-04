import React from 'react';
import { Camera, Scan } from 'lucide-react';
import { useNavigate } from 'react-router';
import emptyFace from "../../assets/emptyFace.jpeg";

export default function NoFaceScan({ onStartScan }) {
  const navigate = useNavigate();

  const handleAnalyzeSkin = () => {
    navigate('/skin-analysis-form');
  };

  return (
    <div className="relative bg-gradient-to-br from-[#EAC8FF] to-[#FEF8FE] shadow-xs rounded-2xl border border-light-border h-auto lg:h-[659px] w-full lg:w-[800px] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${emptyFace})`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-purple-950/40"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">
        {/* Main content */}
        <div></div>
        
        {/* Bottom content with button and info card */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className='flex shrink-0 flex-col'>
            <h1 className='md:text-xl text-lg text-white font-medium'>You have no skin analysis yet.</h1>
            <p className='text-white font-normal text-lg'>Let's fix that!!!</p>
          </div>
    
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div  onClick={handleAnalyzeSkin} className="w-8 h-8 cursor-pointer bg-darkest rounded-lg flex items-center justify-center">
                <Scan className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">AI Analysis</span>
            </div>
            <p className="text-white/80 text-sm">
              Advanced skin detection and personalized recommendations
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </div>
  );
}