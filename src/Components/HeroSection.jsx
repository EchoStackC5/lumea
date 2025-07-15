import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="bg-[url(./assets/skincare7.jpg)] bg-cover bg-center h-screen relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="flex flex-col justify-center items-center h-full relative z-10 text-white px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-dm-sans">
            Clean <span className="font-system-curved">Skin</span>
          </p>
          <hr className="w-12 sm:w-16 h-1 bg-white" />
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dm-sans">
            Starts <span className="font-system-curved">Here</span>
          </p>
        </div>

        <p className="max-w-xl mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-dm-sans">
          Discover your skin’s true needs with AI analysis and expert cosmetologist guidance.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-md px-2">
          <Link
            to="/skin-analysis-form"
            className="hover:bg-[#9D82B6] hover:text-white text-center px-6 py-3 rounded-full font-medium bg-yellow-500 text-darkest transition-all duration-200"
          >
            Analyze My Skin
          </Link>
          <Link
            to="/appointment-form"
            className="bg-transparent border border-white text-white text-center px-6 py-3 rounded-full font-medium hover:bg-yellow-500 hover:text-darkest hover:border-none transition-all duration-200"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
