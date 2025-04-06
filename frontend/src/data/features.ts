export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const features: Feature[] = [
  {
    title: "Création de séances",
    description: "Créez des séances d'entraînement personnalisées en quelques clics avec notre interface intuitive",
    icon: "/images/features/create-icon.svg",
    color: "from-primary to-[#003366]"
  },
  {
    title: "Bibliothèque d'exercices",
    description: "Accédez à une vaste collection d'exercices prêts à l'emploi et personnalisables",
    icon: "/images/features/library-icon.svg",
    color: "from-secondary to-[#006B4F]"
  },
  {
    title: "Planification tactique",
    description: "Visualisez et planifiez vos stratégies avec notre tableau tactique interactif",
    icon: "/images/features/tactics-icon.svg",
    color: "from-accent to-[#FFA500]"
  }
];
