import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../../../site.config";
import botImage from "@assets/6741dec2028a76192726098e_Frame-2095584455_1761299818346.webp";

export default function BlackBITHero() {
  return (
    <section className="min-h-screen relative flex items-start px-6 md:px-12 pt-28 md:pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight max-w-5xl text-white"
          >
            Introducing Cybork bot All in one bot comes with modern user-friendly UI
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mt-[120px]"
          >
            <a 
              href={siteConfig.bot.inviteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button-primary flex items-center justify-center gap-3 group h-[52px]"
              data-testid="button-invite-bot"
            >
              <span className="text-lg">INVITE BOT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a 
              href={siteConfig.bot.topggUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button-secondary flex items-center justify-center gap-3 group h-[52px]"
              data-testid="button-view-topgg"
            >
              <span className="text-lg">View on Top.gg</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 max-w-5xl"
          >
            <img 
              src={botImage} 
              alt="Cybork Bot Interface"
              className="w-full h-auto rounded-lg"
              data-testid="img-bot-showcase"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
