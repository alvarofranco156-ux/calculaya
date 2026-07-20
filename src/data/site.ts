import { tools } from "./tools";

export const site = {
  name: "Calculaya",
  url: "https://calculaya.es",
  title: "Calculaya — Herramientas online gratuitas para España",
  description:
    "Calculadoras, conversores y utilidades online gratuitas para resolver cálculos cotidianos de forma rápida y sencilla.",
};

const categoryInfo = [
  {
    name: "Finanzas",
    slug: "finanzas",
    icon: "💶",
    description:
      "IVA, hipotecas, préstamos, intereses y cálculos económicos.",
  },
  {
    name: "Matemáticas",
    slug: "matematicas",
    icon: "🧮",
    description:
      "Porcentajes, regla de tres, medias y operaciones frecuentes.",
  },
  {
    name: "Salud",
    slug: "salud",
    icon: "❤️",
    description:
      "IMC, calorías y otras estimaciones orientativas.",
  },
  {
    name: "Fechas",
    slug: "fechas",
    icon: "📅",
    description:
      "Edad exacta, diferencias entre fechas y cálculos de tiempo.",
  },
  {
    name: "Conversores",
    slug: "conversores",
    icon: "🔄",
    description:
      "Temperatura, peso, longitud, velocidad y otras unidades.",
  },
  {
    name: "Utilidades",
    slug: "utilidades",
    icon: "🛠️",
    description:
      "Contadores, generadores y herramientas prácticas.",
  },
];

export const categories = categoryInfo.map((category) => ({
  ...category,
  count: tools.filter((tool) => tool.category === category.name).length,
}));

export const popularTools = tools.slice(0, 6);