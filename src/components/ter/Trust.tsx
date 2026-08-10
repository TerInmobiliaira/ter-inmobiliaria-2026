import { Leaf, Ruler, Users } from "lucide-react";

export function Trust() {
  return (
    <section id="confianza" className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Confianza y sostenibilidad
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Diseñamos proyectos con criterios de eficiencia y sostenibilidad
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              Trabajamos el diseño de nuestros edificios buscando mejor uso del agua, la energía y
              los materiales, para que vivir bien también sea vivir de forma más eficiente.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-semibold">
              <Leaf className="size-4" aria-hidden="true" strokeWidth={1.5} />
              Distintivo referencial EDGE Advanced
            </p>
            <p className="mt-3 max-w-xl text-xs text-primary-foreground/70">
              Referencia informativa. No implica que la certificación aplique a todos los proyectos;
              consulta el detalle de cada uno con un asesor.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2 lg:content-center">
            <div className="rounded-3xl bg-primary-foreground/10 p-6">
              <Users className="size-6 text-gold" aria-hidden="true" strokeWidth={1.5} />
              <dt className="mt-4 text-4xl font-extrabold tracking-tight">+750</dt>
              <dd className="mt-1 text-sm text-primary-foreground/80">familias que ya confiaron en TER</dd>
            </div>
            <div className="rounded-3xl bg-primary-foreground/10 p-6">
              <Ruler className="size-6 text-gold" aria-hidden="true" strokeWidth={1.5} />
              <dt className="mt-4 text-4xl font-extrabold tracking-tight">+60,000</dt>
              <dd className="mt-1 text-sm text-primary-foreground/80">m² construidos en Lima</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}