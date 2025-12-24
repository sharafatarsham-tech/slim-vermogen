"use client";
import Footer from "../../components/Footer";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Answers = {
  age: number;
  income: number;
  monthly: number;
  years: number;
  hasPension: "yes" | "no" | "unknown";
  taxBracket: "box1" | "unknown";
  name: string;
  email: string;
};

const fmt = (n: number) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(
    Math.round(n)
  );

const TOTAL_STEPS = 7;

export default function ScanPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [a, setA] = useState<Answers>({
    age: 30,
    income: 60000,
    monthly: 250,
    years: 25,
    hasPension: "unknown",
    taxBracket: "unknown",
    name: "",
    email: "",
  });

  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const yearsToGo = useMemo(() => clamp(a.years, 1, 50), [a.years]);

  // Heel simpele indicatie (geen advies)
  const projection = useMemo(() => {
    const monthly = clamp(a.monthly, 0, 5000);
    const r = 0.06; // indicatief rendement p/j
    const m = r / 12;
    const n = yearsToGo * 12;

    // Future value of annuity (bijdragen aan einde van maand)
    const fv = monthly === 0 ? 0 : monthly * ((Math.pow(1 + m, n) - 1) / m);

    // “belastingvoordeel” indicatie (alleen voorbeeld)
    const taxRate = a.taxBracket === "box1" ? 0.37 : 0.0;
    const taxSavedPerMonth = monthly * taxRate;

    return { fv, taxRate, taxSavedPerMonth };
  }, [a.monthly, a.taxBracket, yearsToGo]);

  async function submitLead(): Promise<void> {
    const endpoint = "https://formspree.io/f/mbdrdqvp";

    const email = (a.email ?? "").trim();
    const name = (a.name ?? "").trim();

    // Validatie: Formspree vereist een geldig e-mailadres
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Vul een geldig e-mailadres in.");
      return;
    }
    if (!name || name.length < 2) {
      alert("Vul je naam in.");
      return;
    }

    const payload = {
      source: "SlimVermogenScan",
      name,
      email,
      age: a.age,
      income: a.income,
      monthly: a.monthly,
      years: a.years,
      hasPension: a.hasPension,
      taxBracket: a.taxBracket,
      estimatedEndCapital: Math.round(projection.fv),
      estimatedTaxSavedPerMonth: Math.round(projection.taxSavedPerMonth),
      createdAt: new Date().toISOString(),
    };

    let res: Response;

    try {
      res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Netwerkfout bij verzenden:", err);
      alert("Netwerkfout bij verzenden. Probeer opnieuw.");
      return;
    }

    // Formspree geeft vaak JSON terug (Accept: application/json)
    const data = await res.json().catch(() => null);

    if (!res.ok) {
      console.error("Formspree error:", res.status, data, payload);
      alert("Er ging iets mis met verzenden. Check de console (F12) voor details.");
      return;
    }
  }

  const canNext = useMemo(() => {
    if (step === 6) return a.name.trim().length >= 2 && a.email.includes("@");
    return true;
  }, [step, a.name, a.email]);

  const next = () => setStep((s) => clamp(s + 1, 1, TOTAL_STEPS));
  const prev = () => setStep((s) => clamp(s - 1, 1, TOTAL_STEPS));

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-zinc-600">Slim Vermogen</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">Pensioen Scan</h1>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              Beantwoord een paar vragen. Je krijgt een{" "}
              <span className="font-medium">indicatie</span> van wat je kunt opbouwen
              en een eenvoudige uitleg over mogelijk belastingvoordeel.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">
                Geen advies
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">
                Indicatie op basis van input
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">
                Duurt ± 2 minuten
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-600">
              Stap <span className="font-medium text-zinc-900">{step}</span>/{TOTAL_STEPS}
            </div>
          </div>
        </div>

        {/* Progress */}
        <Progress steps={TOTAL_STEPS} current={step} onJump={(n) => setStep(n)} />

        {/* Card */}
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          {step === 1 && (
            <Step title="Hoe oud ben je?">
              <NumberField
                label="Leeftijd"
                value={a.age}
                min={18}
                max={75}
                onChange={(v) => setA({ ...a, age: v })}
              />
              <Hint>We gebruiken dit alleen om een tijdshorizon te schatten.</Hint>
            </Step>
          )}

          {step === 2 && (
            <Step title="Wat is je (bruto) jaarinkomen?">
              <NumberField
                label="Jaarinkomen (bruto)"
                value={a.income}
                min={0}
                max={1000000}
                prefix="€"
                onChange={(v) => setA({ ...a, income: v })}
              />
              <Hint>Indicatief. Exacte berekening vraagt meer gegevens.</Hint>
            </Step>
          )}

          {step === 3 && (
            <Step title="Hoeveel wil je maandelijks investeren voor pensioen?">
              <div className="flex flex-wrap gap-3">
                {[100, 250, 500, 750, 1000].map((x) => (
                  <button
                    key={x}
                    type="button"
                    onClick={() => setA({ ...a, monthly: x })}
                    className={
                      "rounded-xl border px-4 py-2 text-sm transition hover:bg-zinc-50 " +
                      (a.monthly === x
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-300")
                    }
                  >
                    {fmt(x)}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <NumberField
                  label="Of vul zelf een bedrag in"
                  value={a.monthly}
                  min={0}
                  max={5000}
                  prefix="€"
                  onChange={(v) => setA({ ...a, monthly: v })}
                />
              </div>

              <Hint>
                Dit is een indicatie. Inleg hangt af van jaarruimte/reserveringsruimte en je situatie.
              </Hint>
            </Step>
          )}

          {step === 4 && (
            <Step title="Voor hoeveel jaar wil je dit ongeveer doen?">
              <NumberField
                label="Aantal jaren"
                value={a.years}
                min={1}
                max={50}
                onChange={(v) => setA({ ...a, years: v })}
              />
              <Hint>Bijvoorbeeld tot je 67e, of eerder stoppen.</Hint>
            </Step>
          )}

          {step === 5 && (
            <Step title="Even scherp krijgen: opbouw + belastingkennis">
              <div className="grid gap-4">
                {/* Part 1 */}
                <div className="rounded-2xl border border-zinc-200 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        Heb je al pensioenopbouw?
                      </p>
                      <p className="mt-1 text-xs text-zinc-600">
                        Via werkgever, eigen regeling, lijfrente of iets vergelijkbaars.
                      </p>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600">
                      Stap 5/7
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <Choice
                      active={a.hasPension === "yes"}
                      onClick={() => setA({ ...a, hasPension: "yes" })}
                      title="Ja"
                      desc="Ik heb al (iets van) opbouw"
                    />
                    <Choice
                      active={a.hasPension === "no"}
                      onClick={() => setA({ ...a, hasPension: "no" })}
                      title="Nee"
                      desc="Ik bouw nu niets op"
                    />
                    <Choice
                      active={a.hasPension === "unknown"}
                      onClick={() => setA({ ...a, hasPension: "unknown" })}
                      title="Weet ik niet"
                      desc="Ik heb geen overzicht"
                    />
                  </div>
                </div>

                {/* Part 2 */}
                <div className="rounded-2xl border border-zinc-200 p-4 sm:p-5">
                  <p className="text-sm font-semibold text-zinc-900">
                    Weet je of pensioen-inleg bij jou meestal aftrekbaar is (Box 1)?
                  </p>
                  <p className="mt-1 text-xs text-zinc-600">
                    Alleen voor een simpele indicatie. Voor zekerheid moet je jaarruimte berekend worden.
                  </p>

                  <div className="mt-4">
                    <Segmented
                      value={a.taxBracket}
                      onChange={(v) => setA({ ...a, taxBracket: v })}
                      options={[
                        {
                          value: "box1",
                          title: "Box 1 (meestal)",
                          desc: "Toon indicatie van mogelijk voordeel",
                        },
                        {
                          value: "unknown",
                          title: "Weet ik niet",
                          desc: "Dan tonen we geen voordeel-bedrag",
                        },
                      ]}
                    />
                  </div>

                  <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-xs font-semibold text-zinc-900">Kort uitgelegd</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-700">
                      Als je pensioen-inleg fiscaal aftrekbaar is, betaal je nu vaak minder belasting
                      (maar je betaalt later belasting bij uitkeren). Dit hangt o.a. af van{" "}
                      <span className="font-medium">jaarruimte</span>.
                    </p>
                  </div>
                </div>

                <Hint>Geen advies — alleen een eerste indicatie.</Hint>
              </div>
            </Step>
          )}

          {step === 6 && (
            <Step title="Waar mogen we je resultaat naartoe sturen?">
              <TextField
                label="Naam"
                placeholder="Bijv. Arsham"
                value={a.name}
                onChange={(v) => setA({ ...a, name: v })}
              />
              <div className="mt-4">
                <TextField
                  label="E-mail"
                  placeholder="naam@email.nl"
                  value={a.email}
                  onChange={(v) => setA({ ...a, email: v })}
                />
              </div>

              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-700">
                We gebruiken dit alleen om je resultaat te sturen. Je bepaalt daarna zelf of je contact wilt.
              </div>
            </Step>
          )}

          {step === 7 && (
            <Step title="Jouw indicatie (geen advies)">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card
                  title="Indicatie eindkapitaal"
                  value={fmt(projection.fv)}
                  sub={`Bij ${fmt(a.monthly)}/maand, ~6% p/j, ${yearsToGo} jaar`}
                />
                <Card
                  title="Indicatie belastingvoordeel"
                  value={projection.taxRate > 0 ? `${fmt(projection.taxSavedPerMonth)}/maand` : "Onbekend"}
                  sub={projection.taxRate > 0 ? "Indicatief (geen jaarruimte-check)" : "Kies Box 1 in stap 5 voor indicatie"}
                />
              </div>

              <div className="mt-6 rounded-xl border border-zinc-200 p-4">
                <p className="text-sm font-semibold">Wat nu?</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                  <li>Wil je exact weten wat je kan aftrekken (jaarruimte) en wat je slimste route is?</li>
                  <li>Dan plannen we een korte call en maken we het concreet.</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  disabled={submitting}
                  onClick={async () => {
                    if (submitting) return;
                    try {
                      setSubmitting(true);
                      await submitLead();
                      router.push("/bedankt");
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  className={
                    "inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-white transition hover:opacity-90 " +
                    (submitting ? "cursor-not-allowed opacity-60" : "")
                  }
                >
                 {submitting ? "Verzenden..." : "Aanvragen"}
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
                >
                  Terug naar home
                </Link>
              </div>

              <p className="mt-6 text-xs text-zinc-500">
                Disclaimer: indicaties zijn vereenvoudigd en kunnen afwijken. Geen persoonlijk advies.
                Voor advies is inventarisatie vereist.
              </p>
            </Step>
          )}

          {/* Nav */}
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              disabled={step === 1}
              className={
                "rounded-xl px-4 py-2 text-sm transition " +
                (step === 1 ? "text-zinc-400" : "border border-zinc-300 hover:bg-zinc-50")
              }
            >
              ← Vorige
            </button>

            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={next}
                disabled={!canNext}
                className={
                  "rounded-xl px-4 py-2 text-sm text-white transition " +
                  (canNext ? "bg-zinc-900 hover:opacity-90" : "bg-zinc-400")
                }
              >
                Volgende →
              </button>
            ) : (
              <span className="text-sm text-zinc-500">Klaar</span>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          Slim Vermogen — indicatie, geen persoonlijk advies.
        </p>
      </div>
    </main>
  );
}

/* ---------------- Components ---------------- */

function Progress({
  steps,
  current,
  onJump,
}: {
  steps: number;
  current: number;
  onJump: (n: number) => void;
}) {
  const pct = ((current - 1) / (steps - 1)) * 100;

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-2">
        <div className="h-2 w-full rounded-full bg-zinc-100">
          <div className="h-2 rounded-full bg-zinc-900 transition-all" style={{ width: `${pct}%` }} />
        </div>
        <div className="shrink-0 text-xs text-zinc-500">{Math.round(pct)}%</div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        {Array.from({ length: steps }).map((_, i) => {
          const n = i + 1;
          const active = n === current;
          const done = n < current;

          return (
            <button
              key={n}
              type="button"
              onClick={() => onJump(n)}
              className="group flex flex-col items-center gap-1"
              aria-label={`Ga naar stap ${n}`}
            >
              <span
                className={
                  "grid h-8 w-8 place-items-center rounded-full border text-xs font-semibold transition " +
                  (active
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : done
                    ? "border-zinc-900 bg-white text-zinc-900"
                    : "border-zinc-300 bg-white text-zinc-500 group-hover:border-zinc-500")
                }
              >
                {n}
              </span>
              <span className={"text-[11px] " + (active ? "text-zinc-900" : "text-zinc-500")}>
                {n === 1 ? "Start" : n === steps ? "Resultaat" : `Stap ${n}`}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-xs text-zinc-500">{children}</p>;
}

function NumberField({
  label,
  value,
  min,
  max,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  prefix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-800">{label}</span>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 focus-within:border-zinc-900">
        {prefix ? <span className="text-sm text-zinc-500">{prefix}</span> : null}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-800">{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
      />
    </label>
  );
}

function Choice({
  title,
  desc,
  active,
  onClick,
}: {
  title: string;
  desc: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-2xl border p-4 text-left transition hover:bg-zinc-50 " +
        (active ? "border-zinc-900 bg-zinc-900 text-white hover:opacity-95" : "border-zinc-300")
      }
    >
      <div className="text-sm font-semibold">{title}</div>
      <div className={"mt-1 text-xs " + (active ? "text-white/80" : "text-zinc-600")}>{desc}</div>
    </button>
  );
}

function Card({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-5">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className="mt-2 text-xs text-zinc-500">{sub}</div>
    </div>
  );
}

function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: Array<{ value: T; title: string; desc: string }>;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={
              "rounded-2xl border p-4 text-left transition " +
              (active ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 bg-white hover:bg-zinc-50")
            }
          >
            <div className="text-sm font-semibold">{o.title}</div>
            <div className={"mt-1 text-xs " + (active ? "text-white/80" : "text-zinc-600")}>{o.desc}</div>
          </button>
        );
      })}
    </div>
  );
}