export interface Partner {
  id: number;
  name: string;
  logo: string;
  width: number;
  height: number;
}

export const partnersData: Partner[] = [
  {
    id: 1,
    name: "Fédération Française de Football",
    logo: "/images/partners/fff-logo.svg",
    width: 120,
    height: 60
  },
  {
    id: 2,
    name: "Ligue 1",
    logo: "/images/partners/ligue1-logo.svg",
    width: 100,
    height: 60
  },
  {
    id: 3,
    name: "UEFA",
    logo: "/images/partners/uefa-logo.svg",
    width: 100,
    height: 60
  },
  {
    id: 4,
    name: "FIFA",
    logo: "/images/partners/fifa-logo.svg",
    width: 100,
    height: 60
  },
  {
    id: 5,
    name: "Paris Saint-Germain",
    logo: "/images/partners/psg-logo.svg",
    width: 60,
    height: 60
  },
  {
    id: 6,
    name: "Olympique de Marseille",
    logo: "/images/partners/om-logo.svg",
    width: 60,
    height: 60
  }
];
