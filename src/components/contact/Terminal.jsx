import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Radio } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import emailjs from "@emailjs/browser";


const FIELDS = [
  { id: "name", label: "Callsign", placeholder: "Your name", type: "text" },
  { id: "email", label: "Frequency", placeholder: "you@email.com", type: "email" },
];

export default function Terminal() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState(null);

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;   // from Email Services
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  // from Email Templates
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // from Account → General

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) return;
    setStatus("sending");
    setError(null);
 
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("idle");
      setError("Transmission failed — please try again.");
    }
  };

   return (
    <div className="panel relative overflow-hidden p-6 sm:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full animate-scanline bg-gradient-to-b from-transparent via-fog to-transparent" />
      </div>
 
      <div className="mb-8 flex items-center gap-3">
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-teal/40">
          <Radio size={14} className="text-teal" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-teal animate-pulse-slow" />
        </span>
        <div>
          <p className="font-display text-sm text-fog">Comms Channel Open</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
            Response time: ~24 hours
          </p>
        </div>
      </div>
 
      <AnimatePresence mode="wait">
        {status !== "sent" ? (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <div key={field.id} className="relative">
                  <label
                    htmlFor={field.id}
                    className={`mono-label mb-2 block transition-colors ${
                      focused === field.id ? "text-signal-bright" : ""
                    }`}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    value={values[field.id]}
                    onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-line bg-void/60 px-4 py-3 font-body text-sm text-fog outline-none transition-colors placeholder:text-mist/40 focus:border-signal/60"
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-signal"
                    initial={{ width: "0%" }}
                    animate={{ width: focused === field.id ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </div>
 
            <div className="relative">
              <label
                htmlFor="message"
                className={`mono-label mb-2 block transition-colors ${
                  focused === "message" ? "text-signal-bright" : ""
                }`}
              >
                Transmission
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="What are you building, and how can I help?"
                className="w-full resize-none rounded-xl border border-line bg-void/60 px-4 py-3 font-body text-sm text-fog outline-none transition-colors placeholder:text-mist/40 focus:border-signal/60"
              />
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-signal"
                initial={{ width: "0%" }}
                animate={{ width: focused === "message" ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
 
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-danger/40 bg-danger/10 px-4 py-2.5 font-mono text-xs text-danger"
              >
                {error}
              </motion.p>
            )}
 
            <MagneticButton
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-signal px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-void shadow-glow focus-ring disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="h-3.5 w-3.5 rounded-full border-2 border-void border-t-transparent"
                  />
                  Transmitting…
                </>
              ) : (
                <>
                  Send Transmission <Send size={14} />
                </>
              )}
            </MagneticButton>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 15 }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-teal/50 bg-teal/10 shadow-[0_0_40px_rgba(94,234,212,0.25)]"
            >
              <CheckCircle2 size={28} className="text-teal" />
            </motion.span>
            <p className="mt-5 font-display text-xl text-fog">Transmission received</p>
            <p className="mt-2 max-w-xs text-sm text-mist">
              Thanks for reaching out — I'll reply within a day. Achievement unlocked: Made
              Contact.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}