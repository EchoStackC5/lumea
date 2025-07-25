import { X } from "lucide-react"
import cheekbone from "../../assets/images/cheekbone.jpg"
import { Download } from "lucide-react"
import { Link } from "react-router"

export default function ClientTableDetail({ detail, visible, setShowDetail }) {
    console.log(detail ,"user detail")
    
    

    return (
        <section className="bg-white rounded-xl p-3 shadow-md w-[22%] h-auto space-y-4 mb-4" style={{ display: visible ? 'block' : 'none' }}>
            <div className="flex justify-between">
                <h1 className="md:text-lg text-md">Client Details</h1>
                <button onClick={() => { setShowDetail(false) }} className="md:h-[25px] md:w-[25px] h-4 w-4 rounded-full bg-gradient-to-r from-[#1A151D] to-[#755F83] text-white flex justify-center items-center"><X /></button>
            </div>
            <div className="flex flex-col justify-center mt-3 items-center">
                <img src={detail.user?.profile?.image || cheekbone} alt="" className="rounded-full md:h-[185px] md:w-[185px]" />
                <p>{detail.user?.name}</p>
            </div>
            <div className="flex justify-between px-2">
                <h1>{detail.gender}</h1>
                <p>{detail.skinType}</p>
            </div>
            <p className="text-[#6B6A6C] px-2 ">{detail.description}</p>
            <div className="flex gap-3 py-4">
                <Link to="/demoverview"
                    className="md:h-10 md:w-35 text-sm border rounded-full hover:bg-secondary-text hover:text-white cursor-pointer flex justify-center items-center">View User Data
                </Link>
                <div className="md:h-10 md:w-35 text-xs border rounded-full hover:bg-secondary-text hover:text-white cursor-pointer flex justify-center items-center">
                    {/* <Link to= "/ai-analyze">
                        View AI Skin Report
                    </Link> */}

                    <Link
                        to={`/ai-analyze/report/${detail.user?.id}`}
                        state={{ analysisData: detail.analysisReport?.analysis }}
                    >
                        View AI Skin Report
                    </Link>
                </div>
            </div>
        </section>
    )
}