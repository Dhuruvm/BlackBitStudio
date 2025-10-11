import { Button } from "@/components/ui/button";
import { siteConfig } from "../../../site.config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-chart-2/20 border border-card-border p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <motion.h2
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Transform Your Server?
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join thousands of servers already using {siteConfig.bot.name}. Get started in seconds with our easy setup.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                asChild
                className="text-base px-8"
                data-testid="button-cta-invite"
              >
                <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noopener noreferrer">
                  Invite {siteConfig.bot.name} Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 backdrop-blur-sm bg-background/50"
                data-testid="button-cta-support"
              >
                <a href={siteConfig.contact.supportServer} target="_blank" rel="noopener noreferrer">
                  Join Support Server
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
