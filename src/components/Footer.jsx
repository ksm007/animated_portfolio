export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--soft-border)", color: "var(--muted-copy)" }}>
        <p>Built with React, Vite, Framer Motion, and a bias toward shipping real work.</p>
        <p>© {new Date().getFullYear()} Kartik Marathe · Tempe, Arizona</p>
      </div>
    </footer>
  );
}
