import HomeNav from "../Components/NavHome";
import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/AboutUs";
import HowItWorks from "../Components/HowItWorks";
import HowItWorksSec2 from "../Components/HowItWorksSec2";
import SmartMatches from "../Components/SmartMartches";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <section className="md:space-y-28 space-y-16 sm:space-y-24 lg:space-y-32 bg-backgrounds">
      <HomeNav/>
      <HeroSection/>
      <div className="max-w-9xl mx-auto px-8 md:space-y-28 space-y-16 sm:space-y-24 lg:space-y-32">
         <AboutUs/>
         <HowItWorks/>
         <HowItWorksSec2/>
         <SmartMatches/>
         
      </div>
      <Footer/>
     
    </section>
  );
}