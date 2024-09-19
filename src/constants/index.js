import {
  marko,
  ana,
  jovan,
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  chromecast,
  disc02,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  whiteLogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Nekretnine",
    url: "#features",
  },
  {
    id: "1",
    title: "O Nama",
    url: "#about",
  },
  {
    id: "2",
    title: "Usluge",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Paketi",
    url: "#pricing",
  },

  {
    id: "4",
    title: "Planovi",
    url: "#roadmap",
  },
  {
    id: "5",
    title: "Kontakt",
    url: "#Contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  whiteLogo,
  whiteLogo,
  whiteLogo,
  whiteLogo,
  whiteLogo,
];

export const AgencyServices = [
  "Posredovanje u kupoprodaji nekretnina",
  "Procena vrednosti nekretnina",
  "Pravna podrška i saveti",
];

export const AgencyServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Digitalna marketinška kampanja",
    text: "Pokretanje ciljane digitalne kampanje kako bi se povećala vidljivost i privukli novi potencijalni kupci nekretnina putem društvenih mreža i pretraživača.",
    date: "Mart 2024",
    status: "završeno",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Automatizovani CRM sistem",
    text: "Implementacija CRM sistema za automatsko praćenje klijenata i potencijalnih kupaca, olakšavajući menadžerima prodaje da upravljaju kontaktima i prate poslovne prilike.",
    date: "April 2024",
    status: "u toku",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Virtuelni obilazak nekretnina",
    text: "Razvoj virtuelnih tura koje omogućavaju kupcima da pregledaju nekretnine na daljinu, pružajući im bolji uvid pre fizičkog obilaska.",
    date: "Maj 2024",
    status: "završeno",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Analitika tržišta u realnom vremenu",
    text: "Uvođenje sistema za praćenje tržišnih trendova i cena nekretnina u realnom vremenu, omogućavajući brže i informisanije odluke prilikom kupovine ili prodaje.",
    date: "Jun 2024",
    status: "u toku",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Naša agencija nudi vrhunske usluge posredovanja u kupovini i prodaji nekretnina uz personalizovani pristup i profesionalnu podršku.";

export const collabContent = [
  {
    id: "0",
    title: "Izvrstan izbor nekretnina",
    text: collabText,
  },
  {
    id: "1",
    title: "Personalizovana usluga",
    text: "Naša agencija prilagođava svoje usluge vašim potrebama, pružajući podršku tokom celog procesa kupovine ili prodaje.",
  },
  {
    id: "2",
    title: "Profesionalna podrška",
    text: "Naš tim vam pruža stručnu podršku u svakom koraku, osiguravajući pravovremene i tačne informacije.",
  },
];

export const pricing = [
  {
    id: "0",
    title: "Osnovni",
    description: "Pretraga nekretnina, osnovni filteri i podrška",
    price: "0",
    features: [
      "Pristup listi nekretnina sa osnovnim filterima za pretragu",
      "Pregled detaljnih opisa nekretnina i slika za bolje iskustvo",
      "Osnovna korisnička podrška klijentima u pretrazi nekretnina",
    ],
  },
  {
    id: "1",
    title: "Premium paket",
    description:
      "Napredne opcije pretrage, prioritetna podrška, uvid u tržište",
    price: "9.99",
    features: [
      "Napredni filteri pretrage (lokacija, cenovni opseg, pogodnosti)",
      "Pristup uvidima o tržištu i trendovima vrednosti nekretnina",
      "Prioritetna korisnička podrška za brže odgovore",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Prilagođena pretraga, posvećeni agent, ekskluzivne ponude",
    price: null,
    features: [
      "Prilagođena pretraga nekretnina prema vašim specifičnim zahtevima",
      "Posvećeni agent za personalizovanu uslugu",
      "Pristup ekskluzivnim nekretninama koje nisu na tržištu",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Moderna vila",
    text: "Prostrana vila sa bazenom i prelepim dvorištem, savršena za porodice.",
    iconUrl: marko,
    imageUrl: house1,
    price: "500$",
    location: "Beograd, Srbija",
    owner: "Marko Jovanović",
    views: 22,
    features: {
      bedrooms: 4,
      bathrooms: 3,
      size: "200m²",
      offer: "Prodaja, Novo",
    },
  },
  {
    id: "1",
    title: "Kuća sa vrtom",
    text: "Savršena kuća za ljubitelje prirode, sa velikim vrtom i privatnošću.",
    iconUrl: jovan,
    imageUrl: house2,
    price: "400$",
    location: "Niš, Srbija",
    owner: "Jovan Milenković",
    views: 10,
    features: {
      bedrooms: 3,
      bathrooms: 2,
      size: "150m²",
      offer: "Prodaja",
    },
  },
  {
    id: "2",
    title: "Porodična kuća",
    text: "Prostrana kuća sa više spavaćih soba i igralištem za decu.",
    iconUrl: ana,
    imageUrl: house3,
    price: "450$",
    location: "Subotica, Srbija",
    owner: "Ana Petrović",
    views: 9,
    features: {
      bedrooms: 5,
      bathrooms: 3,
      size: "250m²",
      offer: "Izdavanje, Novo",
    },
  },
  {
    id: "3",
    title: "Klasik kuća",
    text: "Prelepa kuća sa klasičnim dizajnom i velikim dvorištem.",
    iconUrl: jovan,
    imageUrl: house4,
    price: "550$",
    location: "Kragujevac, Srbija",
    owner: "Jovan Milenković",
    views: 15,
    features: {
      bedrooms: 4,
      bathrooms: 3,
      size: "220m²",
      offer: "Izdavanje, Novo",
    },
  },
  {
    id: "4",
    title: "Kuća na sprat",
    text: "Kuća sa rustičnim stilom i prelepim pogledom na prirodu.",
    iconUrl: ana,
    imageUrl: house5,
    price: "420$",
    location: "Valjevo, Srbija",
    owner: "Ana Petrović",
    views: 8,
    features: {
      bedrooms: 3,
      bathrooms: 2,
      size: "180m²",
      offer: "Prodaja",
    },
  },
  {
    id: "5",
    title: "Kuća sa bazenom",
    text: "Moderan dom sa privatnim bazenom i prelepim dvorištem.",
    iconUrl: marko,
    imageUrl: house6,
    price: "650$",
    location: "Novi Sad, Srbija",
    owner: "Marko Jovanović",
    views: 20,
    features: {
      bedrooms: 4,
      bathrooms: 4,
      size: "250m²",
      offer: "Prodaja, Novo",
    },
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
