import lumeaLogo from "../assets/lumeaLogo.svg";
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react";
import { Link } from "react-router"
import { useLocation } from "react-router";
import UserProfile from "./custom/UserProfile";
import lumiaLogo from "../assets/lumeaLogoWHite.svg";

export default function Navbar() {
    // const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // useEffect(() => {
    //     const handScroll = () => {
    //         const scrollPosition = window.scrollY
    //         setIsScrolled(scrollPosition > 50)
    //     }

    //     window.addEventListener('scroll', handScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handScroll)
    //     }
    // }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="
            sticky top-0 bottom-0 left-0 right-0 z-50 isolate transition-all duration-300 ease-in-out bg-darkest text-white
            
        ">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-between items-center text-white px-6 sm:px-8 py-3">
                <img src={lumiaLogo} alt="Lumea Logo" className="cursor-pointer"></img>
                <div className="cursor-pointer font-roboto font-light text-[16px] flex gap-4">
                    <Link
                        to="/dermetologistdashboard"
                        className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/dermetologistdashboard" ? "text-active-state font-bold" : ""
                            }`}
                    >
                        Overview
                    </Link>
                    <Link
                        to="/appointment"
                        className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/appointmentpage" ? "text-active-state font-bold" : ""
                            }`}
                    >
                        Appointments
                    </Link>
                    <Link
                        to="/dem-calls"
                        className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/dem-calls" ? "text-active-state font-bold" : ""
                            }`}
                    >
                        Calls
                    </Link>
                </div>

               <UserProfile/>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex justify-between items-center text-white px-4 py-4  pb-4 space-y-4  backdrop-blur-md border-t bg-black/20">
                <img src={lumeaLogo} alt="Lumea Logo" className="cursor-pointer"></img>
                <button
                    className="p-2 text-white hover:text-primary-color transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out  ${isMenuOpen
                    ? 'max-h-70 bg-black/20 backdrop-blur-md border-t border-white/20 opacity-100 overflow-y-auto'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="px-6 pb-4 space-y-4  backdrop-blur-md ">
                    <div className="flex flex-col space-y-3 text-white">
                        <Link
                            to="/dermetologistdashboard"
                            className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/dermetologistdashboard" ? "text-active-state font-bold" : ""
                                }`}
                        >
                            Overview
                        </Link>
                        <Link
                            to="/appointment"
                            className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/appointmentpage" ? "text-active-state font-bold" : ""
                                }`}
                        >
                            Appointments
                        </Link>
                        <Link
                            to="/dem-calls"
                            className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/dem-calls" ? "text-active-state font-bold" : ""
                                }`}
                        >
                            Calls
                        </Link>
                         <UserProfile/>
                     
                    </div>
                </div>
            </div>
        </nav>
    );
}