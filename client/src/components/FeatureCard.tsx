import { Card, CardHeader, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Zap;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <motion.div
        whileHover={{ 
          y: -8,
          transition: { duration: 0.2 }
        }}
      >
        <Card
          className="group hover-elevate active-elevate-2 transition-all duration-300 border-card-border h-full relative overflow-hidden"
          data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <CardHeader className="space-y-4 relative">
            <motion.div 
              className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <IconComponent className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">{title}</h3>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
