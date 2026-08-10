import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { PHONE } from "@/data/projects";
import { scrollToId, soon } from "./utils";

const NAV = [
  { label: "Proyectos", target: "proyectos" },
  { label: "Nosotros", target: "vive" },
  { label: "Sostenibilidad", target: "confianza" },
  { label: "Blog", target: null },
  { label: "Postventa", target: null },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target: string | null, label: string) => {
    setOpen(false);
    if (target) scrollToId(target);
    else soon(label);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-background/90 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("inicio");
          }}
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="TER Inmobiliaria, ir al inicio"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-teal)] text-lg font-extrabold tracking-tight text-primary-foreground">
            T
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-extrabold tracking-[0.18em] text-foreground">
              TER
            </span>
            <span className="block truncate text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Inmobiliaria
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => go(item.target, item.label)}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+51981412312"
            className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Phone className="size-4" aria-hidden="true" />
            {PHONE}
          </a>
          <button
            type="button"
            onClick={() => scrollToId("contacto")}
            className="ml-2 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Cotiza tu depa
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid size-11 place-items-center rounded-xl border border-border bg-card text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="menu-movil" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Principal móvil" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => go(item.target, item.label)}
                    className="flex min-h-12 w-full items-center rounded-lg px-2 text-left text-base font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2 pb-2">
              <a
                href="tel:+51981412312"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border text-base font-semibold text-foreground"
              >
                <Phone className="size-4" aria-hidden="true" /> {PHONE}
              </a>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  scrollToId("contacto");
                }}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground"
              >
                Cotiza tu depa
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}