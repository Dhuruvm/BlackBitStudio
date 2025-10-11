import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground text-lg">
            Join our growing community of Discord servers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="font-display font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-muted-foreground mt-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
