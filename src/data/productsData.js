const rSeriesPropellerDescExt = "Śmigło wykonane z włókna węglowego oraz szklanego, wykazujące się małym momentem skrętnym i cichą pracą. Element składa się z dwóch identycznych połówek. W przypadku niekwalifikujących się do naprawy uszkodzeń jednej łopaty, istnieje możliwość jej dorobienia. Gdy uszkodzenia są niewielkie, istnieje możliwość naprawy (jednej, lub obu łopat). Wszystkie sprzedawane śmigła są przygotowane, wyważone, oraz wiercone pod odpowiedni rozstaw otworów.";

import rSeriesMain from '../assets/propellers/R/R-main-showcase.jpg'
import tSeriesMain from '../assets/propellers/T/T-main-showcase.jpg'
import lSeriesMain from '../assets/propellers/L/L-main-showcase.jpg'
import sSeriesMain from '../assets/propellers/S/S-main-showcase.jpg'


import rSeriesShowcase1 from "../assets/propellers/R/1.jpg"
import rSeriesShowcase2 from "../assets/propellers/R/2.jpg"
import rSeriesShowcase3 from "../assets/propellers/R/3.jpg"
import rSeriesShowcase4 from "../assets/propellers/R/4.jpg"
import rSeriesShowcase5 from "../assets/propellers/R/5.jpg"
import rSeriesShowcase6 from "../assets/propellers/R/6.jpg"

const productsData = {
  categories: {
    propellers: {
      series: [
        {
          id: "rSeries",
          name: "Seria R",
          photo: rSeriesMain,
          products: [
            {
              id: "R",
              name: "WERENC R",
              desc: "Śmigło carbonowe WERENC R",
              descExt: rSeriesPropellerDescExt,
              length: "125 cm",
              weight: "850g (425g + 425g)",
              photo: rSeriesMain,
              photoList: [
                rSeriesShowcase1,
                rSeriesShowcase2,
                rSeriesShowcase3,
                rSeriesShowcase4,
                rSeriesShowcase5,
                rSeriesShowcase6,
              ],
              hasDedicatedEngines: true,
              dedicatedEngines: [
                "Raket120 (przełożenie 1:3,4 ; 1:3,5)",
                "TOP80 (przełożenie 1:3,6)",
                "Inne o podobnych parametrach"
              ]
            },
            {
              id: "R1",
              name: "WERENC R1",
              desc: "Śmigło carbonowe WERENC R1",
              descExt: rSeriesPropellerDescExt,
              length: "125 cm",
              weight: "850g (425g + 425g)",
              photo: rSeriesMain,
              photoList: [
                rSeriesShowcase1,
                rSeriesShowcase2,
                rSeriesShowcase3,
                rSeriesShowcase4,
                rSeriesShowcase5,
                rSeriesShowcase6,
              ],
              hasDedicatedEngines: false,
              dedicatedEngines: []
            },
            {
              id: "R2",
              name: "WERENC R2",
              desc: "Śmigło carbonowe WERENC R2",
              descExt: rSeriesPropellerDescExt,
              length: "125 cm",
              weight: "850g (425g + 425g)",
              photo: rSeriesMain,
              photoList: [
                rSeriesShowcase1,
                rSeriesShowcase2,
                rSeriesShowcase3,
                rSeriesShowcase4,
                rSeriesShowcase5,
                rSeriesShowcase6,
              ],
              hasDedicatedEngines: false,
              dedicatedEngines: []
            },
            {
              id: "R3",
              name: "WERENC R3",
              desc: "Śmigło carbonowe WERENC R3",
              descExt: rSeriesPropellerDescExt,
              length: "126,5 cm",
              weight: "760g (380g + 380g)",
              photo: rSeriesMain,
              photoList: [
                rSeriesShowcase1,
                rSeriesShowcase2,
                rSeriesShowcase3,
                rSeriesShowcase4,
                rSeriesShowcase5,
                rSeriesShowcase6,
              ],
              hasDedicatedEngines: true,
              dedicatedEngines: [
                "VENTOR",
                "SKY",
                "SNAP",
                "ROSS",
                "Inne o podobnych parametrach"
              ]
            },
            {
              id: "R4",
              name: "WERENC R4",
              desc: "Śmigło carbonowe WERENC R4",
              descExt: rSeriesPropellerDescExt,
              additionalDetails: "Śmigło R4 projektowane do silnika VENTOR, wykorzystywane jako śmigło uniwersalne, " +
                "w szczególności do przelotów i latania rekreacyjnego. Wykazuje się mniejszą dynamiką, ale lepszymi " +
                "parametrami przelotowymi, oraz mniejszym zużyciem paliwa.",
              length: "130 cm",
              weight: "780g (390g + 390g)",
              photo: rSeriesMain,
              photoList: [
                rSeriesShowcase1,
                rSeriesShowcase2,
                rSeriesShowcase3,
                rSeriesShowcase4,
                rSeriesShowcase5,
                rSeriesShowcase6,
              ],
              hasDedicatedEngines: true,
              dedicatedEngines: [
                "VENTOR",
                "THOR130",
                "SKY",
              ]
            },
          ]
        },
        {
          id: "tSeries",
          name: "Seria T",
          photo: tSeriesMain,
          products: []
        },
        {
          id: "lSeries",
          name: "Seria L",
          photo: lSeriesMain,
          products: []
        },
        {
          id: "sSeries",
          name: "Seria S",
          photo: sSeriesMain,
          products: []
        }
      ]
    },
    throttles: {
      series: [
        {
          id: "Manetki",
          name: "Manetki",
          products: [
            {
              id: "Manetka WERENC",
              name: "Manetka WERENC",
            }
          ]
        }
      ]
    }
  }
}

export default productsData;