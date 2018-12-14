import React from "react";
import { render } from "react-dom";

import GameCard from "./components/GameCard";

const game = [
  {
    name: "Arash",
    thumbnail:
      "http://starcutciders.com/wp-content/uploads/2016/02/Elita-246x300-246x300-246x300.jpg",
    price: "32.99",
    players: "2-4",
    duration: "60 min."
  },
  {
    name: "Yemen",
    thumbnail:
      "http://ineasysteps.com/wp-content/uploads/2015/12/9781840786477_web-246x300.png",
    price: "32.99",
    players: "2-4",
    duration: "60 min."
  },
  {
    name: "Sanaa",
    thumbnail:
      "https://www.tunerstickers.com/wp-content/uploads/2016/09/Harambe-Window-Decal-Sticker-246x300.png",
    price: "32.99",
    players: "2-4",
    duration: "60 min."
  }
];

render(<GameCard game={game[2]} />, document.querySelector(".container12"));
