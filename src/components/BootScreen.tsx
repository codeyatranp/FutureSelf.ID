import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Power } from "lucide-react";

interface BootScreenProps {
  onComplete: () => void;
}

const systemLogs = [
  { text: "Establishing connection to host...", status: "[OK]" },
  { text: "Retrieving memory fragments...", status: "[OK]" },
  { text: "parsing_core_values...", status: "" },
  { text: "initiating_neural_handshake...", status: "", highlight: true },
  { text: "waiting for user input...", status: "", dim: true },
];

export const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<number>(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (visibleLogs < systemLogs.length) {
      const timeout = setTimeout(() => {
        setVisibleLogs((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setIsReady(true), 500);
    }
  }, [visibleLogs]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-primary rounded flex items-center justify-center">
            <span className="text-primary text-xs">▶</span>
          </div>
          <span className="text-foreground font-medium tracking-wider text-sm">FUTURESELF.ID</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          <span>v.2030.1a</span>
        </div>
      </header>

      {/* Main Terminal */}
      <main className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="terminal-card w-full max-w-xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-terminal-amber" />
              <span className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="text-xs text-muted-foreground tracking-widest">USER_SESSION_ACTIVE</span>
          </div>

          {/* Terminal Content */}
          <div className="p-8 space-y-6">
            {/* Title */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                Loading your future<span className="text-primary cursor-blink"></span>
              </h1>
              <p className="text-primary terminal-glow">Syncing with your past...</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground tracking-wider">SYSTEM INTEGRITY</span>
                <span className="text-primary font-medium">{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary progress-glow rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* System Logs */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-primary tracking-wider">SYSTEM LOG</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-1">
                <AnimatePresence>
                  {systemLogs.slice(0, visibleLogs).map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center gap-2 ${
                        log.dim ? "text-muted-foreground/50" : log.highlight ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <span className="text-primary">{">"}</span>
                      <span>{log.text}</span>
                      {log.status && <span className="text-primary ml-auto">{log.status}</span>}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Initialize Button */}
            <AnimatePresence>
              {isReady && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-2"
                >
                  <button
                    onClick={onComplete}
                    className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg 
                             flex items-center justify-center gap-3 hover:bg-primary/90 transition-all
                             box-glow hover:box-glow-intense tracking-wider"
                  >
                    <Power className="w-5 h-5" />
                    [ INITIALIZE SYSTEM ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-border text-center">
            <span className="text-xs text-muted-foreground tracking-widest">SECURE CONNECTION ESTABLISHED</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BootScreen;
