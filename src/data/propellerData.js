import reactSvg from '../assets/react.svg';

import rSeriesMain from '../assets/propellers/R/R_main.jpg'

import rSeriesShowcase1 from "../assets/propellers/R/1.jpg"
import rSeriesShowcase2 from "../assets/propellers/R/2.jpg"
import rSeriesShowcase3 from "../assets/propellers/R/3.jpg"
import rSeriesShowcase4 from "../assets/propellers/R/4.jpg"
import rSeriesShowcase5 from "../assets/propellers/R/5.jpg"
import rSeriesShowcase6 from "../assets/propellers/R/6.jpg"

const propellerData = [
  {
    id: "R1",
    name: "Werenc R1",
    desc: "Śmigło carbonowe Werenc R1",
    descExtended: "Śmigło wykonane z włókna węglowego oraz szklanego, wykazujące się małym momentem skrętnym i cichą pracą. Element składa się z dwóch identycznych połówek. W przypadku niekwalifikujących się do naprawy uszkodzeń jednej łopaty, istnieje możliwość jej dorobienia. Gdy uszkodzenia są niewielkie, istnieje możliwość naprawy (jednej, lub obu łopat). Wszystkie sprzedawane śmigła są przygotowane, wyważone, oraz wiercone pod odpowiedni rozstaw otworów.",
    length: "125 cm (komplet dwóch łopat)",
    weight: "850g (425g/łopata)",
    photo: rSeriesMain,
    photoList: [rSeriesShowcase1, rSeriesShowcase2, rSeriesShowcase3, rSeriesShowcase4, rSeriesShowcase5, rSeriesShowcase6],
    hasEngineList: false,
    engineList: [],
  },
  {
    id: "R2",
    name: "Werenc R2",
    desc: "Śmigło carbonowe Werenc R2",
    descExtended: "Śmigło wykonane z włókna węglowego oraz szklanego, wykazujące się małym momentem skrętnym i cichą pracą. Element składa się z dwóch identycznych połówek. W przypadku niekwalifikujących się do naprawy uszkodzeń jednej łopaty, istnieje możliwość jej dorobienia. Gdy uszkodzenia są niewielkie, istnieje możliwość naprawy (jednej, lub obu łopat). Wszystkie sprzedawane śmigła są przygotowane, wyważone, oraz wiercone pod odpowiedni rozstaw otworów.",
    length: "125 cm (komplet dwóch łopat)",
    weight: "850g (425g/łopata)",
    photo: rSeriesMain,
    photoList: [rSeriesShowcase1, rSeriesShowcase2, rSeriesShowcase3, rSeriesShowcase4, rSeriesShowcase5, rSeriesShowcase6],
    hasEngineList: false,
    engineList: [],
  },
  {
    id: "R3",
    name: "Werenc R3",
    desc: "Śmigło carbonowe Werenc R3",
    descExtended: "Śmigło wykonane z włókna węglowego oraz szklanego, wykazujące się małym momentem skrętnym i cichą pracą. Element składa się z dwóch identycznych połówek. W przypadku niekwalifikujących się do naprawy uszkodzeń jednej łopaty, istnieje możliwość jej dorobienia. Gdy uszkodzenia są niewielkie, istnieje możliwość naprawy (jednej, lub obu łopat). Wszystkie sprzedawane śmigła są przygotowane, wyważone, oraz wiercone pod odpowiedni rozstaw otworów.",
    length: "126,5 cm (komplet dwóch łopat)",
    weight: "760g (380g/łopata)",
    photo: rSeriesMain,
    photoList: [rSeriesShowcase1, rSeriesShowcase2, rSeriesShowcase3, rSeriesShowcase4, rSeriesShowcase5, rSeriesShowcase6],
    hasEngineList: true,
    engineList: [
      "VENTOR (latanie dynamiczne)", "SKY", "SNAP", "ROSS", "Inne o podobnych parametrach"
    ],
  }
];

export default propellerData;