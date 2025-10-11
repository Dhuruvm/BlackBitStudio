import { Link } from "wouter";
import { SiDiscord, SiX, SiGithub } from "react-icons/si";
import { siteConfig } from "../../../site.config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-chart-2 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BB</span>
              </div>
              <span className="font-display font-bold text-lg">{siteConfig.studio.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.studio.description}
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.bot.topggUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-topgg"
                >
                  Top.gg
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.bot.inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-invite"
                >
                  Invite Bot
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">
                    Terms of Service
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                data-testid="link-footer-discord"
              >
                <SiDiscord className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                data-testid="link-footer-twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                data-testid="link-footer-github"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} {siteConfig.legal.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
