import { motion } from "framer-motion";
import { Flag, Target, Clock, CheckCircle, MoreHorizontal, Zap } from "lucide-react";

const futureIntentions = [
  {
    target: "2024_Q1",
    title: "Launch Independent Studio",
    description: "Primary objective for the next fiscal year. Requires capital accumulation and portfolio finalization.",
    status: "PROJECTED",
  },
  {
    target: "2023_DEC",
    title: "Marathon Training Completion",
    description: "Physical endurance milestone. Final race preparation phase.",
    status: "SCHEDULED",
  },
];

const currentFocus = {
  title: "FOCUS: Deep Work Protocol",
  duration: "4h Session",
  priority: "High Priority",
  description: "Executing core infrastructure rewrite. Notifications disabled. Neural link active.",
  status: "IN_PROGRESS",
};

const pastLogs = [
  { date: "OCT 20, 2023", title: "[2023_03] Reflection Log" },
  { date: "OCT 15, 2023", title: "[2023_02] Identity Sync" },
];

const timelineYears = ["2025", "2024", "2022", "2021", "2020"];

export const Timeline = () => {
  return (
    <div className="min-h-full p-6 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            Trajectory Map
            <span className="text-muted-foreground font-normal text-lg">// User_01</span>
          </h1>
          <div className="flex items-center gap-3 mt-2 text-sm">
            <span className="flex items-center gap-2 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary" />
              SYSTEM ONLINE
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">DATE: OCT 24, 2023</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-border text-muted-foreground rounded-lg text-sm font-mono hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
            <Target className="w-4 h-4" />
            VIEW: CHRONOLOGICAL
          </button>
          <button className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2">
            Export Data
          </button>
        </div>
      </motion.div>

      <div className="flex gap-8">
        {/* Main Timeline */}
        <div className="flex-1">
          {/* Future Intentions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <Flag className="w-4 h-4 text-primary" />
              </div>
              <span className="text-primary font-mono text-sm tracking-wider">// HORIZON: FUTURE INTENTIONS</span>
            </div>

            {/* Timeline Line */}
            <div className="absolute left-4 top-14 bottom-0 w-px bg-border" />

            <div className="space-y-4 ml-12">
              {futureIntentions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="terminal-card p-5 relative"
                >
                  {/* Connection dot */}
                  <div className="absolute -left-[2.55rem] top-6 w-3 h-3 rounded-full border-2 border-border bg-background" />
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-primary font-mono mb-2">TARGET: {item.target}</p>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono border border-border rounded text-muted-foreground">
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Present Actions Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative mt-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary border border-primary flex items-center justify-center box-glow">
                <Target className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-primary font-mono text-sm tracking-wider">// ANCHOR: PRESENT ACTIONS</span>
            </div>

            <div className="ml-12 space-y-4">
              {/* Quick Input */}
              <div className="terminal-card p-4 flex items-center gap-4">
                <span className="text-primary font-mono">{">_"}</span>
                <input
                  type="text"
                  placeholder="Log current state or action..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
                />
                <button className="px-6 py-2 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded">
                  COMMIT
                </button>
              </div>

              {/* Current Focus Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="terminal-card overflow-hidden"
              >
                <div className="flex">
                  <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-background relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.3)_0%,transparent_70%)]" />
                    <span className="absolute bottom-2 left-2 text-xs font-mono text-primary/70 px-2 py-1 bg-background/50 rounded">
                      IN_PROGRESS
                    </span>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{currentFocus.title}</h3>
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" /> {currentFocus.duration}
                      </span>
                      <span className="flex items-center gap-1 text-terminal-amber">
                        <Zap className="w-4 h-4" /> {currentFocus.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{currentFocus.description}</p>
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
                        DEFER
                      </button>
                      <button className="px-4 py-2 border border-primary text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        COMPLETE
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Past Logs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative mt-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground font-mono text-sm tracking-wider">// ARCHIVE: PAST LOGS</span>
            </div>

            <div className="ml-12 space-y-3">
              {pastLogs.map((log, index) => (
                <div key={index} className="terminal-card p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-mono mb-1">{log.date}</p>
                    <h4 className="text-foreground">{log.title}</h4>
                  </div>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Year Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-20 flex flex-col items-end"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-primary font-mono">TIME_JUMP</span>
          </div>
          <div className="relative">
            <div className="absolute right-4 top-0 bottom-0 w-px bg-primary/30" />
            <div className="space-y-6 relative">
              {timelineYears.map((year, index) => (
                <div key={year} className="flex items-center gap-2">
                  <span className={`text-sm font-mono ${index === 2 ? "text-primary" : "text-muted-foreground"}`}>
                    {year}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${index === 2 ? "bg-primary box-glow" : "bg-border"}`} />
                </div>
              ))}
              {/* NOW indicator */}
              <div className="absolute right-0 top-[4.5rem] flex items-center gap-2">
                <span className="text-xs text-primary font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                  NOW
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default Timeline;
