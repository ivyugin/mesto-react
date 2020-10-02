import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';


function Card({onCardClick, card, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);
  
  const isOwn = currentUser._id === card.owner._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }

  function handleLike() {
    onCardLike(card);
  }

  function handleDelete() {
    onCardDelete(card);
  }

  return (
    <li className="place">
      <img className="place__image" src={card.link} onClick={handleClick}/>
      <button className={`place__delete-btn ${isOwn && 'place__delete-btn_active'}`} onClick={handleDelete}></button>
      <div className="place__description">
        <p className="place__title">{card.name}</p>
        <div className="place__like">
          <button className={`place__like-btn ${isLiked && 'place__like-btn_cheked'}`} onClick={handleLike}></button>
          <h3 className="place__like-count">{card.likes.length}</h3>
        </div>
      </div>
    </li>
  )
}

export default Card;