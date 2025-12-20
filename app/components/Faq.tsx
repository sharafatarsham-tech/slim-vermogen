"use client";

import { useState } from "react";

export default function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-6">
        <div className="text-sm font-semibold text-zinc-900">{q}</div>
        <div
          className={[
            "grid h-8 w-8 place-items-center rounded-full border border-zinc-200 text-zinc-500 transition",
            open ? "rotate-45" : "",
          ].join(" ")}
          aria-hidden
        >
          +
        </div>
      </div>

      {open && (
        <div className="mt-3 text-sm leading-6 text-zinc-600">
          {a}
        </div>
      )}
    </button>
  );
}