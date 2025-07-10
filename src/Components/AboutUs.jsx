import homeAnalysis from "../assets/lumeaAnalysis.svg";
export default function AboutUs() {
    return(
        <section id="#about-us" className=" h-screen flex flex-col gap-8">
            <div className="max-w-md flex flex-col gap-8">
                <h1 className="text-3xl font-dm-sans font-medium">Redefining <span className="font-system-curved">Skincare </span>with <span></span>AI</h1>
            <p className="text-[16px] font-inter ">Empowering individuals through science-backed skincare, expert guidance, and AI-driven care</p>
            </div>
            
                
                    <img src={homeAnalysis} alt="Home Analysis" className="w-full h-auto" />
                
               
            

        </section>
    )
}