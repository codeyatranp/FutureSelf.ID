import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  Archive,
  Brain,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { path: "/terminal", label: "Dashboard", icon: LayoutDashboard },
  { path: "/timeline", label: "Trajectory Map", icon: TrendingUp },
  { path: "/identity", label: "Blueprints", icon: Brain },
  { path: "/archives", label: "Archives", icon: Archive },
];

const bottomItems = [
  { path: "/settings", label: "System Settings", icon: Settings },
];

export const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("fs_user");
    navigate("/login");
  };

  return (
    <aside className="w-56 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 border border-primary rounded flex items-center justify-center">
            <span className="text-primary text-xs">▶</span>
          </div>
          <span className="text-foreground font-semibold">FutureSelf.id</span>
        </div>
        <p className="text-xs text-muted-foreground">v2.0.4 // BETA_BUILD</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group ${
                isActive
                  ? "bg-sidebar-accent text-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 w-1 h-6 bg-primary rounded-r"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
              <span className="font-mono">// {item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        {bottomItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground transition-all"
          >
            <item.icon className="w-4 h-4 text-muted-foreground" />
            <span className="font-mono">// {item.label}</span>
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground transition-all"
        >
          <LogOut className="w-4 h-4 text-muted-foreground" />
          <span className="font-mono">// Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
