import { ArrowRight, ArrowDown } from "lucide-react";
import AvailabilityBadge from "./AvailabilityBadge";

export default function BlackBITHero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 md:px-12 pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="space-y-8">
          <AvailabilityBadge spotsLeft={2} totalSpots={5} />
          
          <h1 className="hero-heading max-w-5xl">
            World-class branding and websites for startups.
          </h1>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="cta-button-primary flex items-center gap-2 group">
              <span>START NOW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="cta-button-secondary flex items-center gap-2 group">
              <span>VIEW WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
