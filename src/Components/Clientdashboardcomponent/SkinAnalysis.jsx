import upload from "../../assets/images/Frame.png"

export default function SkinAnalysis() {
  return (
    <div className="w-full min-h-screen flex justify-center items-start py-10 px-4 bg-[#F6EBFD]">
      <div className="bg-white rounded-[15px] shadow-[40px_40px_60px_#E4E6EA] px-6 pt-10 pb-12 md:pt-12 md:px-[72px] md:pb-12 w-full max-w-[540px] border border-gray-200">
        <h1 className="text-[24px] md:text-[28px] font-semibold text-[#09070A]  mb-4 text-center">
          Analyze Your Skin
        </h1>

        <form className="space-y-8">
          {/* Upload Image */}
          <div className="space-y-2 flex justify-center">
            <div className="relative w-[423px] h-[187px] bg-[#F4E8FC] rounded-[10px] p-[15px]">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className="w-full h-full flex flex-col items-center justify-center gap-[10px] border-2 border-[#F4E8FC]  rounded-[10px] pointer-events-none">
                <img src={upload} alt="Upload Icon" className="w-15 h-15" />
                <p className="text-center text-sm text-[#6B6A6C] px-4 leading-snug">
                  <span className="text-[#4E1571] font-medium">Click to upload</span> or drag and drop your image
                </p>
              </div>
            </div>
          </div>

          {/* Analyze Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-[245px] h-[55px] bg-black text-white rounded-full flex items-center justify-center hover:bg-[#4E1571] transition"
            >
              Analyze Skin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
