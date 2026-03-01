"use client";

// import { useTheme } from "@/contexts/ThemeContext";
// import { useTheme } from "../contexts/ThemeContext";
import { useTheme } from "@/view/user/contexts/ThemeContext";
import { ShoppingCart, Clapperboard, Sparkles, Bell } from "lucide-react";

export default function Topbar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const iconBtns = [
    { title: "Buy More Coins", icon: <ShoppingCart size={20} /> },
    { title: "Media - Coming Soon", icon: <Clapperboard size={22} /> },
    { title: "Emple AI", icon: <Sparkles size={22} /> },
    { title: "Notifications", icon: <Bell size={20} /> },
  ];

  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .enhanced-navbar {
          backdrop-filter: blur(10px);
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .enhanced-navbar.light-nav {
          background: linear-gradient(90deg, #ffffff 0%, #fffbf7 100%);
          border-bottom: 1px solid rgba(249,115,22,0.1);
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          color: #374151;
        }
        .enhanced-navbar.dark-nav {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .logo-img {
          height: 35px; width: auto; display: block;
          background: transparent !important;
          border: none !important; box-shadow: none !important;
          transition: all 0.3s ease;
        }
        .logo-img:hover { transform: scale(1.05); filter: brightness(1.05); }
        .coin-badge-light {
          background: #f3f4f6; border: 1.5px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1); color: #374151;
          transition: all 0.3s ease;
        }
        .coin-badge-light:hover {
          background: #ffffff; border-color: #d1d5db;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12); transform: translateY(-1px);
        }
        .coin-badge-dark {
          background: rgba(253,216,53,0.1);
          border: 1px solid rgba(253,216,53,0.3);
          color: #f0c030; transition: all 0.3s ease;
        }
        .coin-badge-dark:hover { background: rgba(253,216,53,0.18); transform: translateY(-1px); }
        .nav-icon-btn {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; border: none; background: transparent;
          transition: all 0.3s ease;
        }
        .nav-icon-btn.light-icon { color: #6b7280; }
        .nav-icon-btn.dark-icon { color: var(--muted2); }
        .nav-icon-btn:hover {
          transform: translateY(-2px);
          background-color: rgba(249,115,22,0.1) !important;
          color: #f97316 !important;
        }
        .user-avatar-light {
          border: 2px solid #f97316;
          box-shadow: 0 4px 12px rgba(249,115,22,0.2);
          transition: all 0.3s ease; cursor: pointer;
        }
        .user-avatar-light:hover { transform: scale(1.1); box-shadow: 0 6px 16px rgba(249,115,22,0.3); }
        .user-avatar-dark {
          border: 2px solid var(--border);
          box-shadow: 0 2px 8px rgba(241,90,34,0.3);
          transition: all 0.3s ease; cursor: pointer;
        }
        .user-avatar-dark:hover { transform: scale(1.1); box-shadow: 0 4px 14px rgba(241,90,34,0.45); }
      `}</style>

      <header className="relative h-[62px]">
        <nav className={`enhanced-navbar ${isDark ? "dark-nav" : "light-nav"} fixed left-0 h-[62px] flex items-center pr-8 pl-6 justify-between z-40 w-full top-0`}>

          {/* Logo */}
          <div className="flex items-center">
            {isDark ? (
              <span className="font-syne text-xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
                <em className="not-italic" style={{ color: "var(--orange)" }}>e</em>mple
              </span>
            ) : (
              <img
                src="/emple-logo.png"
                alt="Emple"
                className="logo-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".logo-fallback") as HTMLElement;
                  if (fallback) fallback.style.display = "block";
                }}
              />
            )}
            <span
              className="logo-fallback font-syne text-xl font-extrabold tracking-tight text-orange-500"
              style={{ display: "none" }}
            >
              <em className="not-italic">e</em>
              <em className="not-italic text-gray-800">mple</em>
            </span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Coin Badge */}
            <div className={`coin-badge-${isDark ? "dark" : "light"} flex gap-2 rounded-full items-center px-3 py-1.5 cursor-pointer`}>
              <span
                className="w-[22px] h-[22px] rounded-full inline-flex items-center justify-center text-[9px] font-extrabold"
                style={{ background: "#fdd835", color: "#6d4c00" }}
              >
                BK
              </span>
              <span className="text-xs font-semibold">100</span>
            </div>

            {/* Icon Buttons */}
            {iconBtns.map(({ title, icon }) => (
              <button key={title} title={title} className={`nav-icon-btn ${isDark ? "dark-icon" : "light-icon"}`}>
                {icon}
              </button>
            ))}

            {/* User Avatar */}
            <div
              className={`user-avatar-${isDark ? "dark" : "light"} w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white`}
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #f15a22, #6c63ff)"
                  : "linear-gradient(135deg, #f97316, #fb923c)",
              }}
            >
              SD
            </div>

          </div>
        </nav>
      </header>
    </>
  );
}