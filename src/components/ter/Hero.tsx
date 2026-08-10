import { useState } from "react";
import { Search } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { districts, stages } from "@/data/projects";
import { scrollToId } from "./utils";

const selectClass =
  "min-h-12 w-full rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export interface SearchValues {
  district: string;
  bedrooms: string;
  stage: string;
}

export function Hero({ onSearch }: { onSearch: (v: SearchValues) => void }) {
  const [values, setValues] = useState<SearchValues>({ district: "", bedrooms: "", stage: "" });

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Fachada iluminada de un edificio residencial moderno en Lima al atardecer"
        width={1600}
        height={1104}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:pb-24 lg:pt-40">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
          Departamentos en Lima
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          Un depa para vivir{" "}
          <em className="font-display font-normal not-italic text-gold">a tu manera.</em>
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
      </div>
    </section>
  );
}