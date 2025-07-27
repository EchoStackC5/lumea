
import CometChatNoSSR from "@/CometChat/CometChatNoSSR/CometChatNoSSR";
import ClientDashboardNav from "@/Components/Clientdashboardcomponent/ClientDashboardNav";
export default function ClientCalls(){
    return(
        <>
        <ClientDashboardNav/>
        <div className="min-h-screen bg-backgrounds ">
        <CometChatNoSSR/>

        </div>
        </>
    )
}