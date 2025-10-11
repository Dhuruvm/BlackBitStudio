import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig } from "../../../site.config";

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: {siteConfig.legal.lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using {siteConfig.bot.name}, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms & Conditions, please do not use our bot.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to use {siteConfig.bot.name} for Discord server management and entertainment purposes. This license shall automatically terminate if you violate any of these restrictions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Do not attempt to reverse engineer, decompile, or disassemble the bot</li>
                <li>Do not use the bot for any illegal or unauthorized purpose</li>
                <li>Do not abuse, harass, or spam using bot commands</li>
                <li>Do not attempt to gain unauthorized access to the bot's systems</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree to use {siteConfig.bot.name} only for lawful purposes and in accordance with Discord's Terms of Service. You are prohibited from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Transmitting harmful or malicious code</li>
                <li>Interfering with or disrupting the bot's services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Service Availability</h2>
              <p className="text-muted-foreground">
                We strive to maintain 99.9% uptime for {siteConfig.bot.name}, but we do not guarantee uninterrupted service. The bot may be unavailable due to maintenance, updates, or circumstances beyond our control. We are not liable for any downtime or service interruptions.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Modifications to Service</h2>
              <p className="text-muted-foreground">
                {siteConfig.legal.companyName} reserves the right to modify or discontinue {siteConfig.bot.name} at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall {siteConfig.legal.companyName} be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use {siteConfig.bot.name}.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your access to {siteConfig.bot.name} immediately, without prior notice, for any reason, including breach of these Terms & Conditions.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of {siteConfig.bot.name} after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms & Conditions, please contact us at{" "}
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
