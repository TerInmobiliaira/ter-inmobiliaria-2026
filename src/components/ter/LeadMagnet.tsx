import { useEffect, useRef, useState } from "react";
import { BookOpen, Check, X } from "lucide-react";

export function LeadMagnet() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, input, [href], select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0]!;
      const last = nodes[nodes.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Ingresa tu nombre.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Ingresa un correo válido.");
    setError(null);
    setDone(true);
  };

  return (
    <section id="guia" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-8 rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[minmax(0,1fr)_auto] lg:p-12">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <BookOpen className="size-4" aria-hidden="true" strokeWidth={1.5} /> Guía gratuita
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Tu depa empieza con una buena decisión.
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Descarga nuestra guía para elegir, financiar y comprar tu departamento en Lima con
            claridad: qué mirar en cada distrito, cómo ordenar tu cuota inicial y qué pasos siguen
            después de separar.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-bold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Descargar la guía
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-foreground/50 p-4">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="guia-titulo"
            className="w-full max-w-md rounded-3xl bg-card p-6 shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id="guia-titulo" className="text-xl font-extrabold text-foreground">
                {done ? "¡Listo! Revisa tu correo" : "Recibe la guía en tu correo"}
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar ventana"
                className="grid size-11 shrink-0 place-items-center rounded-xl border border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            {done ? (
              <div className="mt-4">
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  Envío de demostración: en la versión final recibirías la guía en {email}.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="mt-4 space-y-4">
                <div>
                  <label htmlFor="g-nombre" className="mb-1 block text-sm font-semibold text-foreground">
                    Nombre
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="g-nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="min-h-12 w-full rounded-xl border border-border bg-background px-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  />
                </div>
                <div>
                  <label htmlFor="g-correo" className="mb-1 block text-sm font-semibold text-foreground">
                    Correo
                  </label>
                  <input
                    id="g-correo"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-h-12 w-full rounded-xl border border-border bg-background px-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  />
                </div>
                {error && (
                  <p role="alert" className="text-sm font-semibold text-destructive">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground"
                >
                  Quiero la guía
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}