
import Header from "../layout/Header";

import avatar from "../../images/avatar-alumnas.jpg";
import { Link } from "react-router";


function Alumnas({loggedUser}){

    return(
        
        <>
        <div className="hero">
    
        </div>

        <div className="alumnas">
       <img className="alumnas__avatar" src={avatar}alt="avatar-alumnas" />
        <h2 className="alumnas__h2">{loggedUser.nombre} {loggedUser.apellidos}</h2>
        <p className="alumnas__text">{loggedUser.email}</p>
        </div>

        <div className="horario-section">
            <h3 className="horario-section__h3">Día/s:</h3>
            <p className="alumnas__text">Lunes</p>
            
            <h3 className="horario-section__h3">Horario:</h3>
            <p className="alumnas__text">17:00 h - 19:00 h</p>
            


        </div>
        <section>
            <Link to="/Calendario" className="recupera">Recupera una clase  🖤</Link>
        </section>

        <div className="userData">
            <h2 className="userData__h2">Tus datos</h2>
            <ul className="userData__data">
                <li className="userData__dataList">
                    <label className="userData__label" htmlFor="">Nombre Usuario</label>
                    <input  className="userData__input" type="text" value="Paquita Salas"/>
                </li>

                <li className="userData__dataList">
                    <label className="userData__label" htmlFor="">E-Mail</label>
                    <input  className="userData__input" type="text" value="ps-managmente@gmail.com"/>
                </li>

                <li className="userData__dataList">
                    <label  className="userData__label"htmlFor="">Contraseña</label>
                    <input  className="userData__input" type="text" value="xxxxxxx"/>
                </li>
                <button className="btn">
                Guardar datos
            </button>
            </ul>
          


        </div>

        </>


    

    )
}

export default Alumnas;