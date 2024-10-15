import Navbar from "@/components/homepageComps/Navbar";
import Hero from "@/components/homepageComps/Hero";
import StatsComponent from "@/components/homepageComps/Stats";
import Services from "@/components/homepageComps/Services";
import HowItWorks from "@/components/homepageComps/HowItWorks";
import BrandsWeWorkWith from "@/components/homepageComps/logoHeads";
import ScatteredTestimonialsSection from "@/components/homepageComps/testimonials";
import WhyChooseUs from "@/components/homepageComps/why-us";
import FAQ from "@/components/homepageComps/Faqs";
import HomeServices from "@/components/homepageComps/homeServices";
import YouTubePlayer from "@/components/homepageComps/youtue-video";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      <HomeServices />
      <Services />
      <HowItWorks />
      <YouTubePlayer
        videoId="dMMELRnG7nw"
        title="Hear from wepzcomputers"
        channelName="wepzcomputers"
      />
      <BrandsWeWorkWith />
      <WhyChooseUs />
      <ScatteredTestimonialsSection />
      <FAQ />
    </div>
  );
}
