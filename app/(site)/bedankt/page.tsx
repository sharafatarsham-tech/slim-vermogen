export default function BedanktPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold text-zinc-900">
        Dank je wel — je scan is ontvangen ✅
      </h1>

      <p className="mt-6 text-zinc-600">
        We hebben je gegevens goed ontvangen.  
        Je ontvangt binnenkort een overzicht met jouw indicatie en vervolgstappen.
      </p>

      <ul className="mt-8 space-y-2 text-zinc-600">
        <li>• Je scan wordt persoonlijk bekeken</li>
        <li>• Je zit nergens aan vast</li>
        <li>• Jij bepaalt zelf de volgende stap</li>
      </ul>

      {/* Optionele CTA later */}
      {/*
      <a
        href="/afspraak"
        className="inline-block mt-10 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium"
      >
        Plan vrijblijvend gesprek
      </a>
      */}
    </main>
  );
}