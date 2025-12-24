// app/kennis/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Kennis & Onderzoek | Slim Vermogen Scan",
  description:
    "Onderzoek, cijfers en betrouwbare bronnen over pensioengat, pensioenopbouw en waarom dit nú belangrijk is voor zzp’ers en werknemers zonder regeling.",
};

export default function KennisPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-14">
        {/* 1x H1 op deze pagina */}
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Kennis & Onderzoek over pensioengat
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-7 text-zinc-700">
          Op deze pagina verzamelen we openbare cijfers en onderzoeken van
          onafhankelijke instanties. Doel: helder maken waarom het pensioengat
          groeit en waarom overzicht belangrijk is — vooral voor zzp’ers en
          werknemers zonder pensioenregeling.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/scan"
            className="inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start de scan
          </Link>

          <Link
            href="/#probleem"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
          >
            Terug naar uitleg op de homepage
          </Link>
        </div>

        {/* SECTION 1 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            1) Werknemers zonder pensioenregeling
          </h2>
          <p className="mt-3 text-zinc-700 leading-7">
            Een deel van de werknemers bouwt géén pensioen op via de werkgever
            (vaak “witte vlek” genoemd). Dit kan voorkomen bij werkgevers zonder
            verplichte deelname aan een pensioenregeling.
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold text-zinc-900">Bron</p>
            <a
              className="mt-2 inline-block text-sm text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="https://www.cbs.nl/nl-nl/nieuws/2024/25/aantal-werknemers-zonder-pensioen-afgenomen-met-bijna-20-procent"
              target="_blank"
              rel="noreferrer"
            >
              CBS — Aantal werknemers zonder pensioen afgenomen met bijna 20 procent
            </a>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            2) Zzp’ers en pensioen: veel mensen regelen het niet op tijd
          </h2>
          <p className="mt-3 text-zinc-700 leading-7">
            Zzp’ers moeten pensioen meestal zelf opbouwen. In onderzoeken zie je
            dat een grote groep aangeeft dat het pensioen niet goed geregeld is,
            of dat ze (nog) niet structureel opbouwen.
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold text-zinc-900">Bron</p>
            <a
              className="mt-2 inline-block text-sm text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="https://bieb.knab.nl/ondernemen/twee-op-de-drie-zzpers-vindt-eigen-pensioen-niet-goed-geregeld-spijt-komt-later"
              target="_blank"
              rel="noreferrer"
            >
              Knab — Twee op de drie zzp’ers vindt eigen pensioen niet goed geregeld
            </a>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            3) Veel werkenden voelen zich niet voorbereid op pensioen
          </h2>
          <p className="mt-3 text-zinc-700 leading-7">
            In onderzoeken zie je dat een aanzienlijke groep werkenden aangeeft
            zich niet goed voorbereid te voelen op hun pensioen. Dat is precies
            waarom “overzicht” de eerste stap is.
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold text-zinc-900">Bron</p>
            <a
              className="mt-2 inline-block text-sm text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="https://nieuws.centraalbeheer.nl/miljoenen-werkende-nederlanders-niet-klaar-voor-later--een-derde-voelt-zich-niet-goed-voorbereid-op-pensioen/"
              target="_blank"
              rel="noreferrer"
            >
              Centraal Beheer — Miljoenen werkenden niet klaar voor later
            </a>
          </div>
        </section>

        {/* FOOTNOTE */}
        <p className="mt-12 text-xs text-zinc-500">
          We verwijzen naar externe bronnen. Cijfers en definities kunnen per jaar wijzigen; deze pagina wordt periodiek bijgewerkt.
        </p>
      </main>
    </div>
  );
}