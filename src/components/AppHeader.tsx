import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
}

export const AppHeader = ({ title, subtitle }: AppHeaderProps) => {
  const [userName, setUserName] = useState("Architect");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("fs_user");
      if (raw) {
        const parsed = JSON.parse(raw) as { name?: string };
        if (parsed?.name) {
          setUserName(parsed.name);
        }
      }
    } catch {
      setUserName("Architect");
    }
  }, []);

  const initial = userName.trim().charAt(0).toUpperCase() || "A";
  return (
    <header className="h-14 border-b border-border flex items-center justify-between px-6 bg-card/50">
      <div className="flex items-center gap-4">
        {title && (
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-semibold text-foreground"
          >
            {title}
          </motion.h1>
        )}
        {subtitle && (
          <span className="text-sm text-muted-foreground font-mono">{subtitle}</span>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          <span>CONNECTION: SECURE</span>
        </div>
        <div className="text-xs text-muted-foreground">USER: {userName.toUpperCase()}</div>
        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
          <span className="text-primary text-xs font-bold">{initial}</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
