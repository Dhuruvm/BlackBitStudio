import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users2 } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "INNOVATION",
      description: "We push boundaries with cutting-edge technology",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "CREATIVITY",
      description: "Unique solutions for every challenge",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "PERFORMANCE",
      description: "Fast, reliable, and scalable solutions",
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "COLLABORATION",
      description: "Working together to achieve greatness",
    },
  ];

  return (
    <section className="relative px-6 md:px-12 py-20 md:py-28 border-t border-white/5" id="about">
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="text-[12px] text-white/50 font-medium tracking-[0.12em] uppercase">
                // ABOUT US
              </span>
            </div>
            
            <h2 className="text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-tight text-white mb-8">
              Building The Future
            </h2>
            
            <div className="space-y-6 text-[16px] md:text-[18px] text-white/70 leading-relaxed">
              <p>
                We are a team of passionate developers and designers dedicated to creating innovative solutions that make a difference. Our expertise spans across modern web technologies, AI integration, and scalable cloud infrastructure.
              </p>
              
              <p>
                With years of combined experience in the tech industry, we've helped numerous clients bring their visions to life. From startups to established businesses, we pride ourselves on delivering exceptional quality and unmatched support.
              </p>
              
              <p>
                Our mission is to empower businesses and communities through technology. We believe in building products that not only meet today's needs but also anticipate tomorrow's challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-[24px] md:text-[28px] font-normal text-white mb-8">
              Our Core Values
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3 p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-xl hover:border-white/[0.15] transition-all duration-300"
                  data-testid={`card-value-${index}`}
                >
                  <div className="text-white/40">
                    {value.icon}
                  </div>
                  <h4 className="text-[12px] text-white/60 font-medium tracking-[0.12em] uppercase">
                    {value.title}
                  </h4>
                  <p className="text-[14px] text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
