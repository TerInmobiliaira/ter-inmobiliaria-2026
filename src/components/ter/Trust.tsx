import capecoLogo from "@/assets/institutional/logo-CAPECO.svg.asset.json";
import codipLogo from "@/assets/institutional/logo-codip-01.svg.asset.json";
import edgeLogo from "@/assets/institutional/logo-edge-advanced.svg.asset.json";
import miviviendaLogo from "@/assets/institutional/logo-mivivienda-verde-grado-3-01.svg.asset.json";

const milestones = [
  { value: "9", label: "años de trayectoria" },
  { value: "+60,000", label: "m² construidos" },
  { value: "+750", label: "familias que confiaron en TER" },
  { value: "+6", label: "proyectos desarrollados" },
] as const;

export function Trust() {
  return (
    <section id="confianza" className="scroll-mt-20 bg-ivory py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end lg:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              Trayectoria y respaldo
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
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
                   className={`text-4xl font-semibold sm:text-5xl ${
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
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                Miembros de
              </h3>
              <div className="mt-8 flex min-h-24 flex-wrap items-center gap-x-12 gap-y-8" aria-label="Instituciones de las que TER es miembro">
                <img src={codipLogo.url} alt="CODIP" className="h-14 w-auto max-w-40 object-contain" />
                <img src={capecoLogo.url} alt="CAPECO" className="h-14 w-auto max-w-40 object-contain" />
              </div>
            </div>

            <div className="border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                Certificaciones
              </h3>
              <div className="mt-8 flex min-h-24 flex-wrap items-center gap-x-12 gap-y-8" aria-label="Certificaciones de proyectos TER">
                <img src={edgeLogo.url} alt="EDGE Advanced" className="h-16 w-auto max-w-40 object-contain" />
                <img
                  src={miviviendaLogo.url}
                  alt="MiVivienda Verde Grado 3"
                  className="h-16 w-auto max-w-44 object-contain"
                />
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