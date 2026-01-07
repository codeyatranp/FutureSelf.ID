import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="terminal-card max-w-md w-full p-8 text-center"
      >
        {/* Error Code */}
        <div className="mb-6">
          <span className="text-6xl font-bold text-primary terminal-glow-intense">404</span>
        </div>

        {/* Terminal Style Message */}
        <div className="text-left bg-background/50 rounded-lg p-4 mb-6 font-mono text-sm">
          <p className="text-destructive mb-1">{">"} ERROR: Route not found</p>
          <p className="text-muted-foreground mb-1">{">"} Requested: {location.pathname}</p>
          <p className="text-muted-foreground mb-1">{">"} Status: MEMORY_FRAGMENT_MISSING</p>
          <p className="text-primary">{">"} Recommendation: Return to known coordinates</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Initialize
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
