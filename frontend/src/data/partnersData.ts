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
    logo: "/images/partners/fff.svg",
    width: 120,
    height: 60
  },
  {
    id: 2,
    name: "Ligue 1",
    logo: "/images/partners/ligue1.svg",
    width: 60,
    height: 60
  },
  {
    id: 3,
    name: "UEFA",
    logo: "/images/partners/uefa.svg",
    width: 60,
    height: 60
  },
  {
    id: 4,
    name: "FIFA",
    logo: "/images/partners/fifa.svg",
    width: 60,
    height: 60
  },
  {
    id: 5,
    name: "Paris Saint-Germain",
    logo: "/images/partners/psg.svg",
    width: 60,
    height: 60
  },
  {
    id: 6,
    name: "Olympique de Marseille",
    logo: "/images/partners/om.svg",
    width: 60,
    height: 60
  }
];
