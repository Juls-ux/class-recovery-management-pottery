
import { Link } from "react-router";
import logoPac from '../../images/logo-paq-2.png';
import MenuItem from "antd/es/menu/MenuItem";

function Header({ user }) {
  return (
    <header className="header">
      <a href="./Home">
        <img className="header__nav-logo" src={logoPac} alt="Logo Paquita"></img>
      </a>

     
        <ul className="header__nav-menu" >
          <li>
            <Link className="header__nav-link" to="/">Home</Link>
          </li>

          <li>
            
            {user ?
            <Link className="header__nav-link" to="/Logout">Logout</Link>
            :
            <Link className="header__nav-link" to="/Login">Login</Link>
            
            }

            
          </li>



          <li>
            
            <Link className="header__nav-link" to="/Alumnas">Mi perfil</Link>

          </li>
         
            <>
              <li>
                <Link className="header__nav-link" to="/Calendario">Calendario</Link>
              </li>
              <li>
                <Link className="header__nav-link" to="/GestionAlumnas">Gestion Alumnas</Link>
              </li>
              <li>
                <Link className="header__nav-link" to="/Grupos">Grupos</Link>
              </li>
              <li>  <Link className="header__nav-link" to="RecuperarSolicitud"> Solicitudes de recuperación</Link> </li>     
            </>
          
        </ul>
      
    </header>
  );
}



export default Header;