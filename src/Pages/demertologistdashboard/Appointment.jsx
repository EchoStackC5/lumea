import Calender from "../../Components/Dermetologistcomponent/Calender"
import ClientTableDetail from "../../Components/Dermetologistcomponent/ClientTableDetail"
import AppointmentTable from "../../Components/Dermetologistcomponent/AppointmentTable"
import Navbar from "@/Components/Navbar"
import { useState, useEffect } from "react"
import Loaders from "@/Components/Loaders"

export default function Appointment() {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  const [reload, setReload] = useState(false);
  const [] = useState();
  const [loading, setIsloading] = useState(true)

  useEffect(()=>{
    const loadPage = setTimeout(()=>{
      setIsloading(false)
    }, 3000)
    return() => clearTimeout(loadPage);
  }, []);

    return(
        <>
        <Navbar/>
        <section className="bg-[#F6EBFD] h-full">
        {loading? (
          <div className='flex justify-center items-center h-full'><Loaders/></div>
        ):(<div className="flex gap-6 py-5 px-3 flex-col md:flex-row">
            <Calender setReload={setReload}/>
            <AppointmentTable setDetail={setAppointmentDetail} setShowDetail={setShowDetail} showDetail={showDetail} setReload={setReload} reload={reload} />
          <ClientTableDetail detail={appointmentDetail} visible={showDetail} setShowDetail={setShowDetail} />
        </div>)}
      </section>
      </>
    )
}