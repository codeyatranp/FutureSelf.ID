import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Edit3, Rocket, Fingerprint, RotateCcw, TrendingUp, ChevronRight } from "lucide-react";

const commands = [
  {
    command: "write today",
    description: "Initiate daily log sequence",
    icon: Edit3,
    path: "/reflection",
  },
  {
    command: "open future",
    description: "Set goals and visualization parameters",
    icon: Rocket,
    path: "/timeline",
  },
  {
    command: "view identity",
    description: "Manage core traits and archetype",
    icon: Fingerprint,
    path: "/identity",
  },
  {
    command: "reflect",
    description: "Review past logs and insights",
    icon: RotateCcw,
    path: "/archives",
  },
  {
    command: "timeline",
    description: "Visual roadmap of evolution",
    icon: TrendingUp,
    path: "/timeline",
  },
];

const systemAlerts = [
  { time: "10:42 AM", message: "Weekly reflection pending review." },
  { time: "09:15 AM", message: 'New habit formed: "Morning Meditation". +5 Willpower.' },
];

export const Terminal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full p-6 md:p-8">
      {/* Boot Messages */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-1 mb-8 text-sm font-mono"
      >
        <p className="text-muted-foreground">INITIALIZING CONNECTION TO TIME STREAM...</p>
        <p className="text-muted-foreground">
          IDENTITY PROTOCOL: <span className="text-primary">LOADED.</span>
        </p>
        <p className="text-muted-foreground">SYNCING TEMPORAL DATA... COMPLETE.</p>
      </motion.div>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-foreground">WELCOME BACK, </span>
          <span className="text-primary terminal-glow-intense">ARCHITECT</span>
          <span className="text-foreground">.</span>
        </h1>
        <p className="text-muted-foreground text-lg">Your future self is waiting for input.</p>
      </motion.div>

      {/* Core Commands Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-primary font-mono text-sm">{"<>"}</span>
          <span className="text-primary font-mono text-sm tracking-wider">// CORE COMMANDS</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-3">
          {commands.map((cmd, index) => (
            <motion.button
              key={cmd.command}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              onClick={() => navigate(cmd.path)}
              className="w-full terminal-card p-4 flex items-center gap-4 hover-lift group text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cmd.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-primary">{">"}</span> {cmd.command}
                </h3>
                <p className="text-sm text-muted-foreground">// {cmd.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* System Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-muted-foreground font-mono text-sm">// SYSTEM ALERTS</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-2">
          {systemAlerts.map((alert, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <span className="text-muted-foreground/60 font-mono">[{alert.time}]</span>
              <span className="text-muted-foreground">{alert.message}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Command Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="terminal-card p-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-primary font-mono font-semibold">fs_console ~ %</span>
          <input
            type="text"
            placeholder="Enter command..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none font-mono"
          />
          <div className="w-3 h-5 bg-primary animate-glow-pulse" />
          <button className="px-4 py-2 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded">
            EXEC
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Terminal;
