// app/(site)/page.tsx
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Faq from "../components/Faq";
import ProblemSection from "../components/ProblemSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
            <div className="absolute -bottom-56 right-[-80px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-6">
            {/* compacter + hoger */}
            <div className="min-h-[calc(100vh-8rem)] flex items-start justify-center pt-3 sm:pt-5">
              <div className="mx-auto w-full max-w-3xl text-center">
                {/* HERO LOGO (hoger + kleiner) */}
                <div className="flex justify-center mb-1">
                  <Image
                    src="/logo-mijnpensioen.png"
                    alt="MijnPensioenGevuld"
                    width={520}
                    height={180}
                    priority
                    className="h-auto w-[200px] sm:w-[230px] md:w-[260px]"
                  />
                </div>

                {/* badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-700 shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Binnen 2 minuten inzicht — geen verplichtingen
                  </div>
                </div>

                <h1 className="mt-3 text-balance text-[32px] font-semibold tracking-tight text-zinc-900 sm:text-[40px]">
                  Zie in één overzicht wat je pensioen later écht kan worden.
                </h1>

                <p className="mt-2 mx-auto max-w-2xl text-pretty text-[15px] leading-6 text-zinc-600 sm:text-[16px]">
                  De Slim Vermogen Scan combineert jouw input tot een duidelijke indicatie:
                  eindkapitaal, belastingvoordeel en wat een slimme maandinleg kan doen. Simpel,
                  helder en zonder adviesdruk.
                </p>

                <div className="mt-4 flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center">
                  <Link
                    href="/scan"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#2563eb] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Start de scan
                  </Link>

                  <a
                    href="#hoe-werkt-het"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
                  >
                    Hoe werkt het?
                  </a>
                </div>

                {/* 3 steps (compacter) */}
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm">
                    <div className="text-sm font-semibold text-zinc-900">1) Vul je situatie in</div>
                    <div className="mt-1.5 text-sm text-zinc-600">
                      Leeftijd, inkomen en gewenste inleg — meer niet.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm">
                    <div className="text-sm font-semibold text-zinc-900">2) Direct een indicatie</div>
                    <div className="mt-1.5 text-sm text-zinc-600">
                      Je ziet wat dit kan betekenen voor je eindkapitaal en voordeel.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm">
                    <div className="text-sm font-semibold text-zinc-900">3) Plan vrijblijvend</div>
                    <div className="mt-1.5 text-sm text-zinc-600">
                      Wil je door? Dan nemen we het rustig samen door.
                    </div>
                  </div>
                </div>

                {/* trust row (kleiner) */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-zinc-500">
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Geen spam</span>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Geen adviesdruk</span>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">Gratis indicatie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <ProblemSection />

        {/* HOW IT WORKS */}
        <section id="hoe-werkt-het" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-zinc-900">Hoe werkt het?</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                De scan is een snelle rekencheck. Geen persoonlijk advies, wél een duidelijk startpunt.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Feature title="Transparant" text="We leggen de uitkomst helder uit in normale taal." />
              <Feature title="Veilig" text="Alleen de gegevens die nodig zijn voor de indicatie." />
              <Feature title="Vrijblijvend" text="Pas daarna kies je of je contact wil." />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-zinc-900">FAQ</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Kort en duidelijk. Staat je vraag er niet tussen? Dan kun je straks in de scan je gegevens mailen.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Faq q="Is dit persoonlijk advies?" a="Nee, dit is een indicatie. Voor advies is een inventarisatie nodig." />
              <Faq q="Wat kost de scan?" a="De scan is gratis. Een gesprek plannen is vrijblijvend." />
              <Faq
                q="Wat gebeurt er met mijn gegevens?"
                a="We gebruiken alleen wat nodig is voor de indicatie. Jij kiest zelf of je contact wil."
              />
              <Faq
                q="Voor wie is dit handig?"
                a="Voor mensen die snel willen zien wat extra inleg kan doen, zonder meteen een adviestraject."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}