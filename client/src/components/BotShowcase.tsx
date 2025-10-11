import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";
import { siteConfig } from "../../../site.config";

export default function BotShowcase() {
  const features = [
    "Advanced moderation tools",
    "Auto-role and welcome system",
    "Music playback with high quality",
    "Custom commands and automation",
    "Detailed logging and analytics",
    "24/7 uptime and reliability",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-2/10 border border-chart-2/20">
              <span className="text-sm font-medium text-chart-2">All-in-One Solution</span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Everything Your Server Needs
            </h2>

            <p className="text-muted-foreground text-lg">
              {siteConfig.bot.name} combines powerful moderation, entertainment, and utility features into one seamless experience. No need for multiple bots cluttering your server.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`feature-item-${index}`}
                >
                  <div className="w-5 h-5 rounded-full bg-chart-3/20 border border-chart-3/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-chart-3" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              <Button
                size="lg"
                asChild
                data-testid="button-showcase-invite"
              >
                <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noopener noreferrer">
                  Get Started Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-showcase-topgg"
              >
                <a href={siteConfig.bot.topggUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View on Top.gg
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right" style={{ animationDelay: '200ms' }}>
            <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl overflow-hidden border border-card-border">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full bg-card/80 backdrop-blur-sm rounded-xl border border-card-border p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-full" />
                    <div>
                      <div className="font-display font-bold text-lg">{siteConfig.bot.name}</div>
                      <div className="text-sm text-muted-foreground">Online</div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="h-3 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                    <div className="h-3 bg-primary/20 rounded w-2/3" />
                  </div>
                  <div className="pt-6 space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-mono">/help</span>
                      <span className="text-xs text-muted-foreground">Show commands</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-mono">/moderation</span>
                      <span className="text-xs text-muted-foreground">Server tools</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-chart-2/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
