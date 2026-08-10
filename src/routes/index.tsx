import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";

import { Header } from "@/components/ter/Header";
import { Hero, type SearchValues } from "@/components/ter/Hero";
import { LifeStages } from "@/components/ter/LifeStages";
import { Projects, type ProjectFilter } from "@/components/ter/Projects";
import { Editorial } from "@/components/ter/Editorial";
import { Trust } from "@/components/ter/Trust";
import { LeadMagnet } from "@/components/ter/LeadMagnet";
import { ContactForm } from "@/components/ter/ContactForm";
import { Faq, FAQ_ITEMS } from "@/components/ter/Faq";
import { Footer } from "@/components/ter/Footer";
import { StickyCta } from "@/components/ter/StickyCta";
import { projects, type LifeStage } from "@/data/projects";

const TITLE = "Departamentos en venta en Lima | TER Inmobiliaria";
const DESCRIPTION =
  "Departamentos en venta en Lima: Pueblo Libre, Surquillo, Surco y Santa Beatriz. Entrega inmediata, en construcción y lanzamientos. Cotiza tu depa con TER.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "TER Inmobiliaria",
              url: "/",
              email: "info@terinmobiliaria.com",
              telephone: "+51981412312",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lima",
                addressCountry: "PE",
              },
            },
            { "@type": "WebSite", name: "TER Inmobiliaria", url: "/" },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState<ProjectFilter>("Todos");
  const [lifeStage, setLifeStage] = useState<LifeStage | null>(null);
  const [search, setSearch] = useState<SearchValues>({ district: "", bedrooms: "", stage: "" });

  const visible = useMemo(() => {
    return projects.filter((p) => {
      if (filter !== "Todos" && p.stage !== filter) return false;
      if (lifeStage && !p.lifeStages.includes(lifeStage)) return false;
      if (search.district && p.district !== search.district) return false;
      if (search.stage && p.stage !== search.stage) return false;
      if (search.bedrooms) {
        const n = Number(search.bedrooms);
        if (search.bedrooms === "3" ? p.bedroomsMax < 3 : n < p.bedroomsMin || n > p.bedroomsMax)
          return false;
      }
      return true;
    });
  }, [filter, lifeStage, search]);

  const handleSearch = (values: SearchValues) => {
    setSearch(values);
    setFilter(values.stage ? (values.stage as ProjectFilter) : "Todos");
  };

  const handleStage = (stage: LifeStage | null) => {
    setLifeStage(stage);
    setFilter(stage === "pronto" ? "Entrega inmediata" : "Todos");
  };

  return (
    <div className="min-h-dvh scroll-smooth bg-background font-sans">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <LifeStages value={lifeStage} onChange={handleStage} />
        <Projects
          projects={visible}
          filter={filter}
          onFilterChange={(f) => {
            setFilter(f);
            setSearch((s) => ({ ...s, stage: "" }));
          }}
          lifeStage={lifeStage}
          onClearStage={() => setLifeStage(null)}
        />
        <Editorial />
        <Trust />
        <LeadMagnet />
        <ContactForm />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
      <Toaster position="top-center" />
    </div>
  );
}
