import Dashboardnavbar from "../../Components/Dashboardnavbar";
import AppointmentsDem from "../../Components/Dermetologistcomponent/AppointmentsDem";
import Skeletal from "../../Components/Dermetologistcomponent/Skeletal";
import AppointmentCalender from "../../Components/Dermetologistcomponent/AppointmentCalender"

export default function Dermetologistdashboard() {
  return (
    <>
      <section className="bg-[#F6EBFD] h-full p-5">
        {/* <Dashboardnavbar/> */}
        <div className="flex gap-6">
          <div>
            <AppointmentCalender />
          </div>
          <Skeletal />
          <AppointmentsDem />
        </div>
      </section>
    </>
  );
}