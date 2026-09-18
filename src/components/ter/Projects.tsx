import { ArrowRight, Bed, MapPin, Ruler } from "lucide-react";
import { formatPrice, type LifeStage, type Project } from "@/data/projects";
import { scrollToId } from "./utils";

const FILTERS = ["Todos", "Entrega inmediata", "En construcción", "Lanzamiento"] as const;
export type ProjectFilter = (typeof FILTERS)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-foreground shadow-[var(--shadow-soft)]">
          {project.stage}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0" aria-hidden="true" strokeWidth={1.5} />
          {project.district}, Lima
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Bed className="size-4 shrink-0 text-primary" aria-hidden="true" strokeWidth={1.5} />
            <div className="min-w-0">
              <dt className="sr-only">Dormitorios</dt>
              <dd className="truncate font-semibold text-foreground">{project.bedrooms}</dd>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="size-4 shrink-0 text-primary" aria-hidden="true" strokeWidth={1.5} />
            <div className="min-w-0">
              <dt className="sr-only">Área</dt>
              <dd className="truncate font-semibold text-foreground">{project.area}</dd>
            </div>
          </div>
        </dl>
        <p className="mt-5 text-sm text-muted-foreground">
          Desde{" "}
          <strong className="text-lg font-semibold text-foreground">
            {formatPrice(project.priceFrom)}
          </strong>
        </p>
        <button
          type="button"
          onClick={() => scrollToId("contacto")}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-primary bg-transparent px-5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Cotizar {project.name}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export function Projects({
  projects,
  filter,
  onFilterChange,
  lifeStage,
  onClearStage,
}: {
  projects: Project[];
  filter: ProjectFilter;
  onFilterChange: (f: ProjectFilter) => void;
  lifeStage: LifeStage | null;
  onClearStage: () => void;
}) {
  return (
    <section id="proyectos" className="bg-ivory/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Encuentra el proyecto que va contigo
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Cinco proyectos disponibles en Lima, con distintas etapas de avance y metrajes para cada plan.
            </p>
          </div>
          {lifeStage && (
            <button
              type="button"
              onClick={onClearStage}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Quitar recomendación
            </button>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos por etapa">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => onFilterChange(f)}
                className={`inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {projects.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </ul>
        ) : (
          <p className="mt-10 rounded-2xl border border-dashed border-border bg-card p-8 text-center text-base text-muted-foreground">
            No encontramos proyectos con esos criterios. Ajusta los filtros o escríbenos y te
            ayudamos a buscar.
          </p>
        )}
      </div>
    </section>
  );
}