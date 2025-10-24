import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "AWARD-WINNING LOGOS",
      description: "Premium brand identity design"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "GROWTH STRATEGY",
      description: "Data-driven marketing approach"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "COMMUNITY BUILDING",
      description: "Engage and grow your audience"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "RAPID DELIVERY",
      description: "Fast turnaround times"
    }
  ];

  return (
    <section className="relative px-6 md:px-12 py-20 md:py-28 border-t border-white/5" id="services">
      <div className="max-w-screen-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <span className="text-[12px] text-white/50 font-medium tracking-[0.12em] uppercase">
              // SERVICES
            </span>
          </div>
          
          <h2 className="text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-tight text-white mb-6 max-w-2xl">
            Invest Today, Stand Out Tomorrow
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-white/60 leading-relaxed max-w-xl mb-16">
            We're currently working across next-gen sectors, including AI, Web3, and biopharma.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="text-white/40">
                  {service.icon}
                </div>
                <h3 className="text-[12px] text-white/60 font-medium tracking-[0.12em] uppercase">
                  {service.title}
                </h3>
                <p className="text-[14px] text-white/40 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
