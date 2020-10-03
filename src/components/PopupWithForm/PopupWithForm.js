import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, onSubmit, children}) {
  return(
  <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <button className="popup__close-btn" onClick={onClose}></button>
      <form className="popup__container" noValidate onSubmit={onSubmit}>
        <p className="popup__container-title">{title}</p>
        {children}
      </form>
    </div>
  )
}

export default PopupWithForm;