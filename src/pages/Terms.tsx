import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal, ArrowLeft, FileText } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using FutureSelf.id ("the Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.`
    },
    {
      title: "2. Description of Service",
      content: `FutureSelf.id is a personal evolution system designed to help users design, document, and track their personal growth journey. The Service includes features for journaling, identity mapping, timeline visualization, and self-reflection.`
    },
    {
      title: "3. User Accounts",
      content: `You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized access to your account. You must be at least 13 years old to use this Service.`
    },
    {
      title: "4. User Content",
      content: `You retain ownership of all content you create within the Service. By using the Service, you grant us a limited license to store and process your content solely for the purpose of providing the Service to you.`
    },
    {
      title: "5. Privacy & Data",
      content: `Your privacy is important to us. All personal data is encrypted and stored securely. We do not sell or share your personal information with third parties. For more details, please review our Privacy Policy.`
    },
    {
      title: "6. Prohibited Uses",
      content: `You agree not to use the Service for any unlawful purpose, to harass others, to distribute malware, or to attempt to gain unauthorized access to our systems or other users' accounts.`
    },
    {
      title: "7. Service Modifications",
      content: `We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice of any significant changes that affect your use of the Service.`
    },
    {
      title: "8. Limitation of Liability",
      content: `The Service is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.`
    },
    {
      title: "9. Contact",
      content: `If you have questions about these Terms, please contact us through our support channels. We aim to respond to all inquiries within 48 hours.`
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
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-mono text-foreground">Terms of Service</h1>
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
            <span className="ml-2">terms.legal</span>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
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
              FutureSelf.id — Building the future, one identity at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
