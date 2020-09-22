import React from 'react';

function ImagePopup(props) {
  return(
    <div className={`img-popup ${props.card && 'popup_opened'}`}>
        <div className="img-popup__container">
          <button className="img-popup__close-btn" onClick={props.onClose}></button>
          <img className="img-popup__img" src={props.card.link} />
          <p className="img-popup__title">{props.card.name}</p>
        </div>
    </div>
    );
}

export default ImagePopup;