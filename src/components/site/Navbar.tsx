import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#instalacoes", label: "Instalações" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL =
  "https://wa.me/5515999999999?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Hotel%20Geri%C3%A1trico%20Nazireu.";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={`h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-serif text-lg shadow-soft transition-transform group-hover:scale-105`}
            aria-hidden
          >
            N
          </span>
          <span
            className={`font-serif text-lg leading-tight ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Hotel Geriátrico
            <span className="block text-xs tracking-widest uppercase opacity-80">
              Nazireu
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 ${
              scrolled
                ? "border-primary text-primary"
                : "border-white text-white"
            }`}
          >
            Fale Conosco
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 rounded-md text-foreground/80 hover:text-primary hover:bg-primary-soft"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export { WHATSAPP_URL };
