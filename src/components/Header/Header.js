import React from 'react';
import logoPath from './../../images/logo.svg';

function Header() {
  return(
    <header className="header">
      <img src={logoPath} className="header__logo" alt="logo" />
    </header>
    );
}

export default Header;