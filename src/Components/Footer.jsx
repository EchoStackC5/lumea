import footerLogo from "../assets/footerLogo.svg";;
import lumeaLogo from "../assets/lumeaLogoWHite.svg"
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <>
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#124946] text-white py-3 md:py-6 lg:py-8"
      >
        <div className="max-w-9xl mx-auto px-8 space-y-6 md:space-y-8 lg:space-y-10">
           <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col gap-2  justify-center items-center md:items-center lg:items-start">
              <img src={lumeaLogo} alt="Footer Logo" className=" " />
              <p className="font-inter text-center md:text-start lg:text-start text-sm sm:ext-sm md:text-lg lg:text-lg text-white/85">AI-Powered Skincare & Cosmetologist Booking Platform</p>
            </div>
            <div className="flex gap-4 text-purple-300">
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin className="  transition-colors duration-200" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Facebook className="  transition-colors duration-200 " />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Instagram className="  transition-colors duration-200 " />
              </a>
            </div>
            <div>
               <p className="font-inter text-sm sm:text-sm md:text-lg lg:text-lg text-white/85">Virtual-First Platform </p>
                <p className="font-inter text-sm sm:text-sm md:text-lg lg:text-lg text-white/85 ">hello@lumeaskin.com</p>
            </div>
           </div>
           <motion.p 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="font-dm-sans lg:text-[230px] text-6xl sm:text-7xl md:text-8xl text-center font-medium"
           >
             Luméa <span className="font-system-curved">Skin</span>
           </motion.p>
           {/* <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 ">
              <p className="font-inter text-sm ">Virtual-First Platform </p>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center ">
                <a href="#home" className="font-inter text-sm hover:text-[#6F4C7A] hover:font-bold transition-all duration-200 cursor-pointer">Home</a>
                <a href="#about-us" className="font-inter text-sm hover:text-[#6F4C7A] hover:font-bold transition-all duration-200 cursor-pointer">About Us</a>
                <a href="#how-it-works" className="font-inter text-sm hover:text-[#6F4C7A] hover:font-bold transition-all duration-200 cursor-pointer">How it Works</a>
                <a href="#find-a-cosmotologist" className="font-inter text-sm hover:text-[#6F4C7A] hover:font-bold transition-all duration-200 cursor-pointer">Find a Cosmetologist</a>
              </div>
              <p className="font-inter text-sm md:text-center lg:text-start text-center ">Caring for every skin, powered by science and empathy.</p>
                
           </div> */}
        </div>
       
      </motion.footer>
    </>
  );
}