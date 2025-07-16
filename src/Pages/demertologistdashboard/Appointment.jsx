import Calender from "../../Components/Dermetologistcomponent/Calender"
import ClientTableDetail from "../../Components/Dermetologistcomponent/ClientTableDetail"
import AppointmentTable from "../../Components/Dermetologistcomponent/AppointmentTable"
import Dashboardnavbar from "@/Components/Dashboardnavbar"
import { useState } from "react"

export default function Appointment() {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  const [] = useState();
  const [] = useState();

    return(
        <section className="bg-[#F6EBFD] h-full p-5">
        {/* <Dashboardnavbar/> */}
        <div className="flex gap-6">
            <Calender />
            <AppointmentTable setDetail={setAppointmentDetail} setShowDetail={setShowDetail} showDetail={showDetail} />
          <ClientTableDetail detail={appointmentDetail} visible={showDetail} setShowDetail={setShowDetail} />
        </div>
      </section>
    )
}