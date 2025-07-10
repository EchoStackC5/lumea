
import AiVideo from '../assets/aiVideoTzone.mp4';
export default function AboutUs() {
    return(
        <section id="about-us" className=" flex flex-col gap-8">
            <div className="max-w-md flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                <h1 className="text-2xl md:text-3xl font-dm-sans font-medium">Redefining <span className="font-system-curved">Skincare </span>with <span></span>AI</h1>
            <p className="text-[16px] font-inter ">Empowering individuals through science-backed skincare, expert guidance, and AI-driven care</p>
            </div>
       
                    <video className="w-full  object-cover " autoPlay loop muted>
                        <source src={AiVideo} type="video/mp4" />
                        </video>
        </section>
    )
}