import HeroSlider from "@/components/home/HeroSlider";
import StatsBar from "@/components/home/StatsBar";
import AboutOverview from "@/components/home/AboutOverview";
import LeadershipSection from "@/components/home/LeadershipSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import EquipmentSection from "@/components/home/EquipmentSection";
import TendersSection from "@/components/home/TendersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutOverview />
      <ServicesSection />
      <FeaturedProjects />
      <EquipmentSection />
      <LeadershipSection />
      <TendersSection />
      <TestimonialsSection />
    </>
  );
}
