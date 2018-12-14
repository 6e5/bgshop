import React from "react";
import PropTypes from "prop-types";

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

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired
};

export default GameCard;
