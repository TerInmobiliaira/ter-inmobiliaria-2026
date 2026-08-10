import { toast } from "sonner";

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector("header");
  const offset = header ? header.getBoundingClientRect().height + 16 : 24;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function soon(label: string) {
  toast("Próximamente", {
    description: `${label} estará disponible muy pronto.`,
  });
}