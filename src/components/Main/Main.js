import React from 'react';
import Card from './../Card/Card.js';

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
function Main(props) {
  return(
    <>
    <section className="profile">
      
      <div className="profile__info">
        <div className="profile__avatar">
          <button className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
          <img className="profile__avatar-img" alt="Аватар" src={props.userAvatar} />
        </div>
        <div className="profile__description">
          <h1 className="profile__name">{props.userName}</h1>
          <button className="profile__edit-btn" onClick={props.onEditProfile}></button>
          <p className="profile__job">{props.userDescription}</p>
        </div>
      </div>
      <button className="profile__add-btn" onClick={props.onAddPlace}></button>
    </section>
    <ul className="places">
      {props.cards.map((tempCard) => {
          return ( 
            <Card 
              key = {tempCard._id}
              card = {tempCard}
              onCardClick = {props.onCardClick}
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