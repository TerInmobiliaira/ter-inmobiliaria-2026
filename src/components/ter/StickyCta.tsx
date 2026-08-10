import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/projects";
import { scrollToId } from "./utils";

export function StickyCta() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-card/95 p-3 backdrop-blur lg:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary text-sm font-bold text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <MessageCircle className="size-4" aria-hidden="true" strokeWidth={1.5} />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => scrollToId("contacto")}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Cotizar
        </button>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:grid"
      >
        <MessageCircle className="size-6" aria-hidden="true" strokeWidth={1.5} />
      </a>
    </>
  );
}