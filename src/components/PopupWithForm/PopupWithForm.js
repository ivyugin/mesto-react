import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className={`popup popup_${this.props.name} ${this.props.isOpen && 'popup_opened'}`}>
        <button className="popup__close-btn" onClick={this.props.onClose}></button>
        <form className="popup__container" noValidate>
          <p className="popup__container-title">{this.props.title}</p>
          {this.props.children}
        </form>
      </div>
    )
  }
}

export default PopupWithForm;