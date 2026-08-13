import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { PHONE } from "@/data/projects";
import { scrollToId, soon } from "./utils";
import logoColor from "@/assets/logo-ter-color.png.asset.json";
import logoWhite from "@/assets/logo-ter-white.png.asset.json";

const NAV = [
  { label: "HOME", target: "inicio" },
  { label: "NOSOTROS", target: null },
  { label: "REFERIDOS", target: null },
  { label: "PROYECTOS EN VENTA", target: "proyectos" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none ${
        scrolled || open
          ? "bg-background shadow-[0_1px_12px_rgb(0_0_0/0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-[68px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:h-[78px]">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("inicio");
          }}
          className="flex min-w-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="TER Inmobiliaria, ir al inicio"
        >
          <img
            src={scrolled || open ? logoColor.url : logoWhite.url}
            alt="TER Inmobiliaria"
            width={400}
            height={196}
            className="h-10 w-auto object-contain transition-opacity duration-300 motion-reduce:transition-none lg:h-12"
          />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => go(item.target, item.label)}
              className={`rounded-full px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none ${
                scrolled
                  ? "text-primary hover:text-accent"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+51981412312"
            className={`ml-2 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
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
          className={`grid size-11 place-items-center rounded-xl border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden ${
            scrolled || open
              ? "border-border bg-card text-primary"
              : "border-primary-foreground/50 bg-transparent text-primary-foreground"
          }`}
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