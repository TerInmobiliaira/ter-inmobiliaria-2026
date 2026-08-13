import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { districts, projects } from "@/data/projects";
import commonArea from "@/assets/common-area.jpg";

interface Errors {
  name?: string;
  phone?: string;
  interest?: string;
  privacy?: string;
}

const field =
  "min-h-12 w-full rounded-xl border border-border bg-card px-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [target, setTarget] = useState("");
  const [interest, setInterest] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Ingresa tu nombre completo.";
    if (!/^9\d{8}$/.test(phone.replace(/\s/g, "")))
      next.phone = "Ingresa un celular válido de 9 dígitos (empieza en 9).";
    if (!interest) next.interest = "Cuéntanos si buscas vivir o invertir.";
    if (!privacy) next.privacy = "Necesitamos tu autorización para contactarte.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="contacto" className="relative isolate overflow-hidden py-16 lg:py-24">
      <img
        src={commonArea}
        alt="Área común tipo rooftop de un edificio TER en Lima"
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/55 lg:bg-[linear-gradient(to_right,rgb(0_0_0/0.62)_0%,rgb(0_0_0/0.45)_35%,rgb(0_0_0/0.12)_65%,transparent_85%)]"
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
            Cuéntanos qué depa estás buscando
          </h2>
          <p className="mt-3 max-w-lg text-base text-primary-foreground/90">
            Un asesor TER te contacta para orientarte sobre proyectos disponibles, metrajes, precios
            y alternativas de financiamiento. Sin compromiso.
          </p>
          <p className="mt-6 font-display text-2xl text-primary-foreground">
            <span className="text-[#F5CF47]">“Vive a tu manera”</span> empieza con una conversación.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)] sm:p-8">
          {sent ? (
            <div role="status" className="py-6 text-center">
              <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-4 text-xl font-extrabold text-foreground">¡Gracias, {name}!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Registro de demostración: un asesor te escribiría al {phone} dentro de las próximas
                24 horas hábiles.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-bold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <div>
                <label htmlFor="c-nombre" className="mb-1 block text-sm font-semibold text-foreground">
                  Nombre y apellido
                </label>
                <input
                  id="c-nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "e-nombre" : undefined}
                  className={field}
                />
                {errors.name && (
                  <p id="e-nombre" role="alert" className="mt-1 text-sm font-semibold text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="c-celular" className="mb-1 block text-sm font-semibold text-foreground">
                  Celular
                </label>
                <input
                  id="c-celular"
                  inputMode="tel"
                  placeholder="9XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "e-celular" : undefined}
                  className={`${field} placeholder:text-muted-foreground`}
                />
                {errors.phone && (
                  <p id="e-celular" role="alert" className="mt-1 text-sm font-semibold text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="c-proyecto" className="mb-1 block text-sm font-semibold text-foreground">
                  Proyecto o distrito de interés
                </label>
                <select
                  id="c-proyecto"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className={field}
                >
                  <option value="">Aún no lo tengo claro</option>
                  <optgroup label="Proyectos">
                    {projects.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Distritos">
                    {districts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-foreground">
                  ¿Cuál es tu intención?
                </legend>
                <div className="flex flex-wrap gap-3">
                  {["Vivir", "Invertir"].map((opt) => (
                    <label
                      key={opt}
                      className={`inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-xl border px-5 text-sm font-bold transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring ${
                        interest === opt
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground"
                      }`}
                    >
                      <input
                        type="radio"
                        name="intencion"
                        value={opt}
                        checked={interest === opt}
                        onChange={() => setInterest(opt)}
                        className="size-4 accent-[var(--primary)]"
                        aria-describedby={errors.interest ? "e-intencion" : undefined}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
                {errors.interest && (
                  <p id="e-intencion" role="alert" className="mt-1 text-sm font-semibold text-destructive">
                    {errors.interest}
                  </p>
                )}
              </fieldset>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={privacy}
                    onChange={(e) => setPrivacy(e.target.checked)}
                    aria-invalid={!!errors.privacy}
                    aria-describedby={errors.privacy ? "e-privacidad" : undefined}
                    className="mt-0.5 size-5 shrink-0 accent-[var(--primary)]"
                  />
                  <span>
                    Autorizo el tratamiento de mis datos personales para recibir información
                    comercial de TER Inmobiliaria, según su política de privacidad.
                  </span>
                </label>
                {errors.privacy && (
                  <p id="e-privacidad" role="alert" className="mt-1 text-sm font-semibold text-destructive">
                    {errors.privacy}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Quiero recibir asesoría
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}