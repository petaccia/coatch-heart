import { HiUserAdd, HiClipboardList, HiCalendar, HiShare } from 'react-icons/hi';
import { IconType } from 'react-icons';

export interface Step {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
  color: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: "Créez votre compte",
    description: "Inscrivez-vous gratuitement et configurez votre profil d'entraîneur en quelques clics",
    Icon: HiUserAdd,
    color: "from-primary to-blue500"
  },
  {
    id: 2,
    title: "Choisissez vos exercices",
    description: "Parcourez notre bibliothèque d'exercices ou créez les vôtres selon vos besoins",
    Icon: HiClipboardList,
    color: "from-secondary to-green600"
  },
  {
    id: 3,
    title: "Planifiez vos séances",
    description: "Organisez facilement vos séances d'entraînement avec notre interface intuitive",
    Icon: HiCalendar,
    color: "from-accent to-accent-dark"
  },
  {
    id: 4,
    title: "Partagez et collaborez",
    description: "Partagez vos séances avec votre équipe et collaborez avec d'autres entraîneurs",
    Icon: HiShare,
    color: "from-primary to-secondary"
  }
];