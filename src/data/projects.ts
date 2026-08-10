export type Stage = "Entrega inmediata" | "En construcción" | "Lanzamiento";

export type LifeStage = "primer" | "familia" | "invertir" | "pronto";

export interface Project {
  id: string;
  name: string;
  district: string;
  stage: Stage;
  bedrooms: string;
  bedroomsMin: number;
  bedroomsMax: number;
  area: string;
  priceFrom: number;
  image: string;
  alt: string;
  lifeStages: LifeStage[];
}

import bolivar from "@/assets/proj-bolivar.jpg";
import morar from "@/assets/proj-morar.jpg";
import marsano from "@/assets/proj-marsano.jpg";
import pacifico from "@/assets/proj-pacifico.jpg";
import teo from "@/assets/proj-teo.jpg";
import montaire from "@/assets/proj-montaire.jpg";

export const projects: Project[] = [
  {
    id: "bolivar-1209",
    name: "Bolívar 1209",
    district: "Pueblo Libre",
    stage: "Entrega inmediata",
    bedrooms: "1 a 3 dorm.",
    bedroomsMin: 1,
    bedroomsMax: 3,
    area: "45 – 78.50 m²",
    priceFrom: 325688,
    image: bolivar,
    alt: "Fachada blanca con detalles de madera del proyecto Bolívar 1209 en Pueblo Libre, Lima",
    lifeStages: ["primer", "familia", "pronto"],
  },
  {
    id: "morar",
    name: "MORAR",
    district: "Surquillo",
    stage: "Entrega inmediata",
    bedrooms: "3 dorm.",
    bedroomsMin: 3,
    bedroomsMax: 3,
    area: "66 – 83.04 m²",
    priceFrom: 473000,
    image: morar,
    alt: "Edificio contemporáneo con jardín vertical del proyecto MORAR en Surquillo, Lima",
    lifeStages: ["familia", "pronto"],
  },
  {
    id: "marsano-park",
    name: "Marsano Park",
    district: "Surquillo",
    stage: "En construcción",
    bedrooms: "1 a 2 dorm.",
    bedroomsMin: 1,
    bedroomsMax: 2,
    area: "48.5 – 55.5 m²",
    priceFrom: 314184,
    image: marsano,
    alt: "Edificio en construcción frente a un parque, proyecto Marsano Park en Surquillo, Lima",
    lifeStages: ["primer", "invertir"],
  },
  {
    id: "pacifico-299",
    name: "Pacífico 299",
    district: "Surco",
    stage: "En construcción",
    bedrooms: "2 a 4 ambientes",
    bedroomsMin: 2,
    bedroomsMax: 4,
    area: "108 – 205.2 m²",
    priceFrom: 751362,
    image: pacifico,
    alt: "Torre residencial de balcones de vidrio al atardecer, proyecto Pacífico 299 en Surco, Lima",
    lifeStages: ["familia", "invertir"],
  },
  {
    id: "teo-618",
    name: "TEO 618",
    district: "Santa Beatriz",
    stage: "Lanzamiento",
    bedrooms: "1 a 2 dorm.",
    bedroomsMin: 1,
    bedroomsMax: 2,
    area: "40 – 48 m²",
    priceFrom: 258742,
    image: teo,
    alt: "Edificio urbano iluminado al anochecer, proyecto TEO 618 en Santa Beatriz, Lima",
    lifeStages: ["primer", "invertir"],
  },
  {
    id: "montaire",
    name: "Montaire",
    district: "Pueblo Libre",
    stage: "Lanzamiento",
    bedrooms: "1 a 3 dorm.",
    bedroomsMin: 1,
    bedroomsMax: 3,
    area: "40.4 – 65.7 m²",
    priceFrom: 249900,
    image: montaire,
    alt: "Edificio minimalista con terraza en azotea, proyecto Montaire en Pueblo Libre, Lima",
    lifeStages: ["primer", "familia", "invertir"],
  },
];

export const districts = ["Pueblo Libre", "Surquillo", "Surco", "Santa Beatriz"];
export const stages: Stage[] = ["Entrega inmediata", "En construcción", "Lanzamiento"];

export const formatPrice = (value: number) =>
  `S/${value.toLocaleString("es-PE", { maximumFractionDigits: 0 })}`;

export const WHATSAPP_URL = "https://wa.me/51981412312";
export const PHONE = "981 412 312";
export const EMAIL = "info@terinmobiliaria.com";