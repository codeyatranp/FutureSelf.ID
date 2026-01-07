import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal, ArrowLeft, Shield } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly, including your name, email address, and any content you create within the Service (journal entries, identity configurations, timeline events). We also collect basic usage data to improve the Service.`
    },
    {
      title: "2. How We Use Your Information",
      content: `Your information is used solely to provide and improve the Service. This includes storing your entries, syncing across devices, and personalizing your experience. We never use your personal content for advertising or sell it to third parties.`
    },
    {
      title: "3. Data Storage & Security",
      content: `All data is encrypted at rest and in transit using industry-standard encryption protocols. Your journal entries and personal reflections are stored on secure servers with strict access controls. We regularly audit our security practices.`
    },
    {
      title: "4. Data Retention",
      content: `Your data is retained for as long as your account is active. Upon account deletion, all personal data is permanently removed from our systems within 30 days, except where retention is required by law.`
    },
    {
      title: "5. Your Rights",
      content: `You have the right to access, export, or delete your data at any time. You can download a complete copy of your data through your account settings. We support GDPR and CCPA compliance for applicable users.`
    },
    {
      title: "6. Cookies & Tracking",
      content: `We use essential cookies for authentication and session management. We do not use third-party tracking cookies or advertising pixels. Analytics are privacy-focused and do not track individual users.`
    },
    {
      title: "7. Third-Party Services",
      content: `We may use third-party services for authentication (Google, GitHub) if you choose to sign in with these providers. These services have their own privacy policies, and we only receive basic profile information necessary for account creation.`
    },
    {
      title: "8. Children's Privacy",
      content: `The Service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover such data has been collected, it will be promptly deleted.`
    },
    {
      title: "9. Policy Updates",
      content: `We may update this Privacy Policy from time to time. Significant changes will be communicated via email or through the Service. Continued use after changes constitutes acceptance of the updated policy.`
    },
    {
      title: "10. Contact Us",
      content: `For privacy-related inquiries or to exercise your data rights, please contact our privacy team. We take all privacy concerns seriously and will respond within 48 hours.`
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="scanlines absolute inset-0 pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary font-mono transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to signup
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-mono text-foreground">Privacy Policy</h1>
              <p className="text-xs text-muted-foreground font-mono">Last updated: January 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="terminal-card p-6"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono border-b border-border pb-4 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-green-500/80" />
            <span className="ml-2">privacy.policy</span>
          </div>

          {/* Privacy commitment banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6"
          >
            <p className="text-sm text-primary font-mono text-center">
              &gt; Your data belongs to you. Always encrypted. Never sold.
            </p>
          </motion.div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="space-y-2"
              >
                <h2 className="text-sm font-mono text-primary">{section.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono text-center">
              <Terminal className="w-4 h-4 inline-block mr-2" />
              FutureSelf.id — Your future, protected.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
