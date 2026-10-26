import React from "react";
import {
  Book,
  LayoutDashboard,
  Library,
  BookOpen,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import { NavLink } from "react-router";

export default function SideBar() {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "My Library", path: "/library", icon: Library },
    { name: "Currently Reading", path: "/reading", icon: BookOpen },
    { name: "Want to Read", path: "/want-to-read", icon: Bookmark },
    { name: "Completed", path: "/completed", icon: CheckCircle2 },
  ];
  return (
    <aside className="w-64 min-h-screen bg-background border-r border-border flex flex-col p-6">
      {/* Brand / Logo Header */}
      <div className="flex items-center gap-3 mb-10 cursor-pointer">
        <div className="w-10 h-10 rounded-tile bg-primary text-surface flex items-center justify-center shadow-button">
          <Book className="w-5 h-5" />
        </div>
        <span className="font-display text-2xl text-ink">BookNest</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-1.5 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"} // Ensures /dashboard isn't active on sub-routes like /dashboard/library
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-tile text-ui transition-colors ${
                  isActive
                    ? "bg-primary-soft text-primary-ink font-medium"
                    : "text-muted hover:text-ink hover:bg-surface-hover"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
