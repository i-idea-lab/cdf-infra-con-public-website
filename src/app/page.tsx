import VideoHero from "@/components/home/VideoHero";
import FlagshipProjectsSlider from "@/components/home/FlagshipProjectsSlider";
import StatsBar from "@/components/home/StatsBar";
import AboutOverview from "@/components/home/AboutOverview";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import EquipmentSection from "@/components/home/EquipmentSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ClientsSection from "@/components/home/ClientsSection";

export default function HomePage() {
  return (
    <>
      {/* 1st Viewport: Full-Bleed Drone Highway Video Hero */}
      <VideoHero />

      {/* 2nd Viewport: Landmark Flagship Projects Showcase (Interactive Slider) */}
      <FlagshipProjectsSlider />

      {/* 3rd Viewport: Key Verification Metrics */}
      <StatsBar />

      {/* 4th Viewport: Corporate Credo & Story */}
      <AboutOverview />

      {/* 5th Viewport: Core Consulting Verticals */}
      <ServicesSection />

      {/* 6th Viewport: Filterable Projects Directory */}
      <FeaturedProjects />

      {/* 7th Viewport: High-Tech Survey Fleets & Equipment */}
      <EquipmentSection />

      {/* 8th Viewport: Executive Leadership & Advisors */}
      <LeadershipSection />

      {/* 9th Viewport: Client Testimonials */}
      <TestimonialsSection />

      {/* 10th Viewport: Our Esteemed Clients & Public Sector Authorities */}
      <ClientsSection />
    </>
  );
}
