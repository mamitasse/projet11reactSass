import React from "react";


function Cards({ id, image, titre }) {
  return (
    <div className="cards" id={id}>
      <div className="cards_gradients"></div>

      <img className="cards_img" src={image} alt="card logement" />

      <span className="cards_title">{titre}</span>
    </div>
  );
}

export default Cards;
