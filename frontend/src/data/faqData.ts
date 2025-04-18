export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Qu'est-ce que Coach Heart ?",
    answer: "Coach Heart est une plateforme en ligne conçue pour aider les entraîneurs de football à créer, organiser et partager leurs séances d'entraînement. Notre outil simplifie la planification et permet une meilleure gestion du temps pour se concentrer sur l'essentiel : le développement des joueurs."
  },
  {
    id: 2,
    question: "Comment fonctionne la bibliothèque d'exercices ?",
    answer: "Notre bibliothèque contient des centaines d'exercices prêts à l'emploi, classés par catégories (technique, tactique, physique, etc.) et par niveau. Vous pouvez les utiliser tels quels ou les personnaliser selon vos besoins. Vous pouvez également créer et sauvegarder vos propres exercices pour les réutiliser ultérieurement."
  },
  {
    id: 3,
    question: "Est-ce que je peux partager mes séances avec mon staff ?",
    answer: "Absolument ! Coach Heart permet de partager facilement vos séances d'entraînement avec votre staff technique via un lien ou directement sur la plateforme si vos collègues ont également un compte. Vous pouvez aussi exporter vos séances en PDF pour les imprimer ou les envoyer par email."
  },
  {
    id: 4,
    question: "Quels sont les tarifs de Coach Heart ?",
    answer: "Coach Heart propose plusieurs formules adaptées à différents besoins. Nous avons une version gratuite avec des fonctionnalités de base, ainsi que des abonnements premium à partir de 9,99€/mois qui débloquent toutes les fonctionnalités avancées. Des tarifs spéciaux sont disponibles pour les clubs et les académies."
  },
  {
    id: 5,
    question: "Puis-je utiliser Coach Heart sur mobile ?",
    answer: "Oui, Coach Heart est entièrement responsive et fonctionne sur tous les appareils : ordinateurs, tablettes et smartphones. Nous avons également une application mobile dédiée disponible sur iOS et Android pour une expérience optimale sur le terrain."
  },
  {
    id: 6,
    question: "Comment puis-je obtenir de l'aide si j'en ai besoin ?",
    answer: "Notre équipe de support est disponible 7j/7 via chat en direct, email ou téléphone. Nous proposons également une base de connaissances complète, des tutoriels vidéo et un forum communautaire où vous pouvez échanger avec d'autres entraîneurs."
  }
];
