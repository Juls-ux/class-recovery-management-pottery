

import logoPac from '../../images/logo-paq-2.png';
import React from "react";

import Burger from "./Burger";


function Header({ user, setUser, logout, open, login, token, setToken }) {
  return (
    <header className="header">
      <a href="./Home">
        <img className="header__nav-logo" src={logoPac} alt="Logo Paquita"></img>
      </a>

      <Burger user={user} login={login} logout={logout} token={token} setToken={setToken} >
       

      </Burger>


    </header>
  );
}


export default Header;

