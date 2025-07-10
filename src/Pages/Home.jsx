import HomeNav from "../Components/NavHome";
import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/AboutUs";
export default function Home() {
  return (
    <section className="space-y-32">
      <HomeNav/>
      <HeroSection/>
      <div className="max-w-9xl mx-auto px-8">
         <AboutUs/>
      </div>
     
    </section>
  );
}