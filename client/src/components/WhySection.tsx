import { motion } from "framer-motion";

export default function WhySection() {
  return (
    <section className="relative px-6 md:px-12 py-20 md:py-24" id="why">
      <div className="max-w-screen-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px]"
        >
          <h2 className="text-[48px] md:text-[56px] font-normal leading-[1.1] tracking-tight text-white mb-10">
            Why Hyperstudio?
          </h2>
          
          <div className="space-y-6 text-[16px] md:text-[18px] text-white/80 leading-relaxed">
            <p>
              Let's talk about what really gets us excited. We started this because we saw something missing in brand design. Most studios stick to the safe lane, but we're more interested in diving deep into the wild world of next-gen tech. Web3, AI, SaaS, BioPharma; this is where the future is taking shape.
            </p>
            
            <p>
              What truly makes us different is our background. We're not just another agency; we're founders who've built tech companies from scratch. We've made mistakes, hit roadblocks, and learned what it takes to break through the noise. Now we get to put all that experience to work for other founders.
            </p>
            
            <p>
              We know design isn't just about making things look good. It's about sharing your story in a way that investors understand, top talent wants to join, and users genuinely care. Our focus is always on making an impression that lasts.
            </p>
            
            <p>
              At the core, we're builders working alongside other builders. We know the late nights, the big dreams, and the small wins. We get it because we've lived it ourselves. Let's join forces and create something that stands out and gets people talking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
