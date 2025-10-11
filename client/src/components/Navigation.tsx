import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { siteConfig } from "../../../site.config";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" data-testid="link-home">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-chart-2 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BB</span>
              </div>
              <span className="font-display font-bold text-lg">{siteConfig.studio.name}</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  data-testid={`link-${link.label.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              data-testid="button-topgg"
            >
              <a href={siteConfig.bot.topggUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Top.gg
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              asChild
              data-testid="button-invite"
            >
              <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noopener noreferrer">
                Invite Bot
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full"
                data-testid="button-mobile-topgg"
              >
                <a href={siteConfig.bot.topggUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Top.gg
                </a>
              </Button>
              <Button
                variant="default"
                size="sm"
                asChild
                className="w-full"
                data-testid="button-mobile-invite"
              >
                <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noopener noreferrer">
                  Invite Bot
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
