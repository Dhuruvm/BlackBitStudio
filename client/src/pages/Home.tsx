import BlackBITNavigation from "@/components/BlackBITNavigation";
import BlackBITHero from "@/components/BlackBITHero";
import DotPattern from "@/components/DotPattern";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      <BlackBITNavigation />
      <BlackBITHero />
      <DotPattern />
    </div>
  );
}
