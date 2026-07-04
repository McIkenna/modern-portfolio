import { useEffect, useState, useCallback } from "react";
import {  Outlet } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import MouseGlow from "./MouseGlow";
import ParticleField from "./ParticleField";
import PageTransition from "./PageTransition";
import DevConsole from "./DevConsole";
import EasterEggToast from "./EasterEggToast";
import CustomCursor from "./CustomCursor";
import { useKonami } from "../../hooks/useKonami";

export default function Layout({ theme, onToggleTheme }) {
  // const location = useLocation();
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const fireToast = useCallback((message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2800);
  }, []);

  useKonami(() => fireToast("Achievement unlocked — Secret Sequence Found"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === "`") {
        e.preventDefault();
        setConsoleOpen((o) => !o);
      }
      if (e.key === "Escape") setConsoleOpen(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  return (
    <div className="relative min-h-screen bg-grid">
      <CustomCursor />
      <MouseGlow />
      <div className="fixed inset-0 z-0">
        <ParticleField density={40} />
      </div>
      <Nav theme={theme} onToggleTheme={onToggleTheme} />

      {/* <AnimatePresence mode="wait"> */}
        <PageTransition >
          <Outlet />
        </PageTransition>
      {/* </AnimatePresence> */}

      <Footer />

      <DevConsole open={consoleOpen} onClose={() => setConsoleOpen(false)} />
      <EasterEggToast show={Boolean(toast)} message={toast} />
    </div>
  );
}
