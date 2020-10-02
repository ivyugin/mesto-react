import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

function AddPlacePopup({isOpen, onClose, onAddPlaceSubmit}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [url, setUrl] = React.useState('');

  const [isValid, setIsValid] = React.useState(true);

  const [errorName, setErrorName] = React.useState('');
  const [isErrorName, setIsErrorName] = React.useState(true);

  const [errorUrl, setErrorUrl] = React.useState('');
  const [isErrorUrl, setIsErrorUrl] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: name, 
      link: url
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

  function onChangeUrl(e){
    if (!e.target.validity.valid) {
      setIsErrorUrl(true)
      setErrorUrl(e.target.validationMessage);
    } else {
      setIsErrorUrl(false);
      setErrorUrl('');
    }
    setUrl(e.target.value);
  }

  React.useEffect(() => {
    if (!isErrorName && !isErrorUrl) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [isErrorName, isErrorUrl]);

  React.useEffect(() => {
    if (isOpen) {
      setName('');
      setUrl('');
      setErrorUrl('');
      setErrorName('');
      setIsValid(false);
    }
  }, [isOpen]);
  
  return(
    <PopupWithForm 
          name = 'add' 
          title = 'Новое место' 
          id = '2' 
          isOpen = { isOpen }
          onClose = { onClose }
          onSubmit =  { handleSubmit } >
          <div className="popup__control">
              <input className="popup__container-input popup__container-input_type_title" 
                 value={name}
                 name="title" 
                 placeholder="Название" 
                 required 
                 type="text" 
                 minLength="1" 
                 maxLength="30"
                 onChange={onChangeName} />
              <span className={`popup__error ${isErrorName && 'popup__error_active'}`}>{errorName}</span>
            </div>
            <div className="popup__control">
              <input className="popup__container-input popup__container-input_type_subtitle" 
                value={url}
                name="subtitle" 
                placeholder="Ссылка на картинку" 
                required 
                type="url"
                onChange={onChangeUrl} />
              <span className={`popup__error ${isErrorUrl && 'popup__error_active'}`}>{errorUrl}</span>
            </div>
            <button className={`popup__container-save-btn ${!isValid && 'popup__container-save-btn_inactive'}`}>Создать</button>
        </PopupWithForm>
  )
  
}

export default AddPlacePopup;