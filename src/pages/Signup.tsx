import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal, Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const passwordRequirements = [
    { label: "At least 8 characters", met: formData.password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(formData.password) },
    { label: "Contains uppercase", met: /[A-Z]/.test(formData.password) },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="scanlines absolute inset-0 pointer-events-none opacity-30" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Terminal header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-4"
          >
            <Terminal className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-mono text-foreground mb-2"
          >
            FutureSelf.id
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground font-mono text-sm"
          >
            &gt; Initialize your identity in the system_
          </motion.p>
        </div>

        {/* Signup card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="terminal-card p-6 space-y-6"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono border-b border-border pb-4">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-green-500/80" />
            <span className="ml-2">identity.create</span>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Display Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary font-mono text-sm">
                  &gt;
                </span>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Future Architect"
                  className="pl-8 bg-background/50 border-border/50 font-mono text-sm focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary font-mono text-sm">
                  &gt;
                </span>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="user@futureself.id"
                  className="pl-8 bg-background/50 border-border/50 font-mono text-sm focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary font-mono text-sm">
                  &gt;
                </span>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••••••"
                  className="pl-8 pr-10 bg-background/50 border-border/50 font-mono text-sm focus:border-primary/50 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              {/* Password requirements */}
              <div className="space-y-1 pt-2">
                {passwordRequirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`flex items-center gap-2 text-xs font-mono ${
                      req.met ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                      req.met ? "border-primary bg-primary/20" : "border-muted-foreground/30"
                    }`}>
                      {req.met && <Check className="w-2 h-2" />}
                    </div>
                    <span>{req.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs">
              <input type="checkbox" className="mt-0.5 rounded border-border bg-background/50 text-primary focus:ring-primary/20" />
              <label className="text-muted-foreground font-mono leading-relaxed cursor-pointer">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:text-primary/80">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 font-mono group"
            >
              <span>Create Identity</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-card px-4 text-muted-foreground font-mono">or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="font-mono text-xs border-border/50 hover:bg-primary/10 hover:border-primary/30">
              Google
            </Button>
            <Button variant="outline" className="font-mono text-xs border-border/50 hover:bg-primary/10 hover:border-primary/30">
              GitHub
            </Button>
          </div>
        </motion.div>

        {/* Login link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-6 text-sm text-muted-foreground font-mono"
        >
          Already in the system?{" "}
          <Link to="/login" className="text-primary hover:text-primary/80 transition-colors">
            Login &gt;
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;
