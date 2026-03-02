"use client";

import { useState } from "react";
// import { useTheme } from "@/contexts/ThemeContext";
import { useTheme } from "@/view/user/contexts/ThemeContext";
// import { useTheme } from "../contexts/ThemeContext";

const NAV_ITEMS = [
  {
    label: "Dashboard", tip: "Dashboard",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
  },
  {
    label: "Practice", tip: "Practice",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    label: "Resources", tip: "Resources",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    label: "ATS", tip: "ATS",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="12" y2="15"/></svg>,
  },
  {
    label: "AI Interview", tip: "AI Interview",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="12" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>,
  },
  {
    label: "Blog", tip: "Blog",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  },
  {
    label: "Tech Shop", tip: "Tech Shop",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  },
  {
    label: "Roadmaps", tip: "Roadmaps",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
  },
  {
    label: "Finance", tip: "Finance", divider: true,
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    label: "Transactions", tip: "Transactions",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <aside
      className={`
        relative z-20 flex flex-col flex-shrink-0 overflow-hidden
        transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]
        ${collapsed ? "w-[66px]" : "w-[215px]"}
      `}
      style={{ background: "var(--surface)", borderRight: "1px solid var(--border)" }}
    >
      {/* Inner wrapper — fixed width prevents content reflow */}
      <div className="flex flex-col flex-1 w-[215px]">

        {/* Logo */}
        <div className="relative flex items-center gap-2 px-[18px] py-5 min-h-[64px] flex-shrink-0">
          {/* Logo icon */}
          <div
            className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0
                        font-extrabold text-base text-white italic font-syne cursor-pointer
                        transition-all duration-200 hover:scale-[1.07] hover:-rotate-3"
            style={{
              background: "var(--orange)",
              boxShadow: "0 4px 14px rgba(241,90,34,0.35)",
            }}
          >
            e
          </div>

          {/* Logo text */}
          <div
            className={`font-syne text-xl font-extrabold tracking-tight whitespace-nowrap
                        transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${collapsed ? "opacity-0 -translate-x-3 pointer-events-none w-0" : "opacity-100 translate-x-0"}`}
            style={{ color: "var(--text)" }}
          >
            <em className="not-italic" style={{ color: "var(--orange)" }}>e</em>mple
          </div>

          {/* Collapse toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute top-6 -right-[13px] z-30 w-[26px] h-[26px] rounded-full
                       flex items-center justify-center cursor-pointer
                       transition-all duration-200
                       hover:!bg-[var(--orange)] hover:!text-white hover:!border-[var(--orange)]"
            style={{
              background: "var(--surface2)",
              border: "1px solid var(--border)",
              color: "var(--muted2)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            <svg
              width="11" height="11" viewBox="0 0 12 12" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
              className={`transition-transform duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${collapsed ? "scale-x-[-1]" : ""}`}
            >
              <polyline points="8,2 4,6 8,10"/>
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav
          className={`flex-1 px-[10px] py-1 overflow-y-auto overflow-x-hidden
                      ${collapsed ? "sidebar-collapsed" : ""}`}
        >
          {NAV_ITEMS.map((item, i) => {
            const isActive = active === i;
            return (
              <div key={item.label}>
                {item.divider && (
                  <div className="h-px my-2 mx-1" style={{ background: "var(--border)" }} />
                )}
                <div
                  data-tip={item.tip}
                  onClick={() => setActive(i)}
                  className={`
                    has-tip relative flex items-center gap-[11px] px-[10px] py-[9px]
                    rounded-[11px] cursor-pointer select-none mb-[1px]
                    text-[13.5px] whitespace-nowrap
                    transition-all duration-[180ms]
                    ${isActive
                      ? "text-white font-semibold"
                      : "font-medium hover:opacity-100"
                    }
                  `}
                  style={{
                    background: isActive ? "var(--orange)" : "transparent",
                    color: isActive ? "#fff" : "var(--muted2)",
                    boxShadow: isActive ? "0 4px 14px rgba(241,90,34,0.35)" : "none",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.background = "var(--orange-dim)";
                      (e.currentTarget as HTMLElement).style.color = "var(--orange)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "var(--muted2)";
                    }
                  }}
                >
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span
                    className={`flex-1 transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                                ${collapsed ? "opacity-0 -translate-x-2 pointer-events-none w-0 overflow-hidden" : "opacity-100 translate-x-0"}`}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Theme toggle */}
        <div className="p-[10px]" style={{ borderTop: "1px solid var(--border)" }}>
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-[11px] px-[10px] py-[9px] rounded-[11px]
                       cursor-pointer text-[13.5px] font-medium whitespace-nowrap
                       border-none transition-all duration-[180ms]"
            style={{ background: "transparent", color: "var(--muted2)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--orange-dim)";
              (e.currentTarget as HTMLElement).style.color = "var(--orange)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--muted2)";
            }}
          >
            <div className="w-7 h-7 flex items-center justify-center text-base">
              {theme === "dark" ? "☀️" : "🌙"}
            </div>
            <span
              className={`text-left flex-1 transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                          ${collapsed ? "opacity-0 -translate-x-2 pointer-events-none" : "opacity-100 translate-x-0"}`}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>

      </div>
    </aside>
  );
}