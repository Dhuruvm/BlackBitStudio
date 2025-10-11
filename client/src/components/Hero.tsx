import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowDown } from "lucide-react";
import { siteConfig } from "../../../site.config";

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          opacity: 0.1
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">Product-Based Studio</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent leading-tight">
            {siteConfig.studio.name}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            {siteConfig.studio.tagline}
          </p>

          <div className="pt-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Meet <span className="text-primary">{siteConfig.bot.name}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.bot.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              asChild
              className="text-base px-8"
              data-testid="button-hero-invite"
            >
              <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noopener noreferrer">
                Invite to Discord
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8"
              data-testid="button-hero-topgg"
            >
              <a href={siteConfig.bot.topggUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                View on Top.gg
              </a>
            </Button>
          </div>

          <button
            onClick={scrollToFeatures}
            className="mt-16 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            data-testid="button-scroll-features"
          >
            <span className="text-sm font-medium">Explore Features</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
