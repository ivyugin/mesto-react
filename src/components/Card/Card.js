import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card);
  } 

  render() {
    return (
      <li className="place">
        <img className="place__image" src={this.props.card.link} onClick={this.handleClick}/>
        <button className="place__delete-btn"></button>
        <div className="place__description">
          <p className="place__title">{this.props.card.name}</p>
          <div className="place__like">
            <button className="place__like-btn"></button>
            <h3 className="place__like-count">{this.props.card.likes.length}</h3>
          </div>
        </div>
      </li>
    )
  }
}

export default Card;