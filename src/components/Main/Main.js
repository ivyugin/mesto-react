import React from 'react';
import Card from './../Card/Card.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

/*
function handleEditAvatarClick() {
  document.querySelector('.popup_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_add').classList.add('popup_opened');
}
*/
function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);

  
  return(
    <>
    <section className="profile">
      
      <div className="profile__info">
        <div className="profile__avatar">
          <button className="profile__avatar-edit" onClick={onEditAvatar}></button>
          <img className="profile__avatar-img" alt="Аватар" src={currentUser.avatar} />
        </div>
        <div className="profile__description">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-btn" onClick={onEditProfile}></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
      </div>
      <button className="profile__add-btn" onClick={onAddPlace}></button>
    </section>
    <ul className="places">
      {cards.map((tempCard) => {
          return ( 
            <Card 
              key = {tempCard._id}
              card = {tempCard}
              onCardClick = {onCardClick}
              onCardLike = {onCardLike}
              onCardDelete = {onCardDelete}
            /> 
          )
        })}
      <div className="popup popup_submit">
        <button className="popup__close-btn"></button>
        <form className="popup__container popup__container_submit" noValidate>
          <p className="popup__container-title popup__container-title_submit">Вы уверены?</p>
          <button className="popup__container-save-btn">Да</button>
        </form>
      </div>
    </ul>
    </>
    );
}

export default Main;