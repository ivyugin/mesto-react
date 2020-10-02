import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

   const [isValid, setIsValid] = React.useState(true);

  const [errorName, setErrorName] = React.useState('');
  const [isErrorName, setIsErrorName] = React.useState(false);

  const [errorDescription, setErrorDescription] = React.useState('');
  const [isErrorDescription, setIsErrorDescription] = React.useState(false);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  } 

  function onChangeName(e){
    setName(e.target.value);
    if (!e.target.validity.valid) {
      setIsErrorName(true);
      setErrorName(e.target.validationMessage);
    } else {
      setErrorName('');
      setIsErrorName(false);
    }
  }

  function onChangeDescription(e){
    if (!e.target.validity.valid) {
      setIsErrorDescription(true)
      setErrorDescription(e.target.validationMessage);
    } else {
      setIsErrorDescription(false);
      setErrorDescription('');
    }
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    if (!isErrorName && !isErrorDescription) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [isErrorName, isErrorDescription]);

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
      setErrorDescription('');
      setErrorName('');
      setIsValid(true);
    }
  }, [isOpen]);
  
  return(
    <PopupWithForm 
        name = 'edit' 
        title = 'Редактировать профиль' 
        isOpen = { isOpen }
        onClose = { onClose }
        onSubmit = { handleSubmit } >
          <div className="popup__control">
            <input className="popup__container-input popup__container-input_type_title"
              value={name || ''}
              name="title" 
              required
              type="text" 
              minLength="2" 
              maxLength="20"
              onChange={onChangeName} />
            <span className={`popup__error ${isErrorName && 'popup__error_active'}`}>{errorName}</span>
          </div>
          <div className="popup__control">
            <input className="popup__container-input popup__container-input_type_subtitle"
              value={description || ''}
              name="subtitle" 
              required 
              type="text" 
              minLength="2" 
              maxLength="40"
              onChange={onChangeDescription} />
            <span className={`popup__error ${isErrorDescription && 'popup__error_active'}`}>{errorDescription}</span>
          </div>
          <button className={`popup__container-save-btn ${!isValid && 'popup__container-save-btn_inactive'}`}>Сохранить</button>
      </PopupWithForm>
  )
  
}

export default EditProfilePopup;