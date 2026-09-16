export const FAQ_ITEMS = [
  {
    q: "¿En qué distritos de Lima tiene proyectos TER?",
    a: "Actualmente contamos con proyectos en Pueblo Libre, Surquillo y Surco, todos en zonas consolidadas y con buena conectividad.",
  },
  {
    q: "¿Qué significa entrega inmediata?",
    a: "Son departamentos terminados y listos para mudarte. Puedes visitarlos, ver el acabado real y coordinar la entrega apenas se complete el proceso de compra.",
  },
  {
    q: "¿Cómo agendo una visita a un proyecto?",
    a: "Completa el formulario de asesoría o escríbenos por WhatsApp. Coordinamos día y hora para recorrer el departamento piloto o la unidad disponible.",
  },
  {
    q: "¿Me pueden orientar con el financiamiento?",
    a: "Sí. Un asesor te explica de forma referencial cómo funciona la cuota inicial, el crédito hipotecario y los programas de vivienda vigentes. La evaluación final la realiza cada entidad financiera.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Preguntas frecuentes
      </h2>
      <div className="mt-8 space-y-3">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)]"
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-bold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              {item.q}
              <span
                aria-hidden="true"
                className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}