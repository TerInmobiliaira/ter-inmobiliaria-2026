import { Building2, Home, Sparkles, TrendingUp } from "lucide-react";
import type { LifeStage } from "@/data/projects";
import { scrollToId } from "./utils";

const OPTIONS: { id: LifeStage; title: string; copy: string; Icon: typeof Home }[] = [
  {
    id: "primer",
    title: "Mi primer depa",
    copy: "Espacios eficientes y bien ubicados para empezar.",
    Icon: Home,
  },
  {
    id: "familia",
    title: "Más espacio para mi familia",
    copy: "Distribuciones amplias y zonas comunes que suman.",
    Icon: Building2,
  },
  {
    id: "invertir",
    title: "Quiero invertir",
    copy: "Tickets de entrada con potencial de valorización.",
    Icon: TrendingUp,
  },
  {
    id: "pronto",
    title: "Quiero mudarme pronto",
    copy: "Proyectos con entrega inmediata, listos para vivir.",
    Icon: Sparkles,
  },
];

export function LifeStages({
  value,
  onChange,
}: {
  value: LifeStage | null;
  onChange: (v: LifeStage | null) => void;
}) {
  return (
    <section id="etapa" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          ¿Cómo quieres vivir esta etapa?
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Elige el momento en el que estás y te mostramos los proyectos que mejor calzan contigo.
        </p>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OPTIONS.map(({ id, title, copy, Icon }) => {
          const active = value === id;
          return (
            <li key={id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => {
                  onChange(active ? null : id);
                  scrollToId("proyectos");
                }}
                className={`group flex h-full min-h-11 w-full flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none ${
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-lift)]"
                    : "border-border bg-card text-foreground shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:border-primary/40 motion-reduce:hover:translate-y-0"
                }`}
              >
                <span
                  className={`grid size-11 place-items-center rounded-xl ${
                    active ? "bg-primary-foreground/15" : "bg-secondary"
                  }`}
                >
                  <Icon className="size-5" aria-hidden="true" strokeWidth={1.5} />
                </span>
                <span className="text-lg font-bold leading-snug">{title}</span>
                <span
                  className={`text-sm ${active ? "text-primary-foreground/85" : "text-muted-foreground"}`}
                >
                  {copy}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {value && (
        <p className="mt-6 text-sm font-semibold text-primary" role="status">
          Filtramos los proyectos recomendados para ti más abajo.
        </p>
      )}
    </section>
  );
}