

import logoPac from '../../images/logo-paq-2.png';
import React from "react";

import Burger from "./Burger";


function Header({ user, setUser, logout, open }) {
  return (
    <header className="header">
      <a href="./Home">
        <img className="header__nav-logo" src={logoPac} alt="Logo Paquita"></img>
      </a>

      <Burger>
       

      </Burger>


    </header>
  );
}


export default Header;

