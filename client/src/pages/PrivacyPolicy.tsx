import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig } from "../../../site.config";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {siteConfig.legal.lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                {siteConfig.legal.companyName} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Discord bot, {siteConfig.bot.name}.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us when using {siteConfig.bot.name}:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Discord user IDs, server IDs, and channel IDs</li>
                <li>Server configuration settings and preferences</li>
                <li>Commands and interactions with the bot</li>
                <li>Message content only when necessary for bot functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve {siteConfig.bot.name}</li>
                <li>Process your commands and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Data Storage and Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Data Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
