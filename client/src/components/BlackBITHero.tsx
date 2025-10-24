import { ArrowRight, ArrowDown } from "lucide-react";
import AvailabilityBadge from "./AvailabilityBadge";
import { motion } from "framer-motion";

export default function BlackBITHero() {
  return (
    <section className="min-h-screen relative flex items-start px-6 md:px-12 pt-40 md:pt-48 pb-20">
      <div className="max-w-screen-xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AvailabilityBadge spotsLeft={2} totalSpots={5} />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight max-w-5xl text-white mt-[120px]"
          >
            Premium Discord bots and game development for modern communities.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mt-[120px]"
          >
            <button className="cta-button-primary flex items-center justify-center gap-3 group h-[52px]">
              <span className="text-lg">START NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="cta-button-secondary flex items-center justify-center gap-3 group h-[52px]">
              <span className="text-lg">VIEW WORK</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
