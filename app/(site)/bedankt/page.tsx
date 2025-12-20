export default function BedanktPage() {
    return (
      <main className="min-h-screen bg-white text-zinc-900 flex items-center">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h1 className="text-3xl font-bold">
            Dank je wel
          </h1>
  
          <p className="mt-4 text-zinc-600">
            Je pensioen scan is goed ontvangen.
            We nemen je gegevens rustig door en nemen
            <span className="font-medium"> vrijblijvend </span>
            contact met je op als dat zinvol is.
          </p>
  
          <div className="mt-8 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-600">
            Geen spam. Geen verplichtingen.
            <br />
            Jij houdt altijd de regie.
          </div>
  
          <a
            href="/"
            className="mt-8 inline-block rounded-xl border border-zinc-300 px-5 py-3 text-sm hover:bg-zinc-50"
          >
            Terug naar homepage
          </a>
        </div>
      </main>
    );
  }
