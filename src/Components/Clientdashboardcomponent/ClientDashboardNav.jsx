import lumeaLogo from "@/assets/lumeaLogo.svg";
import { useLocation } from "react-router";
import { Link } from "react-router";
import UserProfile from "../custom/UserProfile";
import lumiaLogo from "@/assets/lumeaLogoWHite.svg";

export default function ClientDashboardNav() {
    const location = useLocation();
    return (
        <nav className="
            sticky top-0 bottom-0 left-0 right-0 z-50 isolate transition-all duration-300 ease-in-out bg-darkest text-white
            
        ">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-between items-center text-white px-6 sm:px-8 py-3">
                <img src={lumiaLogo} alt="Lumea Logo" className="cursor-pointer"></img>
                <div className="cursor-pointer font-roboto font-light text-[16px] flex gap-4">
                    <Link
                        to="/clientdashboard"
                        className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/clientdashboard" ? "text-active-state font-bold" : ""
                            }`}
                    >
                        Overview
                    </Link>
                    <Link
                        to="/appointmentpage"
                        className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/appointmentpage" ? "text-active-state font-bold" : ""
                            }`}
                    >
                        Appointments
                    </Link>
                    <Link
                        to="/clientcalls"
                        className={`hover:text-primary-color hover:font-bold transition-all duration-200 font-medium ${location.pathname === "/clientcalls" ? "text-active-state font-bold" : ""
                            }`}
                    >
                        Calls
                    </Link>
                </div>

               <UserProfile/>
            </div>

            {/* Mobile/Tablet Header - Only Logo and User Profile */}
            <div className="lg:hidden flex justify-between items-center text-white px-4 py-3">
                <img src={lumiaLogo} alt="Lumea Logo" className="h-8 cursor-pointer"></img>
                <UserProfile/>
            </div>
        </nav>
    );
}