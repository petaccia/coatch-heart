export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Thomas Martin",
    role: "Entraîneur U15",
    image: "/images/coach/coach1.jpg",
    content: "Coach Heart a révolutionné ma façon de préparer les entraînements. Je gagne un temps précieux et mes séances sont beaucoup plus structurées.",
    rating: 5
  },
  {
    id: 2,
    name: "Benjamin Dubois",
    role: "Directrice Technique",
    image: "/images/coach/coach2.jpg",
    content: "Un outil indispensable pour notre club. La possibilité de partager les exercices entre coachs nous permet d'avoir une vraie cohérence technique.",
    rating: 5
  },
  {
    id: 3,
    name: "Marc Lambert",
    role: "Entraîneur Principal",
    image: "/images/coach/coach3.jpg",
    content: "Le tableau tactique interactif est génial. Je peux préparer mes animations offensives et défensives en quelques minutes.",
    rating: 4
  }
];