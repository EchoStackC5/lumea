import modelImage from "@/assets/modelImage.jpeg";
import { MessageCircleMore, Video } from "lucide-react";

export default function CallsAppointmentCard() {
  return (
    <div className="group cursor-pointer">
      <div className="flex bg-backgrounds items-center justify-between px-3 py-2 rounded-lg border border-light-border mb-4 transition-all duration-200 bg-gradient-to-r from-transparent to-transparent group-hover:from-[#1A151D] group-hover:to-[#755F83]">
        <div className="flex items-center gap-3">
             <img src={modelImage} alt="Model" className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-1">
          <p className="text-sm text-dashboar-secondary group-hover:text-white/70">January 5th 2026</p>
          <h1 className="text-lg font-normal font-inter text-primary-dark group-hover:text-white">Virtual skin review</h1>
        </div>
        </div>
       
        <div className="flex flex-col items-end gap-2">
          <p className="text-xs text-dashboar-secondary group-hover:text-white/70">10:00 AM - 10:30 AM</p>
          <div className="flex justify-end text-left gap-2">
            <button className="bg-purple-600/15 group-hover:bg-white cursor-pointer w-8 h-8 flex items-center justify-center gap-2 px-2 rounded-full text-purple-600 hover:bg-white transition-all duration-200">
              <MessageCircleMore className="w-7 h-7" />
            </button>
            <button className="bg-green-600/15 group-hover:bg-white cursor-pointer w-8 h-8 flex items-center justify-center gap-2 px-2 rounded-full text-green-600 hover:bg-white transition-all duration-200">
              <Video className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
