import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../../../site.config";
import botImage from "@assets/6741dec2028a76192726098e_Frame-2095584455_1761299818346.webp";

export default function BlackBITHero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 md:px-12 pt-20 pb-20">
      <div className="max-w-screen-xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-[18px] py-2 mb-8 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full"
            data-testid="badge-availability"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[12px] text-white/70 font-medium tracking-[0.12em] uppercase">
              2/5 SPOTS LEFT FOR NOVEMBER
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[42px] md:text-[52px] lg:text-[56px] font-normal leading-[1.1] tracking-tight max-w-4xl text-white"
          >
            Introducing Cybork bot All in one bot comes with modern user-friendly UI
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
            <a 
              href={siteConfig.bot.inviteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button-primary flex items-center justify-center gap-3 group h-[44px]"
              data-testid="button-invite-bot"
            >
              <span className="text-base">INVITE BOT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a 
              href={siteConfig.bot.topggUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button-secondary flex items-center justify-center gap-3 group h-[44px]"
              data-testid="button-view-topgg"
            >
              <span className="text-base">View on Top.gg</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 max-w-4xl h-[220px] md:h-[260px] overflow-hidden"
          >
            <img 
              src={botImage} 
              alt="Cybork Bot Interface"
              className="w-full h-full object-cover object-center"
              data-testid="img-bot-showcase"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
