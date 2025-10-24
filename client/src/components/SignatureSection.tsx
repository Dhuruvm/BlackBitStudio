import { motion } from "framer-motion";

export default function SignatureSection() {
  return (
    <section className="relative px-6 md:px-12 py-16" id="signature">
      <div className="max-w-screen-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px]"
        >
          <div className="mb-12">
            <div 
              className="text-[48px] md:text-[64px] font-script text-white/90 mb-4"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Falooda
            </div>
            <div className="space-y-1">
              <p className="text-[18px] text-white font-medium">
                Falooda
              </p>
              <p className="text-[14px] text-white/60">
                Founder & CEO
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
