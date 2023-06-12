import {
  faCalendarXmark,
  faHome,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const productItems = [
  {
    image: "./assests/home.png",
    house: "Family House",
    property: 100,
  },
  // {
  //   image: "./assests/home1.jpeg",
  //   house: "House & Villa",
  //   property: 20,
  // },
  {
    image: "./assests/home2.png",
    house: "Apartment",
    property: 200,
  },
  {
    image: "./assests/home3.jpeg",
    house: "Office & Studio",
    property: 200,
  },
  {
    image: "./assests/home.png",
    house: "duplex",
    property: 150,
  },
];

export const houses = [
  {
    image: "./assests/house.jpeg",
    sale: "for sale",
    address: "108 Douglas Road",
    name: " Mutiu's Real Estate",
    price: "N85,000,000",
    type: "Apartment",
  },
  {
    image: "./assests/house1.jpeg",
    sale: "for rent",
    address: "10 Withdral Road",
    name: "Laika's Real Estate",
    price: "N500,000",
    type: "Apartment",
  },
  {
    image: "./assests/house2.jpeg",
    sale: "for sale",
    address: "15 Irete Road",
    name: "Emma's Real Estate",
    price: "N70,000,000",
    type: "Apartment",
  },
  {
    // image: "./assests/house3.jpeg",
    image: "/assests/pexels-photo-534151.jpeg",

    sale: "for sale",
    address: "90 World Bank Road",
    name: "Fairmount Properties",
    price: "N90,000,000",
    type: "Apartment",
  },
  {
    image: "./assests/house4.jpeg",
    sale: "for sale",
    address: "1 Naze Road",
    name: "Red Carpet Real Estate",
    price: "N75,000,000",
    type: "Apartment",
  },
  {
    image: "./assests/house5.jpeg",
    sale: "for rent",
    address: "12 Okigwe Road",
    name: "The Coner real Estate",
    price: "N800,000",
    type: "Office",
  },
];

export const awards = [
  {
    // image: "./assests/trophy.jpeg",
    image: <FontAwesomeIcon icon={faUser} />,
    money: "42M",
    award: "Blue Burman Award",
  },

  {
    // image: "./assests/block.png",

    image: <FontAwesomeIcon icon={faHome} />,
    money: "32M",
    award: "Nigeria Real Estate Award",
  },
  {
    image: <FontAwesomeIcon icon={faPhone} />,
    money: "51M",
    award: "Australian UGC Award",
  },
  {
    image: <FontAwesomeIcon icon={faCalendarXmark} />,
    money: "42M",
    award: "ICA Green Award",
  },
];

export const locations = [
  {
    image: "./assests/imo.jpeg",
    name: "Akachi Owerri Imo State",
    office: "121 Akachi road",
  },

  {
    image: "./assests/lagos.jpeg",
    name: "Lagos State",
    office: "12 ojota street",
  },
  {
    image: "./assests/rivers.jpeg",
    name: "Rivers State Pleasure Park",
    office: "21A treasure park road ",
  },
  {
    image: "./assests/enugu.jpeg",
    name: "Enugu State",
    office: " 43 New Heaven Rd ",
  },
  {
    image: "./assests/delta.jpeg",
    name: "Delta State",
    office: "121 Asaba road",
  },
  {
    image: "./assests/abuja.jpeg",
    name: "Abuja FCT",
    office: "121 Kubwa Road",
  },
];

export const teams = [
  {
    image: "./assests/mutiu.jpg",
    list: 60,
    office: "121 Akachi road",
    name: "Engr Madu Chibueze Mutiu",
  },

  {
    image: "./assests/urch.jpg",
    list: 60,
    office: "12 ojota street",
    name: "Nwaiwu Uchechi",
  },
  {
    image: "./assests/malaika.jpeg",
    list: 75,
    office: "21A treasure park road ",
    name: "Egonu Ikechukwu Innocent",
  },
  {
    image: "./assests/enugu.jpeg",
    list: 85,
    office: " 43 New Heaven Rd ",
    name: "obi uche",
  },
  {
    image: "./assests/delta.jpeg",
    list: 60,
    office: "121 Asaba road",
    name: "obi uche",
  },
  {
    image: "./assests/abuja.jpeg",
    list: 950,
    office: "121 Kubwa Road",
    name: "obi uche",
  },
];
