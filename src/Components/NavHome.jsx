import lumeaLogo from "../assets/lumeaYellow.svg";
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react";
import { Link } from "react-router"


export default function HomeNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)
        }

        window.addEventListener('scroll', handScroll)
        return () => {
            window.removeEventListener('scroll', handScroll)
        }
    }, []);

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
        <nav className={`
            fixed top-0 left-0 right-0 z-50 isolate transition-all duration-300 ease-in-out 
            ${isScrolled
                ? 'bg-black/15 backdrop-blur-xl shadow-2xl '
                : 'bg-transparent backdrop-blur-none shadow-none border-none'
            }
        `}>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-between items-center text-white px-6 sm:px-8 py-4">
                <img src={lumeaLogo} alt="Lumea Logo" className="cursor-pointer w-28"></img>
                <div className="cursor-pointer font-roboto font-light text-[14px] flex gap-4">
                    <a href="#home" className="hover:text-primary-color hover:font-bold transition-all duration-200 font-medium"> Home</a>
                    <a href="#about-us"  className="hover:text-primary-color hover:font-bold transition-all duration-200 active:text-primary-color active:font-bold font-medium"> About Us</a>
                    <Link to="" className="hover:text-primary-color hover:font-bold transition-all duration-200 font-medium"> How it Works</Link>
                    <a href="#find-a-cosmotologist" className="hover:text-primary-color hover:font-bold transition-all duration-200 font-medium"> Find a Cosmetologist</a>
                </div>
                <Link to="/signUp" className=" text-sm px-6 py-2 rounded-full hover:text-white font-medium bg-yellow-500 text-darkest hover:bg-[#9D82B6] py-3  transition-all duration-200">Register as a Cosmetologist</Link>
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
            <div className={`lg:hidden transition-all duration-300 ease-in-out  ${
                isMenuOpen
                    ? 'max-h-70 bg-black/20 backdrop-blur-md border-t border-white/20 opacity-100 overflow-y-auto'
                    : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="px-6 pb-4 space-y-4  backdrop-blur-md ">
                    <div className="flex flex-col space-y-2 text-white">
                        <a href="#home"
    
                            className="hover:text-primary-color transition-all duration-200 py-2"
                           
                        > 
                            Home
                        </a>
                        < a href="#about-us"
                            className="hover:text-primary-color transition-all duration-200 py-2"
                         
                        > 
                            About Us
                        </a>
                        <Link to="" 
                            
                            className="hover:text-primary-color transition-all duration-200 py-2"
                            
                        > 
                           How it Works
                        </Link>
                        <a href="#find-a-cosmotologist"
                            to="/blogs" 
                            className="hover:text-primary-color transition-all duration-200 py-2"
                           
                        > 
                            Find a Cosmetologist
                        </a>
                        <Link 
                            to="/sign-up" 
                            className="hover:bg-[#9D82B6] bg-yellow-500 text-darkest hover:text-white px-6 py-3 rounded-full text-sm font-medium text-darkest-heading hover:bg-primary-color transition-all duration-200 text-center mt-2"
                          
                        >
                           Register as a Cosmetologist
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}