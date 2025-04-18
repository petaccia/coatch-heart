export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 exercices essentiels pour améliorer la technique individuelle",
    excerpt: "Découvrez les exercices que nous recommandons pour développer rapidement les compétences techniques de vos joueurs.",
    image: "/images/blog/technique-training.jpg",
    author: "Thomas Martin",
    authorImage: "/images/coach/coach1.jpg",
    date: "15 juin 2023",
    category: "Entraînement",
    slug: "exercices-technique-individuelle"
  },
  {
    id: 2,
    title: "Comment structurer une séance d'entraînement efficace",
    excerpt: "Apprenez à organiser vos séances pour maximiser le temps d'apprentissage et maintenir l'engagement des joueurs.",
    image: "/images/blog/training-session.jpg",
    author: "Marie Dubois",
    authorImage: "/images/coach/coach2.jpg",
    date: "2 mai 2023",
    category: "Méthodologie",
    slug: "structurer-seance-entrainement"
  },
  {
    id: 3,
    title: "L'importance de la préparation mentale chez les jeunes joueurs",
    excerpt: "La dimension psychologique est souvent négligée. Voici comment l'intégrer dans votre approche d'entraînement.",
    image: "/images/blog/mental-prep.jpg",
    author: "Jean Leroy",
    authorImage: "/images/coach/coach3.jpg",
    date: "18 avril 2023",
    category: "Psychologie",
    slug: "preparation-mentale-jeunes-joueurs"
  }
];
