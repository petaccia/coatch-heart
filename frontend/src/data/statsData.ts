export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export const statsData: StatItem[] = [
  {
    id: 1,
    value: "2,000+",
    label: "Entraîneurs actifs",
    icon: "👨‍🏫"
  },
  {
    id: 2,
    value: "15,000+",
    label: "Séances créées",
    icon: "📋"
  },
  {
    id: 3,
    value: "500+",
    label: "Exercices disponibles",
    icon: "⚽"
  },
  {
    id: 4,
    value: "98%",
    label: "Taux de satisfaction",
    icon: "🌟"
  }
];
