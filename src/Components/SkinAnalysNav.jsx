import lumiaLogo from "../assets/lumeaLogoWHite.svg";
export default function SkinAnalysisNav(){
    return(
        <nav className="bg-darkest w-full h-16 sticky top-0 left-0 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
            <img src={lumiaLogo} alt="Lumia Logo" className="h-10" />
        </nav>
    )
}