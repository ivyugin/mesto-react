import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup/AddPlacePopup.js';
import ImagePopup from './ImagePopup/ImagePopup.js';
import {api} from './../utils/Api.js';
import {CurrentUserContext} from './../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurentUser] = React.useState({});


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

    const userInfoPromise = api.getUserInfo()
      .then(userInfoFromServer => {
        setCurentUser(userInfoFromServer);
        return userInfoFromServer
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.likeCard(card._id, !isLiked)
      .then((newCard) => {
          // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((oldCard) => {
        const newCards = cards.filter(c => c._id != card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(userInfo) {
    api.setUserInfo(userInfo)
      .then((userInfoFromServer) => {
        setCurentUser(userInfoFromServer);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(avatarUrl) {
    api.setUserAvatar(avatarUrl)
      .then((userInfoFromServer) => {
        setCurentUser(userInfoFromServer);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(card) {
    api.addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });

  }

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
    <CurrentUserContext.Provider value={currentUser}>
    <div className="body">
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick = {handleCardClick}
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardDelete}
        />
        <EditProfilePopup
          isOpen = { isEditProfilePopupOpen }
          onClose = { closeAllPopups } 
          onUpdateUser = { handleUpdateUser }
        />
        <AddPlacePopup
          isOpen = { isAddPlacePopupOpen }
          onClose = { closeAllPopups } 
          onAddPlaceSubmit = { handleAddPlaceSubmit } 
        />
        <EditAvatarPopup
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          onUpdateAvatar = {handleUpdateAvatar}
        />
        
        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}
        />
        <Footer />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
