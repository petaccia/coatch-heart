export interface Feature {
  id: number;
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: Feature[];
  buttonText: string;
  isPopular?: boolean;
  color: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Gratuit",
    price: "0€",
    description: "Parfait pour découvrir les fonctionnalités de base",
    features: [
      { id: 1, text: "Jusqu'à 5 séances d'entraînement", included: true },
      { id: 2, text: "Bibliothèque de 20 exercices", included: true },
      { id: 3, text: "1 utilisateur", included: true },
      { id: 4, text: "Exportation PDF basique", included: true },
      { id: 5, text: "Tableau tactique simple", included: true },
      { id: 6, text: "Exercices personnalisés", included: false },
      { id: 7, text: "Partage avec le staff", included: false },
      { id: 8, text: "Support prioritaire", included: false }
    ],
    buttonText: "Commencer gratuitement",
    color: "from-gray-500 to-gray-600"
  },
  {
    id: 2,
    name: "Premium",
    price: "9,99€",
    description: "Pour les entraîneurs individuels sérieux",
    features: [
      { id: 1, text: "Séances illimitées", included: true },
      { id: 2, text: "Bibliothèque de 200+ exercices", included: true },
      { id: 3, text: "1 utilisateur", included: true },
      { id: 4, text: "Exportation PDF avancée", included: true },
      { id: 5, text: "Tableau tactique interactif", included: true },
      { id: 6, text: "Exercices personnalisés", included: true },
      { id: 7, text: "Partage avec le staff", included: true },
      { id: 8, text: "Support prioritaire", included: false }
    ],
    buttonText: "Essayer 14 jours gratuits",
    isPopular: true,
    color: "from-primary to-secondary"
  },
  {
    id: 3,
    name: "Club",
    price: "29,99€",
    description: "Idéal pour les clubs et les académies",
    features: [
      { id: 1, text: "Séances illimitées", included: true },
      { id: 2, text: "Bibliothèque de 500+ exercices", included: true },
      { id: 3, text: "Jusqu'à 10 utilisateurs", included: true },
      { id: 4, text: "Exportation PDF personnalisée", included: true },
      { id: 5, text: "Tableau tactique avancé", included: true },
      { id: 6, text: "Exercices personnalisés", included: true },
      { id: 7, text: "Partage avec le staff", included: true },
      { id: 8, text: "Support prioritaire 24/7", included: true }
    ],
    buttonText: "Contacter les ventes",
    color: "from-accent to-accent-dark"
  }
];
