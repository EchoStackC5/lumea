import pinkPallet from "../assets/pinkPallete.jpeg";
import skinMan from "../assets/skinMan.jpeg";
import skinWoman from "../assets/skinWoman.jpeg";
import lightPallets from "../assets/lightPalletes.jpeg";

export default function SmartMatches(){
    return(
       <section className="flex flex-col gap-8">
         <div className="max-w-md flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                <h1 className="text-2xl md:text-3xl font-dm-sans font-medium">Smart <span className="font-system-curved">Matches </span>for Healthy <span className="font-system-curved">Skin</span></h1>
                <p className="text-[16px] font-inter ">Empowering individuals through science-backed skincare, expert guidance, and AI-driven care</p>
            </div>
<div className="grid grid-cols-2 gap-3">
  <img
    src={pinkPallet}
    alt="Pink Pallet"
    className="w-full h-[300px] sm:h-[300px] md:h-[450px] lg:w-[650px] lg:h-[600px] object-cover"
  />
  <img
    src={skinMan}
    alt="Skin Man"
    className="w-full h-[300px] sm:h-[300px] md:h-[450px] lg:w-[650px] lg:h-[600px] object-cover"
  />
  <img
    src={skinWoman}
    alt="Skin Woman"
    className="w-full h-[300px] sm:h-[300px] md:h-[450px] lg:w-[650px] lg:h-[600px] object-cover"
  />
  <img
    src={lightPallets}
    alt="Light Pallets"
    className="w-full h-[300px] sm:h-[300px] md:h-[450px] lg:w-[650px] lg:h-[600px] object-cover"
  />
</div>


       </section>
    )
}