export default function Footer() {
    return (
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600">
          
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-semibold text-zinc-900">
                Slim Vermogen
              </div>
              <div className="mt-1">
                Inzicht in pensioen. Rust in je keuzes.
              </div>
            </div>
  
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-900">
                Privacy
              </a>
              <a href="#" className="hover:text-zinc-900">
                Disclaimer
              </a>
              <a href="#" className="hover:text-zinc-900">
                Contact
              </a>
            </div>
          </div>
  
          <div className="mt-8 text-xs text-zinc-500">
            © {new Date().getFullYear()} Slim Vermogen — geen persoonlijk advies.
          </div>
  
        </div>
      </footer>
    );
  }
  