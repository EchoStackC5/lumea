import CalendarDemo from "../custom/CalendarDem";
import Today from "./Today";
export default function CalendarAndDay(){
    return(
        <div className="bg-white rounded-md px-3 py-3 border border-light-border flex flex-col gap-3">
            <p className="text-lg font-medium font-dm-sans">Calendar</p>
            <CalendarDemo/>
            <Today/>

        </div>
    )
}