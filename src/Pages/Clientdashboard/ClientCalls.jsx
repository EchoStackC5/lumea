import CometChatNoSSR from "@/CometChat/CometChatNoSSR/CometChatNoSSR";
import ClientDashboardNav from "@/Components/Clientdashboardcomponent/ClientDashboardNav";
import DashboardTabs from "@/Components/ui/DashboardTabs";

export default function ClientCalls(){
    const clientTabs = [
        { label: "Overview", path: "/clientdashboard" },
        { label: "Appointments", path: "/appointmentpage" },
        { label: "Calls", path: "/clientcalls" },
    ];

    return(
        <>
        <ClientDashboardNav/>
        <DashboardTabs tabs={clientTabs} />
        <div className="min-h-screen bg-backgrounds ">
        <CometChatNoSSR/>

        </div>
        </>
    )
}