import { motion } from "framer-motion";
import { RefreshCw, Settings2, X, Minus, Check, Plus, Moon, Dumbbell, Heart } from "lucide-react";

const currentSkills = [
  { name: "Frontend Dev", level: 75 },
  { name: "Public Speaking", level: 40 },
  { name: "System Design", level: 60 },
];

const targetSkills = [
  { name: "Public Speaking", target: 80 },
  { name: "AI Engineering", target: 60 },
];

const routineLoops = [
  { name: "Late night scrolling", status: "DEPRECATED", icon: X, color: "destructive" },
  { name: "Inconsistent gym", status: "UNSTABLE", icon: Minus, color: "terminal-amber" },
  { name: "Daily Reading", status: "STABLE", icon: Check, color: "primary" },
];

const newProtocols = [
  { name: "Digital Sunset", description: "No screens after 10pm", icon: Moon },
  { name: "Hypertrophy Program", description: "4x / week lifting", icon: Dumbbell },
];

const coreValues = ["#DISCIPLINE", "#CURIOSITY", "#MINIMALISM"];

export const Identity = () => {
  return (
    <div className="min-h-full p-6 md:p-8">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 text-sm font-mono mb-6"
      >
        <span className="text-muted-foreground">root</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">user_01</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">config</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-primary">identity.yaml</span>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between mb-8"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Identity Configuration</h1>
          <p className="text-muted-foreground">
            Review and modify your core attributes. Left pane represents current runtime state. Right pane represents target build.
          </p>
        </div>

        {/* Status Cards */}
        <div className="flex items-center gap-4">
          <div className="terminal-card px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <Settings2 className="w-3 h-3" /> STATUS
            </p>
            <p className="font-semibold text-foreground">ACTIVE</p>
          </div>
          <div className="terminal-card px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground mb-1">% SYNC</p>
            <p className="font-semibold text-primary">42.8%</p>
          </div>
          <div className="terminal-card px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <RefreshCw className="w-3 h-3" /> VERSION
            </p>
            <p className="font-semibold font-mono text-foreground">v1.5.0</p>
          </div>
        </div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Current State */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-foreground" />
              <span className="text-sm font-mono text-muted-foreground">OBSERVED_STATE [V1.0]</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">read_only</span>
          </div>

          {/* Core Skills */}
          <div className="terminal-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs">◎</span>
                </span>
                Core Skills
              </h3>
              <span className="text-xs font-mono text-muted-foreground">func check_skills()</span>
            </div>
            <div className="space-y-4">
              {currentSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Routine Loops */}
          <div className="terminal-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <RefreshCw className="w-3 h-3 text-primary" />
                </span>
                Routine Loops
              </h3>
              <span className="text-xs font-mono text-muted-foreground">{"const habits = [...]"}</span>
            </div>
            <div className="space-y-3">
              {routineLoops.map((routine) => (
                <div key={routine.name} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <routine.icon className={`w-4 h-4 ${
                      routine.color === "destructive" ? "text-destructive" : 
                      routine.color === "terminal-amber" ? "text-terminal-amber" : "text-primary"
                    }`} />
                    <span className="text-foreground">{routine.name}</span>
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded border ${
                    routine.color === "destructive" ? "border-destructive text-destructive" :
                    routine.color === "terminal-amber" ? "border-terminal-amber text-terminal-amber" :
                    "border-primary text-primary"
                  }`}>
                    {routine.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Target State */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-mono text-primary">TARGET_STATE [V2.0]</span>
            </div>
            <span className="text-xs text-primary font-mono">writable</span>
          </div>

          {/* Skill Upgrades */}
          <div className="terminal-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs">◉</span>
                </span>
                Skill Upgrades
              </h3>
              <button className="text-muted-foreground hover:text-primary">
                <Settings2 className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {targetSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <span className="text-sm font-mono text-primary">Target: {skill.target}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary progress-glow"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.target}%` }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Protocols */}
          <div className="terminal-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <RefreshCw className="w-3 h-3 text-primary" />
                </span>
                New Protocols
              </h3>
            </div>
            <div className="space-y-3">
              {newProtocols.map((protocol) => (
                <div key={protocol.name} className="flex items-center justify-between py-3 px-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                      <protocol.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{protocol.name}</h4>
                      <p className="text-xs text-muted-foreground">{protocol.description}</p>
                    </div>
                  </div>
                  <button className="text-muted-foreground hover:text-primary">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button className="w-full py-3 border border-dashed border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                ADD_PROTOCOL
              </button>
            </div>
          </div>

          {/* Core Values */}
          <div className="terminal-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <Heart className="w-3 h-3 text-primary" />
                </span>
                Core Values
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreValues.map((value) => (
                <span key={value} className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
                  {value}
                </span>
              ))}
              <button className="px-3 py-1.5 border border-dashed border-border rounded-full text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                + Add Value
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Command Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 terminal-card p-4 flex items-center gap-4"
      >
        <div className="w-8 h-8 border border-primary rounded flex items-center justify-center">
          <span className="text-primary text-sm">▶</span>
        </div>
        <span className="text-primary font-mono">{">"}</span>
        <input
          type="text"
          placeholder='add habit --id "meditation" --freq "daily"'
          className="flex-1 bg-transparent text-muted-foreground placeholder:text-muted-foreground/50 focus:outline-none font-mono text-sm"
        />
        <span className="text-muted-foreground text-xs font-mono">PRESS [ENTER]</span>
        <button className="w-10 h-10 bg-secondary border border-border rounded flex items-center justify-center hover:border-primary transition-colors">
          <span className="text-primary">▶</span>
        </button>
      </motion.div>
    </div>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default Identity;
