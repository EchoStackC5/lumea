

import AvailableSlot from "../../Components/Dermetologistcomponent/AvailableSlot"


export default function Calender() {
    return (
        <section className="bg-white rounded-xl p-3 shadow-md w-[296px] h-[239.2px] space-y-4 mb-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-inter text-[#1A151D]">Calender</h1>
                <button className="md:h-[20px] md:w-[20px] h-8 w-8 rounded-full bg-gradient-to-r from-[#1A151D] shadow-md to-[#755F83] text-white flex justify-center items-center">+</button>
            </div>
        
            
            <AvailableSlot />
        </section>
    )
}