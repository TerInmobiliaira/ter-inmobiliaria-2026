import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import slide01Desktop from "@/assets/home-slides/home-slide-01-desktop.jpg.asset.json";
import slide01Mobile from "@/assets/home-slides/home-slide-01-mobile.jpg.asset.json";
import slide02Desktop from "@/assets/home-slides/home-slide-02-desktop.jpg.asset.json";
import slide02Mobile from "@/assets/home-slides/home-slide-02-mobile.jpg.asset.json";
import slide03Desktop from "@/assets/home-slides/home-slide-03-desktop.jpg.asset.json";
import slide03Mobile from "@/assets/home-slides/home-slide-03-mobile.jpg.asset.json";
import slide04Desktop from "@/assets/home-slides/home-slide-04-desktop.jpg.asset.json";
import slide04Mobile from "@/assets/home-slides/home-slide-04-mobile.jpg.asset.json";
import { districts, stages } from "@/data/projects";
import { scrollToId } from "./utils";

const selectClass =
  "min-h-12 w-full rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const slides = [
  {
    desktop: slide01Desktop.url,
    mobile: slide01Mobile.url,
    alt: "Edificio residencial TER de ladrillo con balcones, jardines y áreas comunes exteriores",
    motion: "hero-pan-right",
  },
  {
    desktop: slide02Desktop.url,
    mobile: slide02Mobile.url,
    alt: "Lobby cálido TER con mesas de trabajo, luminarias y amplios ventanales",
    motion: "hero-pan-left",
  },
  {
    desktop: slide03Desktop.url,
    mobile: slide03Mobile.url,
    alt: "Sala y cocina integrada de un departamento TER con una pareja disfrutando el espacio",
    motion: "hero-pan-right",
  },
  {
    desktop: slide04Desktop.url,
    mobile: slide04Mobile.url,
    alt: "Gimnasio moderno TER con máquinas, ventanales y equipamiento contemporáneo",
    motion: "hero-pan-left",
  },
] as const;

export interface SearchValues {
  district: string;
  bedrooms: string;
  stage: string;
}

export function Hero({ onSearch }: { onSearch: (v: SearchValues) => void }) {
  const [values, setValues] = useState<SearchValues>({ district: "", bedrooms: "", stage: "" });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () =>
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () => setActiveSlide((current) => (current + 1) % slides.length);

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="absolute inset-0" aria-live="off">
        {slides.map((slide, index) => (
          <picture
            key={slide.desktop}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <source media="(min-width: 768px)" srcSet={slide.desktop} />
            <img
              src={slide.mobile}
              alt={activeSlide === index ? slide.alt : ""}
              width={1920}
              height={1080}
              fetchPriority={index === 0 ? "high" : "auto"}
              className={`size-full object-cover object-center motion-reduce:transform-none motion-reduce:animate-none ${
                activeSlide === index ? slide.motion : ""
              }`}
            />
          </picture>
        ))}
      </div>
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:pb-24 lg:pt-40">
        <h1 className="max-w-[19ch] text-[2.35rem] font-semibold uppercase leading-[1.08] text-primary-foreground sm:text-5xl lg:text-[4.15rem] lg:leading-[1.04]">
          <span className="block">Hay un depa pensado</span>
          <span className="block text-gold">para tu momento.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Encuentra espacios pensados para tu estilo de vida, en ubicaciones que te conectan con lo
          que importa.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToId("proyectos")}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Ver proyectos
          </button>
          <button
            type="button"
            onClick={() => scrollToId("contacto")}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary-foreground/50 px-7 text-base font-bold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Agenda una visita
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(values);
            scrollToId("proyectos");
          }}
          className="mt-10 rounded-3xl border border-border/60 bg-card/95 p-4 shadow-[var(--shadow-lift)] backdrop-blur lg:mt-14"
          aria-label="Buscador de departamentos"
        >
          <div className="grid gap-3 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
            <div>
              <label htmlFor="f-distrito" className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Distrito
              </label>
              <select
                id="f-distrito"
                className={selectClass}
                value={values.district}
                onChange={(e) => setValues({ ...values, district: e.target.value })}
              >
                <option value="">Todos los distritos</option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="f-dorm" className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Dormitorios
              </label>
              <select
                id="f-dorm"
                className={selectClass}
                value={values.bedrooms}
                onChange={(e) => setValues({ ...values, bedrooms: e.target.value })}
              >
                <option value="">Indiferente</option>
                <option value="1">1 dormitorio</option>
                <option value="2">2 dormitorios</option>
                <option value="3">3 o más</option>
              </select>
            </div>
            <div>
              <label htmlFor="f-etapa" className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Etapa
              </label>
              <select
                id="f-etapa"
                className={selectClass}
                value={values.stage}
                onChange={(e) => setValues({ ...values, stage: e.target.value })}
              >
                <option value="">Todas las etapas</option>
                {stages.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-base font-bold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:w-auto"
              >
                <Search className="size-4" aria-hidden="true" />
                Buscar mi depa
              </button>
            </div>
          </div>
        </form>
        <div className="mt-5 flex items-center justify-between gap-4" aria-label="Controles de portadas">
          <div className="flex gap-2" role="tablist" aria-label="Seleccionar portada">
            {slides.map((slide, index) => (
              <button
                key={slide.desktop}
                type="button"
                role="tab"
                aria-selected={activeSlide === index}
                aria-label={`Mostrar portada ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:transition-none ${
                  activeSlide === index ? "w-10 bg-gold" : "w-5 bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Portada anterior"
              className="grid size-11 place-items-center rounded-full border border-primary-foreground/50 text-primary-foreground transition-colors hover:bg-primary-foreground/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Portada siguiente"
              className="grid size-11 place-items-center rounded-full border border-primary-foreground/50 text-primary-foreground transition-colors hover:bg-primary-foreground/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}