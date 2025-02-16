
import { Link } from "react-router";
import logoPac from '../../images/logo-paq-2.png';

function Header() {
    return (
      <header className="header">
        <img className="header__nav-logo" src={logoPac} alt="Logo Paquita" />

        
        <ul className="header__nav-menu" >
        <li>
            <Link className="header__nav-link" to="/home">Home</Link>
          </li>
          <li>
            <Link className="header__nav-link" to="/alumnas">Mi perfil</Link>
          </li>
          <li>
            <Link className="header__nav-link" to="/calendario">Calendario</Link>
          </li>
        </ul>
      </header>
    );
  }
  
  export default Header;