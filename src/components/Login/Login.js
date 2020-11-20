import React from 'react';
import * as auth from '../Auth.js';
import { useHistory } from "react-router";

export default function Login({handleLogin}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    auth.autorize(email, password)
      .then((data) => {
        if (data.token) {
          handleLogin(email);
          setEmail('');
          setPassword('');
          history.push('/');
        }
      })
      .catch(err => console.log(err))
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className = "login">
      <form 
        noValidate
        className="login__form"
        onSubmit={handleSubmit}>
        <div>
        <h1 className="login__header">Вход</h1>
        <input
          className="login__input"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
          name="title"
          required
          type="text"
          minLength="2"
          maxLength="20">
        </input>
        <input
          className="login__input"
          placeholder="Пароль"
          value={password}
          onChange={onChangePassword}
          name="title"
          required
          type="text"
          minLength="2"
          maxLength="20">
        </input>
        </div>
        <div className="login__button-wrapper">
          <button
            className="login__submit">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
