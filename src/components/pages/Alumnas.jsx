
import Header from "../layout/Header";
import heroAlumnas from "../../images/hero-alumnas.jpg";
import avatar from "../../images/avatar-alumnas.jpg";


function Alumnas(){

    return(
        
        <div>
        <Header /> {}
        <div className="hero">
            <h1 className="hero__h1">Hola Paquita!</h1>

        </div>

        <div className="alumnas">
       <img className="alumnas__avatar" src={avatar}alt="avatar-alumnas" />
        <h2 className="alumnas__h2">Paquita Salas</h2>
        <p className="alumnas__text">ps-managmente@gmail.com</p>
        </div>

        <div className="horario-section">
            <h3 className="horario-section__h3">Día</h3>
            <p className="alumnas__text">Lunes</p>
            
            <h3 className="horario-section__h3">Hora</h3>
            <p className="alumnas__text">17:00 h - 19:00 h</p>
            


        </div>
        <section><a className="recupera" href="./Calendario">Recupera una clase</a></section>

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
            </ul>
        </div>

      </div>


    

    )
}

export default Alumnas;