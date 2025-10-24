import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "About Us", href: "#about" },
    { label: "Pricing", href: "#pricing", badge: "Coming Soon" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-[#0A0A0A] border-l border-white/10 z-50 p-6"
          >
            <div className="flex justify-end mb-12">
              <button
                onClick={onClose}
                className="p-3 hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <nav className="space-y-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={onClose}
                  className="group block"
                >
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-2xl font-medium text-white group-hover:text-[#E8E4D9] transition-colors">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-xs px-2 py-1 bg-[#E8E4D9]/20 text-[#E8E4D9] rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
