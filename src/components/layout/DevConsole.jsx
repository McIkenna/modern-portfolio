import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ROUTES = {
  home: "/",
  about: "/about",
  projects: "/projects",
  skills: "/skills",
  experience: "/experience",
  hobbies: "/hobbies",
  contact: "/contact",
};

export default function DevConsole({ open, onClose }) {
  const [lines, setLines] = useState([
    "developer console — type 'help' for a list of commands",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const print = (text) => setLines((l) => [...l, text]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    print(`> ${raw}`);
    if (!cmd) return;

    if (cmd === "help") {
      print(
        "commands: help, about, projects, skills, experience, hobbies, contact, whoami, clear, matrix, exit"
      );
    } else if (cmd in ROUTES) {
      print(`navigating to ${cmd}…`);
      navigate(ROUTES[cmd]);
      setTimeout(onClose, 350);
    } else if (cmd === "whoami") {
      print("guest — exploring the portfolio of A. Devlin, design engineer.");
    } else if (cmd === "clear") {
      setLines([]);
    } else if (cmd === "matrix") {
      print("wake up… the portfolio has you. follow the white cursor.");
    } else if (cmd === "exit") {
      onClose();
    } else {
      print(`command not found: ${cmd} — type 'help'`);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end justify-center bg-void/70 backdrop-blur-sm p-4 sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-signal/30 bg-void-panel shadow-glow"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                secret_dev_mode.sh
              </span>
            </div>
            <div className="h-64 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed text-fog/90">
              {lines.map((l, i) => (
                <div key={i} className="whitespace-pre-wrap">
                  {l}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                runCommand(input);
                setInput("");
              }}
              className="flex items-center gap-2 border-t border-line px-4 py-3"
            >
              <span className="font-mono text-signal">{">"}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent font-mono text-xs text-fog outline-none placeholder:text-mist/50"
                placeholder="type a command…"
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
