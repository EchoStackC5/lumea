import footerLogo from "../assets/footerLogo.svg";;
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Link } from "react-router";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#F0EADC] py-3 md:py-6 lg:py-8">
        <div className="max-w-9xl mx-auto px-8 space-y-6 md:space-y-8 lg:space-y-10">
           <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col gap-2  justify-center items-center md:items-center lg:items-start">
              <img src={footerLogo} alt="Footer Logo" className="w-32 md:w-40 lg:w-38 " />
              <p className="font-inter text-center md:text-start lg:text-start text-sm sm:ext-smsm md:text-lg lg:text-lg">AI-Powered Skincare & Cosmetologist Booking Platform</p>
            </div>
            <div className="flex  ">
              <Linkedin className="text-secondary-text hover:text-[#6F4C7A] transition-colors duration-200" />
              <Facebook className="text-secondary-text hover:text-[#6F4C7A] transition-colors duration-200 " />
              <Instagram className="text-secondary-text hover:text-[#6F4C7A] transition-colors duration-200 " />
            </div>
            <div>
               <p className="font-inter text-sm sm:text-sm md:text-lg lg:text-lg">Virtual-First Platform </p>
                <p className="font-inter text-sm sm:text-sm md:text-lg lg:text-lg">hello@lumeaskin.com</p>
            </div>
           </div>
           <p className="font-dm-sans lg:text-9xl text-6xl sm:text-7xl md:text-8xl text-center font-medium">Luméa <span className="font-system-curved">Skin</span></p>
           <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 ">
              <p className="font-inter text-sm ">Virtual-First Platform </p>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center ">
                <span className="font-inter text-sm ">Home</span>
                 <span className="font-inter text-sm ">About Us</span>
                 <span className="font-inter text-sm ">How it Works</span>
                  <span className="font-inter text-sm ">Find a Cosmetologist</span>
              </div>
              <p className="font-inter text-sm md:text-center lg:text-start text-center ">Caring for every skin, powered by science and empathy.</p>
                
           </div>
        </div>
       
      </footer>
    </>
  );
}