import React from "react";

const GameCard = props => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">${props.game.price}</span>
      <img src={props.game.thumbnail} alt="" />
    </div>
    <div className="content">
      <a href="#" className="header">
        {props.game.name}
      </a>
      <div className="meta">
        <i className="icon users" /> {props.game.players}&nbsp;
        <i className="icon wait" /> {props.game.duration}
      </div>
    </div>
  </div>
);

export default GameCard;
