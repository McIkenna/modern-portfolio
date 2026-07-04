export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
          © {new Date().getFullYear()} Ikenna — All rights reserved
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/50">
          Built with vite
        </p>
      </div>
    </footer>
  );
}
