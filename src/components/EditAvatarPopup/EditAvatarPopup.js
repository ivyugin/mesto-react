import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputRef = React.useRef();

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