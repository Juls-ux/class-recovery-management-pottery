import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router";


function Burger({user, login, setUser, logout, open }) {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú (abrir/cerrar)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

console.log(user);


  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <button className="burger-icon" onClick={toggleMenu}>
        <span className="burger-icon-line"></span>
        <span className="burger-icon-line"></span>
        <span className="burger-icon-line"></span>
      </button>

      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className="header__nav-menu" >


          <li>
            <Link className="header__nav-link" to="/"><IoHomeSharp />Home
            </Link>
          </li>
          {user && user.rol === 'admin' &&
            <li>  <Link className="header__nav-link" to="RecuperarSolicitud"><IoMdNotifications />Alertas
            </Link> </li>

          }

          {user?.rol === 'admin' &&
          <li>
            <Link className="header__nav-link" to="/Calendario"><FaCalendarAlt />Calendario</Link>
          </li>
}
          {user &&
          <li>
            <Link className="header__nav-link" to="/Alumnas"><FaRegUserCircle />Mi perfil</Link>
          </li>
}
          {user && user.rol === 'admin' &&
          <li>
              <Link className="header__nav-link" to="/GestionAlumnas">Gestion Alumnas</Link>
            </li>
}
{user && user.rol === 'admin' &&
            <li>
              <Link className="header__nav-link" to="/Grupos">Grupos</Link>
            </li>
}
          <li>


            {user ?
              <Link className="header__nav-link-log" to="/" onClick={logout}>Logout
              </Link>
              :
              <Link className="header__nav-link-log" to="/">Login</Link>

            }

          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Burger;
