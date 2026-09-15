import Espresso from "../assets/images/Espresso.svg";
import IcedLatte from "../assets/images/Iced-Latte.svg";
import Americano from "../assets/images/Americano.svg";
import IcedMocha from "../assets/images/Iced-Mocha.svg";
import Muffins from "../assets/images/Muffins.svg";
import Cookies from "../assets/images/Cookies.svg";
import Cupcakes from "../assets/images/Cupcakes.svg";
import Fries from "../assets/images/Fries.svg";


export const products = [
  {
    id: 1,
    name: "Espresso",
    category: "hot-coffee",
    price: 5,
    image: Espresso,
    description:
      "A rich and bold espresso crafted for a smooth and satisfying coffee experience.",
  },
  {
    id: 2,
    name: "Iced Latte",
    category: "iced-coffee",
    price: 5,
    image: IcedLatte,
    description:
      "A refreshing blend of smooth espresso and creamy milk served over ice.",
  },

  {
    id: 3,
    name: "Iced Americano",
    category: "iced-coffee",
    price: 5,
    image: Americano,
    description:
      "A classic espresso-based coffee with a rich aroma and balanced flavor.",
  },

  {
    id: 4,
    name: "Iced Mocha",
    category: "iced-coffee",
    price: 5,
    image: IcedMocha,
    description:
      "A chilled combination of espresso, chocolate, and creamy milk.",
  },

  {
    id: 5,
    name: "Muffins",
    category: "snacks",
    price: 3,
    image: Muffins,
    description:
      "Freshly baked muffins that pair perfectly with your favorite coffee.",
  },

  {
    id: 6,
    name: "Cookies",
    category: "snacks",
    price: 2,
    image: Cookies,
    description: "Crispy, delicious cookies made for the perfect coffee break.",
  },

  {
    id: 7,
    name: "Cupcakes",
    category: "snacks",
    price: 2,
    image: Cupcakes,
    description:
      "Soft and sweet cupcakes for a little extra treat with your drink.",
  },

  {
    id: 8,
    name: "Fries",
    category: "snacks",
    price: 5,
    image: Fries,
    description:
      "Crispy golden fries served as a tasty companion to your coffee.",
  },
];