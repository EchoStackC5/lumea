
import Today from "../../Components/Dermetologistcomponent/Today"
import CalendarDemo from '../custom/CalendarDem';

export default function CalendarIcon() {
    return(
        <section className='bg-white rounded-md px-3 py-3 border border-light-border flex flex-col gap-3'>
            <p className="text-lg font-medium font-dm-sans">Calendar</p>
            <CalendarDemo/>
             <Today />
        </section>
       
    )
   
    
}