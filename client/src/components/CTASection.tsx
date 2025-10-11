import { Button } from "@/components/ui/button";
import { siteConfig } from "../../../site.config";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-chart-2/20 border border-card-border p-12 md:p-16 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
              Ready to Transform Your Server?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Join thousands of servers already using {siteConfig.bot.name}. Get started in seconds with our easy setup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                asChild
                className="text-base px-8"
                data-testid="button-cta-invite"
              >
                <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noopener noreferrer">
                  Invite {siteConfig.bot.name} Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 backdrop-blur-sm bg-background/50"
                data-testid="button-cta-support"
              >
                <a href={siteConfig.contact.supportServer} target="_blank" rel="noopener noreferrer">
                  Join Support Server
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
