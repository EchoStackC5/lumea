import pinkPallet from "../assets/pinkPallete.jpeg";
import skinMan from "../assets/skinMan.jpeg";
import skinWoman from "../assets/skinWoman.jpeg";
import lightPallets from "../assets/lightPalletes.jpeg";
import { motion } from "motion/react";

export default function SmartMatches(){
    return(
       <section className="flex flex-col gap-8">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8"
         >
                <h1 className="text-2xl md:text-3xl font-dm-sans font-medium">Smart <span className="font-system-curved">Matches </span>for Healthy <span className="font-system-curved">Skin</span></h1>
                <p className="text-[16px] font-inter ">Empowering individuals through science-backed skincare, expert guidance, and AI-driven care</p>
         </motion.div>
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
            className="grid grid-cols-2 gap-3"
         >
             {[pinkPallet, skinMan, skinWoman, lightPallets].map((src, index) => (
                 <motion.img
                    key={index}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="w-full h-[300px] sm:h-[300px] md:h-[450px] lg:w-[650px] lg:h-[600px] object-cover"
                 />
             ))}
         </motion.div>
       </section>
    )
}