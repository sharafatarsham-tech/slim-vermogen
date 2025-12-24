import Link from "next/link";
import Brand from "./Brand";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
      <div className="flex h-24 items-center justify-between">
          
          {/* LOGO LINKS */}
          <Link href="/" className="flex items-center">
            <Brand />
          </Link>

          {/* MENU (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <a href="#hoe-werkt-het" className="transition hover:text-zinc-900">
              Hoe werkt het?
            </a>
            <a href="#faq" className="transition hover:text-zinc-900">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <Link
            href="/scan"
            className="inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start scan
          </Link>

        </div>
      </div>
    </header>
  );
}