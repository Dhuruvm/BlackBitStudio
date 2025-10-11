import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import StatsCounter from "@/components/StatsCounter";
import BotShowcase from "@/components/BotShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { siteConfig } from "../../../site.config";

export default function Home() {
  const stats = [
    { label: "Servers", value: siteConfig.bot.stats.servers },
    { label: "Users", value: siteConfig.bot.stats.users },
    { label: "Commands", value: siteConfig.bot.stats.commands },
    { label: "Uptime", value: siteConfig.bot.stats.uptime },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Powerful Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to manage and grow your Discord community in one powerful bot
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.bot.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsCounter stats={stats} />
      <BotShowcase />
      <CTASection />
      <Footer />
    </div>
  );
}
