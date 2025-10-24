import BlackBITNavigation from "@/components/BlackBITNavigation";
import DynamicBackground from "@/components/DynamicBackground";
import { siteConfig } from "../../../site.config";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      <DynamicBackground />
      <BlackBITNavigation />
      
      <div className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-[42px] md:text-[52px] font-normal leading-[1.1] tracking-tight text-white mb-4" data-testid="heading-privacy-policy">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm">Last updated: {siteConfig.legal.lastUpdated}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <section className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-white/70 leading-relaxed">
                {siteConfig.legal.companyName} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Discord bot, {siteConfig.bot.name}.
              </p>
            </section>

            <section className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We collect information that you provide directly to us when using {siteConfig.bot.name}:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/60">
                <li>Discord user IDs, server IDs, and channel IDs</li>
                <li>Server configuration settings and preferences</li>
                <li>Commands and interactions with the bot</li>
                <li>Message content only when necessary for bot functionality</li>
              </ul>
            </section>

            <section className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/60">
                <li>Provide, maintain, and improve {siteConfig.bot.name}</li>
                <li>Process your commands and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Data Storage and Security</h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Data Sharing</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/60">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>

            <section className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/60">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </section>

            <section className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#E8E4D9] hover:underline transition-colors" data-testid="link-contact-email">
                  {siteConfig.contact.email}
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
