// app/kennis/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Kennis & Onderzoek — Pensioengat (NL) | Slim Vermogen",
  description:
    "Feiten, onderzoeken en openbare bronnen over het pensioengat in Nederland — met focus op zzp’ers en mensen zonder pensioenregeling.",
};

export default function KennisPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main>
        {/* HERO */}
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-zinc-500">Kennis</p>

              {/* 1x H1 */}
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                Pensioengat in Nederland: feiten, cijfers en bronnen
              </h1>

              <p className="mt-4 text-lg leading-7 text-zinc-700">
                Op deze pagina verzamelen we openbare onderzoeken en cijfers over
                het pensioengat. Vooral relevant voor zzp’ers (die het meestal zelf
                moeten regelen) en mensen in loondienst zonder pensioenregeling
                (“witte vlek”).
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/scan"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Start de scan (2 min)
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
                >
                  Terug naar home
                </Link>
              </div>

              {/* Quick facts */}
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                  Werknemers zonder regeling: CBS (nieuwste publicaties 2024–2025)
                </span>
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                  Zzp-pensioenbeleving: Knab (okt 2024)
                </span>
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                  Voorbereiding op pensioen: Centraal Beheer (nov 2025)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* LEFT: content */}
              <div className="lg:col-span-8 space-y-10">
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    1) Wat is een pensioengat?
                  </h2>
                  <p className="text-zinc-700 leading-7">
                    Een pensioengat betekent simpel gezegd: je verwacht later een
                    bepaald inkomen, maar je opbouw (AOW + aanvullend pensioen +
                    eigen vermogen) is onvoldoende om dat te halen. Het probleem
                    blijft vaak onzichtbaar tot je het doorrekent.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    2) Waarom groeit dit probleem (zeker bij zzp’ers)?
                  </h2>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                    <h3 className="text-base font-semibold text-zinc-900">
                      Zzp’ers moeten het meestal zelf regelen
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 leading-6">
                      Knab publiceerde in oktober 2024 onderzoek onder zzp’ers waaruit
                      blijkt dat een grote groep het gevoel heeft dat het pensioen
                      niet (goed) geregeld is. Dit sluit aan bij het praktijkbeeld:
                      pensioen wordt vaak uitgesteld door drukte, onduidelijkheid of
                      “ik regel het later”.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                    <h3 className="text-base font-semibold text-zinc-900">
                      “Witte vlek”: loondienst zonder pensioenregeling
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 leading-6">
                      Ook in loondienst komt het voor dat mensen geen pensioenregeling via
                      de werkgever hebben. CBS publiceert hier metingen over (werknemers
                      zonder pensioenregeling via werkgever).
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                    <h3 className="text-base font-semibold text-zinc-900">
                      Veel werkenden voelen zich niet voorbereid
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 leading-6">
                      In november 2025 publiceerde Centraal Beheer resultaten waaruit volgt
                      dat een aanzienlijk deel van de werkenden zich niet goed voorbereid voelt
                      op het pensioen.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    3) Wat kun je hiermee als bezoeker?
                  </h2>

                  <ul className="space-y-3 text-zinc-800">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600 flex-none" />
                      <span>
                        Eerst overzicht: wat is je huidige opbouw en wat ontbreekt er?
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600 flex-none" />
                      <span>
                        Daarna opties: welke oplossingen passen bij jouw situatie (zzp/loondienst, inkomen, horizon)?
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600 flex-none" />
                      <span>
                        Pas daarna actie: wat is een logische maandstap die je kunt volhouden?
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                    <p className="font-semibold text-zinc-900">Praktisch</p>
                    <p className="mt-2 text-sm text-zinc-700 leading-6">
                      Wil je snel een indicatie? Gebruik de scan. Wil je dieper de cijfers in,
                      gebruik onderstaande bronnen en check ze zelf.
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/scan"
                        className="inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                      >
                        Naar de scan
                      </Link>
                      <Link
                        href="/#probleem"
                        className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
                      >
                        Lees de uitleg op home
                      </Link>
                    </div>
                  </div>
                </section>
              </div>

              {/* RIGHT: sources */}
              <aside className="lg:col-span-4">
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                  <p className="text-sm font-semibold text-zinc-900">
                    Bronnen (openbaar)
                  </p>
                  <p className="mt-2 text-sm text-zinc-700">
                    Deze links zijn bedoeld om te checken en te onderbouwen.
                  </p>

                  <ul className="mt-5 space-y-3 text-sm">
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://www.cbs.nl/nl-nl/nieuws/2024/25/aantal-werknemers-zonder-pensioen-afgenomen-met-bijna-20-procent"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CBS (18 juni 2024): werknemers zonder pensioenregeling via werkgever
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://www.cbs.nl/nl-nl/maatwerk/2025/48/werknemers-zonder-pensioen-2022-2023"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CBS (28 nov 2025): maatwerktabel “Werknemers zonder pensioen 2022–2023”
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://bieb.knab.nl/ondernemen/twee-op-de-drie-zzpers-vindt-eigen-pensioen-niet-goed-geregeld-spijt-komt-later"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Knab (okt 2024): onderzoek onder zzp’ers over pensioen(“niet goed geregeld”)
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://nieuws.centraalbeheer.nl/miljoenen-werkende-nederlanders-niet-klaar-voor-later--een-derde-voelt-zich-niet-goed-voorbereid-op-pensioen/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Centraal Beheer (10 nov 2025): 33% voelt zich niet goed voorbereid
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://www.rijksoverheid.nl/documenten/kamerstukken/2025/11/17/kamerbrief-voortgang-reductie-werknemers-zonder-actieve-pensioenopbouw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Rijksoverheid (17 nov 2025): Kamerbrief over reductie werknemers zonder actieve pensioenopbouw
                      </a>
                    </li>
                  </ul>

                  <p className="mt-5 text-xs text-zinc-500">
                    Let op: cijfers wijzigen per jaar. We updaten deze pagina periodiek.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}