
import { motion } from "motion/react";
import AiVideo from '../assets/aiVideoTzone.mp4';
export default function AboutUs() {
    return (
        <section id="about-us" className=" flex flex-col gap-8">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-md flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8"
            >
                <h1 className="text-2xl md:text-3xl font-dm-sans font-medium">Redefining <span className="font-system-curved">Skincare </span>with <span className='font-system-curved'>AI</span></h1>
                <p className="text-[16px] font-inter ">Empowering individuals through science-backed skincare, expert guidance, and AI-driven care</p>
            </motion.div>
            <motion.video 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full  object-cover " autoPlay loop muted
            >
                <source src={AiVideo} type="video/mp4" />
            </motion.video>
        </section>
    )
}