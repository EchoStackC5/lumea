import Modal from "../demertologistdashboard/Modal"
import UserDetails from "@/Components/Clientdashboardcomponent/UserDetails";
import ClientAppointment from "../../Components/Clientdashboardcomponent/ClientAppointment"
import ClientSkinReport from "@/Components/Clientdashboardcomponent/ClientSkinReport";
import ClientRecentSkinAnalysis from "@/Components/Clientdashboardcomponent/ClientRecentSkinAnalysis";
import ClientDashboardNav from "@/Components/Clientdashboardcomponent/ClientDashboardNav";

export default function Clientdashboard() {
  return (
    <>
    <ClientDashboardNav/>
      <section className="bg-[#F6EBFD] h-full p-5">
        {/* <Dashboardnavbar/> */}
        <div className="flex flex-col justify-between md:flex-row gap-6 mt-7 px-6">
          <div>
            <UserDetails />
            <ClientAppointment />
            <ClientRecentSkinAnalysis />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row md:flex-col">
            <Modal />
           <ClientSkinReport />
          </div>
          
        </div>
      </section>
    </>
  );
}