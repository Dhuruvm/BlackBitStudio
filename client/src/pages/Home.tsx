import BlackBITNavigation from "@/components/BlackBITNavigation";
import BlackBITHero from "@/components/BlackBITHero";
import DynamicBackground from "@/components/DynamicBackground";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import SignatureSection from "@/components/SignatureSection";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      <DynamicBackground />
      <BlackBITNavigation />
      <BlackBITHero />
      <ServicesSection />
      <WhySection />
      <SignatureSection />
    </div>
  );
}
