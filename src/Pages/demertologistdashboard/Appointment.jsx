import Calender from "../../Components/Dermetologistcomponent/Calender"
import ClientTableDetail from "../../Components/Dermetologistcomponent/ClientTableDetail"
import AppointmentTable from "../../Components/Dermetologistcomponent/AppointmentTable"


export default function Appointment() {
    return(
        <section className="bg-[#F6EBFD] h-full p-5">
        {/* <Dashboardnavbar/> */}
        <div className="flex gap-6">
            <Calender />
            <AppointmentTable />
          <ClientTableDetail />
        </div>
      </section>
    )
}