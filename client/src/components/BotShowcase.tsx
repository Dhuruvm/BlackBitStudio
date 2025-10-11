import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { siteConfig } from "../../../site.config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BotShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Advanced moderation tools",
    "Auto-role and welcome system",
    "Music playback with high quality",
    "Custom commands and automation",
    "Detailed logging and analytics",
    "24/7 uptime and reliability",
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-2/10 border border-chart-2/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-chart-2">All-in-One Solution</span>
            </motion.div>

            <motion.h2
              className="font-display font-bold text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Everything Your Server Needs
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {siteConfig.bot.name} combines powerful moderation, entertainment, and utility features into one seamless experience. No need for multiple bots cluttering your server.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  data-testid={`feature-item-${index}`}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="w-5 h-5 rounded-full bg-chart-3/20 border border-chart-3/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-chart-3" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-3 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                asChild
                data-testid="button-showcase-invite"
              >
                <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noopener noreferrer">
                  Get Started Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-showcase-topgg"
              >
                <a href={siteConfig.bot.topggUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View on Top.gg
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-card-border"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img 
                src="/attached_assets/IMG_20251011_185258_1760188997466.jpg"
                alt="Cybork Discord Profile"
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-card-border"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img 
                src="/attached_assets/Screenshot_2025_1011_184711_1760188932591.jpg"
                alt="Cybork Bot Commands"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
