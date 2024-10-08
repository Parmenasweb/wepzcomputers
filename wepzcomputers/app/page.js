import Navbar from "@/components/homepageComps/Navbar";
import Hero from "@/components/homepageComps/Hero";
import StatsComponent from "@/components/homepageComps/Stats";
import Services from "@/components/homepageComps/Services";
import HowItWorks from "@/components/homepageComps/HowItWorks";
import BrandsWeWorkWith from "@/components/homepageComps/logoHeads";
import ScatteredTestimonialsSection from "@/components/homepageComps/testimonials";
import WhyChooseUs from "@/components/homepageComps/why-us";
import FAQ from "@/components/homepageComps/Faqs";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      <Services />
      <HowItWorks />
      <BrandsWeWorkWith />
      <WhyChooseUs />
      <ScatteredTestimonialsSection />
      <FAQ />
    </div>
  );
}
