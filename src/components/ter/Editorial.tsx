import { Compass, LayoutGrid, Sparkles } from "lucide-react";
import lifestyle from "@/assets/lifestyle.jpg";

const BENEFITS = [
  {
    Icon: Compass,
    title: "Ubicación que conecta",
    copy: "Distritos consolidados, cerca del trabajo, parques y servicios del día a día.",
  },
  {
    Icon: LayoutGrid,
    title: "Distribución funcional",
    copy: "Metrajes bien aprovechados, con espacios que se adaptan a cómo usas tu casa.",
  },
  {
    Icon: Sparkles,
    title: "Para disfrutar o invertir",
    copy: "Proyectos pensados tanto para vivirlos como para hacerlos crecer en el tiempo.",
  },
];

export function Editorial() {
  return (
    <section id="vive" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
          <img
            src={lifestyle}
            alt="Sala luminosa de un departamento con muebles claros, madera y vista a la ciudad"
            loading="lazy"
            width={1200}
            height={1408}
            className="aspect-[4/5] size-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
            Vive a tu manera
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-[2.75rem]">
            No todos buscamos lo mismo en un hogar. Por eso creamos espacios que se adaptan a tus
            planes, tu ritmo y tu manera de vivir.
          </h2>
          <ul className="mt-8 space-y-5">
            {BENEFITS.map(({ Icon, title, copy }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}