// app/components/ProblemSection.tsx
import Link from "next/link";

export default function ProblemSection() {
  return (
    <section id="probleem" className="border-t border-zinc-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: authority copy */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-zinc-500">
              Waarom dit nú belangrijk is
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              Het pensioengat groeit — en veel mensen merken het te laat
            </h2>

            <p className="mt-4 text-lg leading-7 text-zinc-700">
              Vroeger bouwde je vaak automatisch pensioen op via je werkgever.
              Nu is werken flexibeler: vaker baanwissels, tijdelijke contracten,
              of zelfstandig. Daardoor ontstaat sneller een gat: later heb je
              minder inkomen dan je verwacht — zonder dat je het nu doorhebt.
            </p>

            {/* Proof chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                11% werknemers zonder regeling (CBS)
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                55,5% zzp’ers zet niets opzij (onderzoek)
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                33% voelt zich niet voorbereid (onderzoek)
              </span>
            </div>

            {/* Bullets */}
            <ul className="mt-7 space-y-4 text-zinc-800">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-600" />
                <span>
                  <strong>Zzp’ers</strong> moeten het meestal zelf regelen. In de
                  praktijk stelt een grote groep dit uit — en dan mis je jaren
                  opbouw.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-600" />
                <span>
                  <strong>Loondienst zonder regeling</strong> komt ook voor.
                  CBS laat zien dat een deel van werknemers géén pensioenregeling
                  via de werkgever heeft.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-600" />
                <span>
                  Het goede nieuws: je kunt dit vaak slim oplossen (en soms met{" "}
                  <strong>belastingvoordeel</strong>) — maar je moet eerst weten
                  waar je nu staat.
                </span>
              </li>
            </ul>

            {/* Mini CTA */}
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

          {/* RIGHT: cards (UX/authority) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-900">
                Wat dit concreet betekent
              </p>

              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <p className="font-semibold text-zinc-900">
                    Geen overzicht = verkeerde aannames
                  </p>
                  <p className="mt-2 text-sm text-zinc-700">
                    Veel mensen denken: “ik zie later wel”, “ik bouw vast genoeg
                    op”, “dit regel ik ooit nog”.
                  </p>
                  <p className="mt-3 text-sm text-zinc-700">
                    Maar zonder overzicht weet je niet:
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      hoeveel pensioen je écht opbouwt
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      wat een slimme maandinleg kan doen
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      welk voordeel je mogelijk laat liggen
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <p className="font-semibold text-zinc-900">Doel van dit platform</p>
                  <p className="mt-2 text-sm text-zinc-700">
                    Jij krijgt eerst inzicht. Daarna pas beslis je of en hoe je
                    verder wil — zonder druk, zonder verplichtingen.
                  </p>
                </div>

                {/* Sources */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <p className="text-xs font-semibold tracking-wide text-zinc-500">
                    BRONNEN
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://www.cbs.nl/nl-nl/nieuws/2024/25/aantal-werknemers-zonder-pensioen-afgenomen-met-bijna-20-procent"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CBS: werknemers zonder pensioenregeling
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://www.accountant.nl/nieuws/2025/1/ruim-helft-zzpers-bouwt-geen-pensioen-op/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Accountant.nl: ruim helft zzp’ers bouwt geen pensioen op
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://nieuws.centraalbeheer.nl/miljoenen-werkende-nederlanders-niet-klaar-voor-later--een-derde-voelt-zich-niet-goed-voorbereid-op-pensioen/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Onderzoek: 33% voelt zich niet voorbereid (Centraal Beheer)
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                        href="https://nos.nl/artikel/2590541-fiscale-strop-dreigt-voor-1-6-miljoen-pensioenverzekerden"
                        target="_blank"
                        rel="noreferrer"
                      >
                        NOS: pensioentransitie kan fiscale gevolgen hebben
                      </a>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-zinc-500">
                    Tip: deze bronnen maken je pagina direct “authority”.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              *Cijfers/onderzoeken kunnen per jaar wijzigen; we updaten dit
              regelmatig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}