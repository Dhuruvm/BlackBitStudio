import BlackBITNavigation from "@/components/BlackBITNavigation";
import BlackBITHero from "@/components/BlackBITHero";
import DotPattern from "@/components/DotPattern";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import SignatureSection from "@/components/SignatureSection";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      <BlackBITNavigation />
      <BlackBITHero />
      <DotPattern />
      <ServicesSection />
      <WhySection />
      <SignatureSection />
    </div>
  );
}
