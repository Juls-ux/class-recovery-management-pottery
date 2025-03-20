
import { Link } from "react-router";
import logoPac from '../../images/logo-paq-2.png';
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";





function Header({ user, setUser, logout, open }) {
  return (
    <header className="header">
      <a href="./Home">
        <img className="header__nav-logo" src={logoPac} alt="Logo Paquita"></img>
      </a>

      <ul className="header__nav-menu" >

        <>
          <li>
            <Link className="header__nav-link" to="/GestionAlumnas">Gestion Alumnas</Link>
          </li>
          <li>
            <Link className="header__nav-link" to="/Grupos">Grupos</Link>
          </li>
          <li>  <Link className="header__nav-link" to="RecuperarSolicitud"> Solicitudes de recuperación</Link> </li>
        </>
        <li>
          <Link className="header__nav-link" to="/"><IoHomeSharp />
          </Link>
        </li>
        <li>
            <Link className="header__nav-link" to="/Calendario"><FaCalendarAlt /></Link>
          </li>

        <li>
            <Link className="header__nav-link" to="/Alumnas"><FaRegUserCircle /></Link>
        </li>
        <li>

          {user ?
            <Link className="header__nav-link" to="/" onClick={logout}><CiLogout />
            </Link>
            :
            <Link className="header__nav-link" to="/"><CiLogin /></Link>

          }

        </li>
      </ul>

    </header>
  );
}


export default Header;

