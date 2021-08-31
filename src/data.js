import silhouette from "./assets/silhouette-photo.jpg";
import greenMountain from "./assets/green-mountain-photo.jpg"
import calmWater from "./assets/calm-water-photo.jpg";

import housesReflection from "./assets/houses-reflection-painting.jpg";
import galaxyAbstract from "./assets/galaxy-abstract-painting.jpg";
import cherries from "./assets/cherries-painting.jpg";

import redLight from "./assets/red-light-illustration.jpg";
import abstractTriangle from "./assets/abstract-triangle-illustration.jpg";
import colorfulBuilding from "./assets/colorful-building-illustration.jpg";


const products = [
  {
    _id: "1",
    name: "Silhouette",
    image: `${silhouette}`,
    price: 49.99,
    rating: 5,
    numReviews: 12,
    type: "Photo"
  },
  {
    _id: "2",
    name: "Green Mountain",
    image: `${greenMountain}`,
    price: 69.99,
    rating: 4,
    numReviews: 9,
    type: "Photo"
  },
  {
    _id: "3",
    name: "Calm Water",
    image: `${calmWater}`,
    price: 39.99,
    rating: 4,
    numReviews: 6,
    type: "Photo"
  },
  {
    _id: "4",
    name: "Houses Reflection",
    image: `${housesReflection}`,
    price: 59.99,
    rating: 4,
    numReviews: 22,
    type: "Painting"
  },
  {
    _id: "5",
    name: "Galaxy Abstract",
    image: `${galaxyAbstract}`,
    price: 49.99,
    rating: 5,
    numReviews: 26,
    type: "Painting"
  },
  {
    _id: "6",
    name: "Cherries",
    image: `${cherries}`,
    price: 39.99,
    rating: 5,
    numReviews: 3,
    type: "Painting"
  },
  {
    _id: "7",
    name: "Red Light",
    image: `${redLight}`,
    price: 49.99,
    rating: 5,
    numReviews: 15,
    type: "Illustration"
  },
  {
    _id: "8",
    name: "Abstract Triangle",
    image: `${abstractTriangle}`,
    price: 39.99,
    rating: 4,
    numReviews: 7,
    type: "Illustration"
  },
  {
    _id: "9",
    name: "Colorful Building",
    image: `${colorfulBuilding}`,
    price: 59.99,
    rating: 4,
    numReviews: 31,
    type: "Illustration"
  },
];

export default products;
