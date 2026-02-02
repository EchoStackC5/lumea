import PlainBar from "./plainBar";

export default function AuthLayout({ 
  title, 
  children, 
  showPlainBar = false 
}) {
  return (
    <main className="">
      {showPlainBar && <PlainBar />}
      <div className="w-full min-h-screen font-inter flex justify-center items-center pt-28 px-4 bg-[#F6EBFD]">
        <div className="bg-white rounded-[15px]  px-6 pt-10 pb-12 md:pt-12 md:px-[72px] md:pb-12 w-full max-w-[540px]">
          <h1 className="text-xl md:text-[28px] font-semibold text-[#09070A] leading-[28px] mb-8">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </main>
  );
}