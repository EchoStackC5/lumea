import lipgloss from "../../assets/images/lipgloss.png"
import Balm from "../../assets/images/Balm.png"
import lipstick from "../../assets/images/lipstick.png"
import Rating from "../../assets/images/RatingHalf.svg";


export default function RecommendedProducts() {
    const products = [
        { img: lipgloss, label: "Blush", price: "$20" },
        { img: Balm, label: "Face mask", price: "$23" },
        { img: lipstick, label: "Body oil", price: "$20" }
    ];

    return (
        <div>
            <div className="bg-[#F6EBFD] rounded-xl border border-light-border w-full max-w-[268px] h-auto lg:h-[178px] mx-auto mt-4">
                <h3 className="font-semibold pt-2 ml-2">Recommended Products</h3>
                <div className="grid grid-cols-3 gap-3 sm:gap-5 px-4 mt-4">
                    {products.map((item, idx) => (
                        <div key={idx}>
                            <div className={`w-[67.17px] h-[85.26px] bg-[#EFD6FF] flex items-center justify-center ${idx === 1 ? 'rounded-full' : ''}`}>
                                <img src={item.img} alt={item.label} className="object-cover max-h-full" />
                            </div>
                            <p className="text-sm mt-2">{item.label}</p>
                            <div className="flex items-center justify-between ">
                                <p className='text-[12px]'>{item.price}</p>
                                <div className="flex items-center gap-1">
                                    <img src={Rating} alt="Rating" className='w-12' />
                                    <p className='text-[12px]'>4.0</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className=" w-full py-3 hover:bg-yellow-500 hover:text-darkest bg-[#1A151D] rounded-full text-white flex justify-center items-center cursor-pointer gap-1 mt-5">
                + Add new note
            </button>
        </div>
    )
}