import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { currentLevel, xpIntoLevel } from "../../data/experience";

const LINKS = [
  { to: "/", label: "Home", tag: "HUB" },
  { to: "/about", label: "About", tag: "PROFILE" },
  { to: "/projects", label: "Projects", tag: "MISSIONS" },
  { to: "/skills", label: "Skills", tag: "STATS" },
  { to: "/experience", label: "Experience", tag: "QUESTLOG" },
  { to: "/hobbies", label: "Hobbies", tag: "SIDEQUESTS" },
  { to: "/contact", label: "Contact", tag: "COMMS" },
];

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const current = LINKS.find((l) => l.to === location.pathname) ?? LINKS[0];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-line bg-void/70 px-4 py-3 backdrop-blur-xl sm:px-6">
          <NavLink to="/" className="group flex items-center gap-3 focus-ring rounded-lg">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-signal/40">
              <span className="h-2 w-2 rounded-full bg-signal shadow-glow-sm transition-transform group-hover:scale-125" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-semibold tracking-wide text-fog">IKENNA</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-mist">
                {current.tag}
              </p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors focus-ring ${
                    isActive ? "text-fog" : "text-mist hover:text-fog"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-signal/15 border border-signal/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex flex-col items-end">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">
                LVL {currentLevel}
              </span>
              <div className="mt-1 h-1.5 w-20 overflow-hidden rounded-full bg-void-soft">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-signal to-teal"
                  style={{ width: `${(xpIntoLevel / 1000) * 100}%` }}
                />
              </div>
            </div>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <MagneticGo />
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} compact />
            <button
              className="rounded-lg border border-line p-2 text-fog lg:hidden focus-ring"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={18} />
            </button>
          </div>

          <button
            className="hidden rounded-lg border border-line p-2 text-fog sm:block lg:hidden focus-ring"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist">
                World Map
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} compact />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-line p-2 text-fog focus-ring"
                  aria-label="Close navigation"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <nav className="flex h-full flex-col items-center justify-center gap-6 px-6 pb-24">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-medium text-fog"
                  >
                    <span className="mr-3 font-mono text-sm text-signal">{link.tag}</span>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ThemeToggle({ theme, onToggle, compact = false }) {
  const isLight = theme === "light";
  const Icon = isLight ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex items-center justify-center rounded-full border border-line bg-void-soft/70 text-fog transition-colors hover:border-signal/50 hover:text-signal-bright focus-ring ${
        compact ? "h-9 w-9" : "h-10 gap-2 px-3"
      }`}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      title={`Switch to ${isLight ? "dark" : "light"} theme`}
    >
      <Icon size={16} />
      {!compact && (
        <span className="font-mono text-[10px] uppercase tracking-[0.15em]">
          {isLight ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}

function MagneticGo() {
  return (
    <NavLink
      to="/contact"
      className="rounded-full border border-signal/50 bg-signal/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-fog transition-colors hover:bg-signal/20 focus-ring"
    >
      Hire Me
    </NavLink>
  );
}
