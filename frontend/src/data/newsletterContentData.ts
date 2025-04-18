export interface NewsletterContentData {
  title: string;
  description: string;
  features: string[];
}

export const newsletterContentData: NewsletterContentData = {
  title: "Restez informé des dernières actualités",
  description: "Inscrivez-vous à notre newsletter pour recevoir des conseils d'entraînement, des exercices exclusifs et des mises à jour sur nos nouvelles fonctionnalités.",
  features: [
    "Conseils hebdomadaires",
    "Exercices exclusifs",
    "Offres spéciales"
  ]
};
