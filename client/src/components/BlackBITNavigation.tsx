import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function BlackBITNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About Us", href: "#about" },
    { label: "Pricing", href: "#pricing", comingSoon: true },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <h1 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
              BlackBIT
            </h1>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group text-white/80 hover:text-white transition-colors text-base font-medium tracking-wider"
              >
                {link.label}
                {link.comingSoon && (
                  <span className="ml-2 text-xs px-2 py-0.5 bg-[#E8E4D9]/20 text-[#E8E4D9] rounded-full">
                    Soon
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8E4D9] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative h-12 px-6 flex items-center justify-center bg-[#E8E4D9] hover:bg-[#D8D4C9] border border-[#D8D4C9] rounded-full transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black rounded-full transition-all"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-black rounded-full transition-all"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black rounded-full transition-all"
              />
            </div>
          </motion.button>
        </div>
      </nav>
      
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
