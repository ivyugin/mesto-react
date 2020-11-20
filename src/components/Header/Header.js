import React from 'react';
import { Route, Switch, Link, useHistory} from 'react-router-dom';
import logoPath from './../../images/logo.svg';

function Header({userInfo}) {
  const history = useHistory();

  function logOut() {
    localStorage.removeItem('token');
    history.push('/sign-in');
  }

  return(
    <header className="header">
      <img src={logoPath} className="header__logo" alt="logo" />
      <Switch>
        <Route path='/sign-up'>
            <Link 
              to="./sign-in"
              className="header__link">
              Войти
            </Link>
        </Route>
        <Route path="/sign-in">
            <Link 
              to="./sign-up"
              className="header__link">
              Зарегистрироваться
            </Link>
        </Route>
        <Route path="/">
          <div className="header__infowrapper">
            <p className="header__userinfo">{userInfo}</p>
            <button 
              to="/sign-in"
              className="header__log-out"
              onClick={logOut}>
              Выйти
            </button>
          </div>
        </Route>
      </Switch>
      
    </header>
    );
}

export default Header;