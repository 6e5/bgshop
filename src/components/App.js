import React from "react";
import GamesList from "./GamesList";

const games = [
  {
    _id: 1,
    name: "Arash",
    thumbnail:
      "http://starcutc_iders.com/wp-content/uploads/2016/02/Elita-246x300-246x300-246x300.jpg",
    price: "32.99",
    players: "2-4",
    duration: "60 min."
  },
  {
    _id: 2,
    name: "Yemen",
    thumbnail:
      "http://ineasysteps.com/wp-content/uploads/2015/12/9781840786477_web-246x300.png",
    price: "32.99",
    players: "2-4",
    duration: "60 min."
  },
  {
    _id: 3,
    name: "Sanaa",
    thumbnail:
      "https://www.tunerstickers.com/wp-content/uploads/2016/09/Harambe-Window-Decal-Sticker-246x300.png",
    price: "32.99",
    players: "2-4",
    duration: "60 min."
  }
];

const App = () => {
  return (
    <div className="ui container">
      <GamesList games={games} />
    </div>
  );
};

export default App;
