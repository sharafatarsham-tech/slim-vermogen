"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-24 items-center justify-between overflow-hidden">
          {/* LOGO LINKS */}
          <Link href="/" className="flex items-center h-full">
            <Brand />
          </Link>

          {/* MENU (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link
              href={onHome ? "#hoe-werkt-het" : "/#hoe-werkt-het"}
              className="transition hover:text-zinc-900"
            >
              Hoe werkt het?
            </Link>

            <Link
              href={onHome ? "#faq" : "/#faq"}
              className="transition hover:text-zinc-900"
            >
              FAQ
            </Link>

            <Link href="/kennis" className="transition hover:text-zinc-900">
              Kennis
            </Link>
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