import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const inputRef = React.useRef();

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  } 
  
  return(
    <PopupWithForm 
          name = 'avatar' 
          title = 'Обновить аватар' 
          id = '3' 
          isOpen = { isOpen }
          onClose = { onClose }
          onSubmit = {handleSubmit} >
          <div className="popup__control">
              <input ref={inputRef} className="popup__container-input popup__container-input_type_subtitle" 
                name="subtitle" 
                placeholder="Ссылка на картинку" 
                required 
                type="url" />
              <span className="popup__error"></span>
            </div>
            <button className="popup__container-save-btn">Сохранить</button>
        </PopupWithForm>
  )
  
}

export default EditAvatarPopup;