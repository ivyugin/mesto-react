import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import ImagePopup from './ImagePopup/ImagePopup.js';
import api from './../utils/Api.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(false);

//Get initial cards
  React.useEffect(() => {
    const getCardsPromise = api.getCardsArr()
      .then(cardsArr => {
        setCards(cardsArr);
        return cardsArr
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

//Get user info
  React.useEffect(() => {
    const userInfoPromise = api.getUserInfo()
      .then(userInfoFromServer => {
        setUserName(userInfoFromServer.name);
        setUserDescription(userInfoFromServer.about);
        setUserAvatar(userInfoFromServer.avatar);
        return userInfoFromServer
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [])

//Open & close popup's function
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          cards={cards}
          onCardClick = {handleCardClick}
        />
        <PopupWithForm 
          name = 'edit' 
          title = 'Редактировать профиль' 
          isOpen = { isEditProfilePopupOpen }
          onClose = { closeAllPopups } >
            <div className="popup__control">
              <input className="popup__container-input popup__container-input_type_title"
                name="title" 
                required
                type="text" 
                minLength="2" 
                maxLength="20" />
              <span className="popup__error"></span>
            </div>
            <div className="popup__control">
              <input className="popup__container-input popup__container-input_type_subtitle"
                name="subtitle" 
                required 
                type="text" 
                minLength="2" 
                maxLength="40" />
              <span className="popup__error"></span>
            </div>
            <button className="popup__container-save-btn">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm 
          name = 'add' 
          title = 'Новое место' 
          id = '2' 
          isOpen = { isAddPlacePopupOpen }
          onClose = { closeAllPopups } >
          <div className="popup__control">
              <input className="popup__container-input popup__container-input_type_title" 
                 name="title" 
                 placeholder="Название" 
                 required 
                 type="text" 
                 minLength="1" 
                 maxLength="30" />
              <span className="popup__error"></span>
            </div>
            <div className="popup__control">
              <input className="popup__container-input popup__container-input_type_subtitle" 
                name="subtitle" 
                placeholder="Ссылка на картинку" 
                required 
                type="url" />
              <span className="popup__error"></span>
            </div>
            <button className="popup__container-save-btn">Создать</button>
        </PopupWithForm>
        <PopupWithForm 
          name = 'avatar' 
          title = 'Обновить аватар' 
          id = '3' 
          isOpen = { isEditAvatarPopupOpen }
          onClose = { closeAllPopups } >
          <div className="popup__control">
              <input className="popup__container-input popup__container-input_type_subtitle" 
                name="subtitle" 
                placeholder="Ссылка на картинку" 
                required 
                type="url" />
              <span className="popup__error"></span>
            </div>
            <button className="popup__container-save-btn">Сохранить</button>
        </PopupWithForm>
        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
