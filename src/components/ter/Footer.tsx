import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { EMAIL, PHONE, projects } from "@/data/projects";
import { scrollToId, soon } from "./utils";

function SoonLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => soon(label)}
      className="inline-flex min-h-11 items-center text-left text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {label}
    </button>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground pb-28 pt-16 text-primary-foreground lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-teal)] text-lg font-extrabold">
                T
              </span>
              <span>
                <span className="block text-base font-extrabold tracking-[0.18em]">TER</span>
                <span className="block text-[11px] uppercase tracking-[0.22em] text-primary-foreground/70">
                  Inmobiliaria
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
              Departamentos en Lima pensados para que vivas a tu manera.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href="tel:+51981412312" className="inline-flex min-h-11 items-center gap-2 hover:underline">
                  <Phone className="size-4" aria-hidden="true" strokeWidth={1.5} /> {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center gap-2 hover:underline">
                  <Mail className="size-4" aria-hidden="true" strokeWidth={1.5} /> {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/75">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" strokeWidth={1.5} />
                Lima, Perú
              </li>
            </ul>
          </div>

          <nav aria-label="Navegación del pie">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Navegación</h2>
            <ul className="mt-3 flex flex-col">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("proyectos")}
                  className="inline-flex min-h-11 items-center text-sm text-primary-foreground/75 hover:text-primary-foreground"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("vive")}
                  className="inline-flex min-h-11 items-center text-sm text-primary-foreground/75 hover:text-primary-foreground"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("confianza")}
                  className="inline-flex min-h-11 items-center text-sm text-primary-foreground/75 hover:text-primary-foreground"
                >
                  Sostenibilidad
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("faq")}
                  className="inline-flex min-h-11 items-center text-sm text-primary-foreground/75 hover:text-primary-foreground"
                >
                  Preguntas frecuentes
                </button>
              </li>
              <li>
                <SoonLink label="Blog" />
              </li>
            </ul>
          </nav>

          <nav aria-label="Proyectos">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Proyectos</h2>
            <ul className="mt-3 flex flex-col">
              {projects.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId("proyectos")}
                    className="inline-flex min-h-11 items-center text-sm text-primary-foreground/75 hover:text-primary-foreground"
                  >
                    {p.name} · {p.district}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Atención al cliente">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Atención</h2>
            <ul className="mt-3 flex flex-col">
              <li>
                <SoonLink label="Postventa" />
              </li>
              <li>
                <SoonLink label="Programa de referidos" />
              </li>
              <li>
                <SoonLink label="Libro de reclamaciones" />
              </li>
              <li>
                <SoonLink label="Política de privacidad" />
              </li>
              <li>
                <SoonLink label="Términos y condiciones" />
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={`${label} de TER Inmobiliaria (próximamente)`}
                  onClick={() => soon(label)}
                  className="grid size-11 place-items-center rounded-xl border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Icon className="size-5" aria-hidden="true" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            Imágenes, precios, metrajes y acabados son referenciales y pueden variar sin previo
            aviso; no constituyen oferta contractual. Precios sujetos a disponibilidad y a
            evaluación crediticia de cada entidad financiera. Prototipo de demostración: los
            formularios no envían información real.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} TER Inmobiliaria. Lima, Perú.
          </p>
        </div>
      </div>
    </footer>
  );
}