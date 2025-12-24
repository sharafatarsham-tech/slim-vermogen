// app/components/ProblemSection.tsx
import Link from "next/link";

export default function ProblemSection() {
  return (
    <section id="probleem" className="border-t border-zinc-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">

          {/* LEFT */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-zinc-500">
              Waarom dit nú belangrijk is
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              Het pensioengat groeit — en veel mensen merken het te laat
            </h2>

            <p className="mt-4 text-lg leading-7 text-zinc-700">
              Vroeger bouwde je vaak automatisch pensioen op via je werkgever.
              Nu is werken flexibeler: vaker baanwissels, tijdelijke contracten
              of zelfstandig. Daardoor ontstaat sneller een gat: later heb je
              minder inkomen dan je verwacht — zonder dat je het nu doorhebt.
            </p>

            {/* Proof chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                11% werknemers zonder pensioenregeling (CBS)
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                63% zzp’ers: pensioen niet goed geregeld (Knab, 2024)
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                1 op 3 niet goed voorbereid op pensioen (Centraal Beheer, 2025)
              </span>
            </div>

            {/* Bullets */}
            <ul className="mt-7 space-y-4 text-zinc-800">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <strong>Zzp’ers</strong> moeten het zelf regelen. Uitstel kost
                  vaak jaren aan gemiste opbouw.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <strong>Loondienst zonder regeling</strong> komt vaker voor dan
                  gedacht (de zogeheten “witte vlek”).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  Oplossen kan vaak slim — soms met{" "}
                  <strong>belastingvoordeel</strong> — maar alleen als je weet
                  waar je staat.
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/scan"
                className="inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Check mijn pensioengat (2 min)
              </Link>

              <a
                href="#hoe-werkt-het"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                Hoe werkt dit?
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 space-y-4">

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="font-semibold text-zinc-900">
                  Geen overzicht = verkeerde aannames
                </p>
                <p className="mt-2 text-sm text-zinc-700">
                  Zonder overzicht weet je niet hoeveel je echt opbouwt, wat een
                  slimme inleg doet of welk voordeel je laat liggen.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="font-semibold text-zinc-900">
                  Doel van dit platform
                </p>
                <p className="mt-2 text-sm text-zinc-700">
                  Eerst inzicht. Daarna pas beslissen — zonder druk of
                  verplichtingen.
                </p>
              </div>

              {/* SOURCES */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Bronnen & onderzoek
                </p>

                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.cbs.nl/nl-nl/nieuws/2024/25/aantal-werknemers-zonder-pensioen-afgenomen-met-bijna-20-procent"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                    >
                      CBS — Aantal werknemers zonder pensioenregeling (11%)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bieb.knab.nl/ondernemen/twee-op-de-drie-zzpers-vindt-eigen-pensioen-niet-goed-geregeld-spijt-komt-later"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                    >
                      Knab — 63% zzp’ers: pensioen niet goed geregeld (2024)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nieuws.centraalbeheer.nl/miljoenen-werkende-nederlanders-niet-klaar-voor-later--een-derde-voelt-zich-niet-goed-voorbereid-op-pensioen/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                    >
                      Centraal Beheer — 1 op 3 niet voorbereid op pensioen (2025)
                    </a>
                  </li>
                </ul>

                <p className="mt-3 text-xs text-zinc-500">
                  Gebaseerd op openbare cijfers en onderzoeken van onafhankelijke instanties.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}