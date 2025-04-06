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
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Bibliothèque d'exercices",
    description: "Accédez à une vaste collection d'exercices prêts à l'emploi et personnalisables",
    icon: "/images/features/library-icon.svg",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Planification tactique",
    description: "Visualisez et planifiez vos stratégies avec notre tableau tactique interactif",
    icon: "/images/features/tactics-icon.svg",
    color: "from-indigo-500 to-indigo-700"
  }
];