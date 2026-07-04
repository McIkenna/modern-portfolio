import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BootScreen from "./components/layout/BootScreen";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));
const Hobbies = lazy(() => import("./pages/Hobbies"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="h-8 w-8 animate-spin-slow rounded-full border-2 border-dashed border-signal/40" />
    </div>
  );
}

export default function App() {
  const [booted, setBooted] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  });
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <AnimatePresence>{!booted && <BootScreen onEnter={() => setBooted(true)} />}</AnimatePresence>

      {booted && (
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              
              <Route element={<Layout theme={theme} onToggleTheme={toggleTheme} />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
}
