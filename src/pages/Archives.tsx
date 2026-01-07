import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Lock, Image, Mic, Pin } from "lucide-react";

const fragments = [
  {
    id: "042",
    content: '"The fear of time isn\'t that it passes, but that we might forget who we were when it did."',
    time: "2 HOURS AGO",
    tag: "EPIPHANY",
    type: "quote",
  },
  {
    id: "041",
    title: "Dear Future Self,",
    date: "ENTRY LOG: 2023.10.27",
    content: "I wonder if you still listen to that jazz playlist on rainy Tuesdays. Today was one of those days where the city felt like it was holding its breath.\n\nI made a decision today about the career shift. It feels terrifying right now, like jumping off a cliff without knowing if the parachute is packed correctly.\n\nBut I hope, by the time you read this, you're smiling at my...",
    type: "letter",
  },
  {
    id: "040",
    location: "ALPS_BASE",
    caption: '"The silence up here is deafening in the best way."',
    type: "photo",
  },
  {
    id: "039",
    title: "VOICE_LOG_091",
    duration: "03:42",
    caption: '"Just wanted to record the sound of the ocean before we left..."',
    type: "voice",
  },
];

const timeCapsules = [
  { title: "Letter to 30-year-old me", unlockDate: "2025.06.15" },
  { title: "Career pivot decision", unlockDate: "2024.01.01" },
  { title: "Wedding day thoughts", unlockDate: "2026.03.20" },
];

export const Archives = () => {
  const [latestReflection, setLatestReflection] = useState<{
    id: string;
    content: string;
    createdAt: string;
  } | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("fs_reflections");
      if (!raw) return;
      const parsed = JSON.parse(raw) as Array<{
        id: string;
        content: string;
        createdAt: string;
      }>;
      if (!parsed.length) return;
      const sorted = [...parsed].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
      setLatestReflection(sorted[0]);
    } catch {
      setLatestReflection(null);
    }
  }, []);
  return (
    <div className="min-h-full p-6 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Memory Archives</h1>
          <p className="text-muted-foreground mt-1">Fragments of your journey through time</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search memories..."
              className="pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <button className="p-2 border border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-6 mb-8"
      >
        <div className="terminal-card px-5 py-4">
          <p className="text-2xl font-bold text-foreground">128</p>
          <p className="text-xs text-primary font-mono">ENTRIES</p>
        </div>
        <div className="terminal-card px-5 py-4">
          <p className="text-2xl font-bold text-foreground">45k</p>
          <p className="text-xs text-primary font-mono">WORDS</p>
        </div>
        <div className="terminal-card px-5 py-4">
          <p className="text-2xl font-bold text-foreground">3</p>
          <p className="text-xs text-terminal-amber font-mono">LOCKED CAPSULES</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4">
          {/* Quote Fragment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-terminal-amber/10 to-background border border-terminal-amber/30 rounded-lg p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-muted-foreground">FRAGMENT #042</span>
              <Pin className="w-4 h-4 text-terminal-amber" />
            </div>
            <blockquote className="text-xl font-serif text-foreground italic leading-relaxed mb-4">
              {fragments[0].content}
            </blockquote>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{fragments[0].time}</span>
              <span className="px-2 py-1 bg-terminal-amber/20 text-terminal-amber text-xs font-mono rounded">
                {fragments[0].tag}
              </span>
            </div>
          </motion.div>

          {latestReflection && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="terminal-card p-5"
            >
              <div className="mb-4">
                <h3 className="text-xl font-serif text-foreground mb-1">Latest Reflection</h3>
                <p className="text-xs font-mono text-primary">
                  SAVED: {new Date(latestReflection.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="font-serif text-muted-foreground leading-relaxed whitespace-pre-line">
                  {latestReflection.content.slice(0, 400)}
                  {latestReflection.content.length > 400 ? "…" : ""}
                </p>
              </div>
            </motion.div>
          )}

          {/* Letter Entry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="terminal-card p-5"
          >
            <div className="mb-4">
              <h3 className="text-xl font-serif text-foreground mb-1">{fragments[1].title}</h3>
              <p className="text-xs font-mono text-primary">{fragments[1].date}</p>
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <p className="font-serif text-muted-foreground leading-relaxed whitespace-pre-line">
                {fragments[1].content}
              </p>
            </div>
          </motion.div>

          {/* Photo Entry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="terminal-card overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-br from-muted to-background relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image className="w-12 h-12 text-muted-foreground/30" />
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-2 px-2 py-1 bg-background/80 rounded text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {fragments[2].location}
              </div>
            </div>
            <div className="p-4">
              <p className="font-serif text-muted-foreground italic">{fragments[2].caption}</p>
            </div>
          </motion.div>

          {/* Voice Log */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="terminal-card p-5"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-mono text-foreground">{fragments[3].title}</h4>
              </div>
              <span className="text-xs text-muted-foreground font-mono">{fragments[3].duration}</span>
            </div>
            {/* Waveform placeholder */}
            <div className="h-12 flex items-center justify-center gap-1 mb-4">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary/40 rounded-full"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <p className="font-serif text-muted-foreground italic">{fragments[3].caption}</p>
            </div>
          </motion.div>
        </div>

        {/* Sidebar - Time Capsules */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-mono text-sm text-primary mb-4 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              TIME CAPSULES
            </h3>
            <div className="space-y-3">
              {timeCapsules.map((capsule, index) => (
                <div key={index} className="terminal-card p-4 text-center">
                  <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <h4 className="font-medium text-foreground mb-1">{capsule.title}</h4>
                  <p className="text-xs text-muted-foreground font-mono">ENCRYPTED CONTENT</p>
                  <p className="text-xs text-primary font-mono mt-2">UNLOCKS: {capsule.unlockDate}</p>
                </div>
              ))}
              <button className="w-full py-3 border border-dashed border-primary/30 rounded-lg text-primary text-sm hover:bg-primary/10 transition-colors">
                + Create Time Capsule
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Archives;
