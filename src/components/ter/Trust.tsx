import { Award, Building2 } from "lucide-react";

const milestones = [
  { value: "9", label: "años de trayectoria" },
  { value: "+60,000", label: "m² construidos" },
  { value: "+750", label: "familias que confiaron en TER" },
  { value: "+6", label: "proyectos desarrollados" },
] as const;

export function Trust() {
  return (
    <section id="confianza" className="bg-ivory py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end lg:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              Trayectoria y respaldo
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Una trayectoria que construye confianza
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Con 9 años de experiencia, desarrollamos proyectos inmobiliarios en ubicaciones
              estratégicas, combinando diseño, funcionalidad y eficiencia para que cada persona
              pueda vivir a su manera.
            </p>
          </div>

          <dl className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-4 lg:grid-cols-2">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.label}
                className="min-h-40 border-b border-r border-border px-4 py-6 sm:px-6 lg:min-h-48 lg:py-8"
              >
                <dt
                  className={`text-4xl font-extrabold sm:text-5xl ${
                    index % 3 === 1 ? "text-accent" : "text-primary"
                  }`}
                >
                  {milestone.value}
                </dt>
                <dd className="mt-4 max-w-40 text-sm font-semibold leading-snug text-foreground sm:text-base">
                  {milestone.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 border-t border-border pt-10 lg:mt-20 lg:pt-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <Building2 className="size-5 text-primary" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">
                  Miembros de
                </h3>
              </div>
              <div className="mt-6 grid max-w-2xl grid-cols-2 gap-4" aria-label="Instituciones de las que TER es miembro">
                <div className="grid min-h-24 place-items-center border border-border bg-card px-5 text-center">
                  <span className="text-xl font-extrabold text-primary">CODIP</span>
                </div>
                <div className="grid min-h-24 place-items-center border border-border bg-card px-5 text-center">
                  <span className="text-xl font-extrabold text-primary">CAPECO</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-accent bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Award className="size-6 text-primary" aria-hidden="true" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Certificación
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-foreground">EDGE Advanced</h3>
                </div>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                La certificación debe consultarse según cada proyecto. Solicita el detalle vigente
                con un asesor TER.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}