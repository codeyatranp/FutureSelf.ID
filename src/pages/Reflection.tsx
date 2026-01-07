import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Settings, Maximize2, Send, MessageCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Reflection = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between px-6 py-4"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Exit Focus</span>
        </button>
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Main Writing Area */}
      <main className="flex-1 flex flex-col items-center justify-start px-6 pt-16 pb-8 max-w-3xl mx-auto w-full">
        {/* Prompt Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
            <span className="w-2 h-2 rounded-full bg-primary" />
            REFLECTION PROMPT
          </span>
        </motion.div>

        {/* Question */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-serif text-foreground text-center mb-3 leading-tight"
        >
          What does your ideal Tuesday look like 5 years from now?
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-sm mb-12"
        >
          October 24th • Future Self Session
        </motion.p>

        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full flex-1"
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Dear Future Self, today I started thinking about..."
            className="w-full h-full min-h-[300px] bg-transparent text-foreground text-lg md:text-xl font-serif leading-relaxed 
                     placeholder:text-muted-foreground/40 focus:outline-none resize-none"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="border-t border-border px-6 py-4"
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              {wordCount} WORDS
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              12:00
            </span>
          </div>

          {/* Send Button */}
          <div className="flex items-center gap-6">
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg 
                             flex items-center gap-2 hover:bg-primary/90 transition-all box-glow">
              <Send className="w-4 h-4" />
              Send to 2029
            </button>

            {/* Daily Goal */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-primary font-mono">DAILY GOAL</span>
              <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-[35%] bg-primary" />
              </div>
              <span className="text-xs text-primary font-mono">35%</span>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Reflection;
