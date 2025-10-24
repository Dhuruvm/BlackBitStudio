import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Cybork Bot",
      description: "All-in-one Discord bot with modern user-friendly UI. Features include moderation, music, games, and utility commands.",
      tags: ["Discord Bot", "TypeScript", "Node.js"],
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with real-time inventory management and seamless payment integration.",
      tags: ["React", "Next.js", "Stripe"],
      featured: false,
    },
    {
      title: "AI Content Generator",
      description: "Intelligent content generation tool powered by advanced AI models for marketing and creative writing.",
      tags: ["AI/ML", "Python", "OpenAI"],
      featured: false,
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management platform with real-time updates and team communication features.",
      tags: ["React", "WebSocket", "PostgreSQL"],
      featured: false,
    },
  ];

  return (
    <section className="relative px-6 md:px-12 py-20 md:py-28 border-t border-white/5" id="projects">
      <div className="max-w-screen-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <span className="text-[12px] text-white/50 font-medium tracking-[0.12em] uppercase">
              // OUR WORK
            </span>
          </div>
          
          <h2 className="text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-tight text-white mb-6 max-w-2xl">
            Featured Projects
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-white/60 leading-relaxed max-w-xl mb-16">
            Explore our latest projects showcasing cutting-edge technology and innovative solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-all duration-300 ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
                data-testid={`card-project-${index}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[20px] md:text-[24px] font-semibold text-white group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                        data-testid={`button-github-${index}`}
                      >
                        <Github className="w-4 h-4 text-white/60" />
                      </button>
                      <button
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                        data-testid={`button-external-${index}`}
                      >
                        <ExternalLink className="w-4 h-4 text-white/60" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-[14px] md:text-[16px] text-white/60 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] font-medium tracking-wide uppercase bg-white/5 text-white/70 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
