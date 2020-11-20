import React from 'react';

import successPic from "../../images/success.svg";
import failPic from "../../images/fail.svg";

function InfoPopup({isSucccess, isOpen, onClose}) {
  return(
    <div className={`info-popup ${isOpen && 'popup_opened'}`}>
        <div className="info-popup__container">
          <button className="info-popup__close-btn" onClick={onClose}></button>
          <img className="info-popup__img" src={isSucccess ? successPic : failPic} alt="succes pic" />
          <p className="info-popup__title">{isSucccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
        </div>
    </div>
    );
}

export default InfoPopup;