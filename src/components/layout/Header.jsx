
import { Link } from "react-router";

function Header() {
    return (
      <header>
        <ul className="nav-menu" >
          <li>
            <Link className="nav-link" to="/alumnas">Mi perfil</Link>
          </li>
          <li>
            <Link className="nav-link" to="/calendario">Calendario</Link>
          </li>
        </ul>
      </header>
    );
  }
  
  export default Header;