import Navbar from "@/Components/Navbar";
import DashboardTabs from "@/Components/ui/DashboardTabs";
import CometChatNoSSR from "@/CometChat/CometChatNoSSR/CometChatNoSSR";

export default function DemCalls(){
    const dermatologistTabs = [
        { label: "Overview", path: "/dermetologistdashboard" },
        { label: "Appointments", path: "/appointment" },
        { label: "Calls", path: "/dem-calls" },
    ];

    return(
        <>
        <Navbar/>
        <DashboardTabs tabs={dermatologistTabs} />
        <div className="min-h-screen bg-backgrounds ">
            <CometChatNoSSR/>
        </div>
        </>
    )
}