import { toast } from "sonner";

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function soon(label: string) {
  toast("Próximamente", {
    description: `${label} estará disponible muy pronto.`,
  });
}