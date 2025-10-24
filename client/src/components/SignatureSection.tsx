import { motion } from "framer-motion";
import { siteConfig } from "../../../site.config";

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
          {siteConfig.signature.message && (
            <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed mb-12">
              {siteConfig.signature.message}
            </p>
          )}
          
          <div className="mb-12">
            <div 
              className="text-[56px] md:text-[72px] lg:text-[84px] text-white/90 mb-6"
              style={{ 
                fontFamily: "'Allura', 'Dancing Script', 'Great Vibes', 'Pacifico', cursive",
                fontWeight: 400,
                lineHeight: 0.9,
                letterSpacing: '0.02em'
              }}
              data-testid="text-signature"
            >
              {siteConfig.signature.name}
            </div>
            <div className="space-y-1">
              <p className="text-[18px] text-white font-medium">
                {siteConfig.signature.name}
              </p>
              <p className="text-[14px] text-white/60">
                {siteConfig.signature.title}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
