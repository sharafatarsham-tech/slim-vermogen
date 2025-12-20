import Link from "next/link";
import Brand from "./Brand";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <Link href="/" className="text-zinc-900">
          <Brand />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          <a className="hover:text-zinc-900 transition" href="#hoe-werkt-het">
            Hoe werkt het?
          </a>
          <a className="hover:text-zinc-900 transition" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
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
