
import { X } from 'lucide-react';
import Face from "../../assets/images/u.png";
import { format } from 'date-fns';
import { Badge } from "../ui/badge";

const AppointmentDetailsCard = ({ detail, visible, setShowDetail }) => {
  if (!visible) return null;

  const getStatusVariant = (status) => {
    const statusLower = status?.toLowerCase();
    switch (statusLower) {
      case "completed":
      case "accepted":
        return "accepted";
      case "rejected":
        return "rejected";
      case "pending":
      case "in progress":
        return "pending";
      default:
        return "default";
    }
  };

  return (
    <div className="bg-white rounded-lg h-[504px] border w-[296px] p-4 relative flex-col justify-between mt-5 hidden lg:flex">
      <div className='flex justify-between'>
        <button
        onClick={() => setShowDetail(false)}
        className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800"
      >
        <X size={20} />
      </button>
      <h2 className="text-lg font-dm-sans font-semibold text-gray-900 mb-3">Appointment Details</h2>
      </div>
      

      <div className="text-center flex flex-col items-center justify-center ">
        <div className='flex flex-col justify-center items-center'>
          

          <div className="w-45 h-45 rounded-full overflow-hidden border-2  mx-auto mb-3">
            <img 
              src={detail.avatar || Face}
              alt="Doctor Avatar" 
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-lg font-inter font-semibold flex gap-3 text-gray-900 mb-1"><span className='font-medium text-dashboar-secondary font-inter'></span> {detail.doctorName}</h3>

          <p className="text-gray-600 text-sm pt-3 font-inter flex gap-3"> <span className='font-medium '> Appointment Date:  </span>
            {format(new Date(detail.date), "MMMM d,yyyy")}  
          </p>

          
        </div>

        <div className=" w-full flex flex-col gap-3">
          <div className="mt-5 flex justify-center">
            <Badge variant={getStatusVariant(detail.status)} className="w-full py-2 text-sm font-poppins justify-center">
              {detail.status}
            </Badge>
          </div>
         
          <button className="flex-1 w-full py-2 text-sm bg-transparent font-poppins text-gray-900 cursor-pointer  rounded-full border border-gray-300 hover:bg-gray-50">
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsCard;
