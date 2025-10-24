import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DynamicBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.02) 0%, transparent 25%)`,
        }}
      />

      <div className="fixed bottom-0 left-0 right-0 h-[45vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[1]" />
        
        <div className="relative w-full h-full flex items-end justify-between px-6 md:px-12 pb-12 z-[2]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="relative mb-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-[3] pointer-events-none" />
            <div className="absolute -inset-x-8 -inset-y-8 bg-gradient-to-r from-black via-transparent to-transparent z-[3] pointer-events-none" />
            
            <motion.div
              animate={{
                opacity: [0.12, 0.18, 0.12],
                scale: [1, 1.02, 1],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white/[0.12] font-mono text-[9px] md:text-[11px] lg:text-[12px] leading-[1.15] whitespace-pre select-none relative z-[2]"
              style={{
                filter: "blur(0.5px)",
                maskImage: "radial-gradient(ellipse 200px 220px at bottom left, black 10%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 60%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 200px 220px at bottom left, black 10%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 60%, transparent 80%)",
              }}
            >
{`.........................
.........................
............●●●●●●●●●●●●●●
..........●●.............●●●
........●●...................●●
.......●.........................●
......●...........................●
.....●.............................●●
....●.................................●●
....●...................................●
....●...................................●
....●...................................●
.....●..................................●
......●................................●
.......●●............................●●
.........●●●●....................●●●●
............●●●●●●●●●●●●●●●●●●●●`}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            className="relative mb-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-[3] pointer-events-none" />
            <div className="absolute -inset-x-8 -inset-y-8 bg-gradient-to-l from-black via-transparent to-transparent z-[3] pointer-events-none" />
            
            <motion.div
              animate={{
                opacity: [0.12, 0.18, 0.12],
                scale: [1, 1.02, 1],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="text-white/[0.12] font-mono text-[9px] md:text-[11px] lg:text-[12px] leading-[1.15] whitespace-pre select-none relative z-[2]"
              style={{
                filter: "blur(0.5px)",
                maskImage: "radial-gradient(ellipse 200px 220px at bottom right, black 10%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 60%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 200px 220px at bottom right, black 10%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 60%, transparent 80%)",
              }}
            >
{`.........................
.........................
●●●●●●●●●●●●●............
●●●.............●●..........
●●...................●●........
●.........................●.......
●...........................●......
●●.............................●.....
●●.................................●....
●...................................●....
●...................................●....
●...................................●....
●..................................●.....
●................................●......
●●............................●●.......
....●●●●....................●●●●.........
........●●●●●●●●●●●●●●●●●●●●............`}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
