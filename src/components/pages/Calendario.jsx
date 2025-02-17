
import Header from "../layout/Header";


function Calendario(){

    return(
        <div>
             <Header /> {}
             <div className="Calenderhero">
            <h1 className="Calenderhero__h1">Calendario</h1>

        </div>

        <section className="InfoSec">
            <ul className="InfoSec__ul">
                <li className="InfoSec__li">
                    <button className="InfoSec__btn1"></button>
                    <p>Horario normal </p>
                </li>

                <li className="InfoSec__li">
                    <button className="InfoSec__btn2"></button>
                    <p>Hueco libre para recuperar</p>
                </li>

                <li className="InfoSec__li">
                    <button className="InfoSec__btn3"></button>
                    <p>Festivos/Cierres</p>
                </li>

                <li className="InfoSec__li">
                    <button className="InfoSec__btn4"></button>
                    <p>Clases Recuperadas</p>
                </li>
            </ul>
        </section>

        <section className="horario">
            <h2 className="horario__h2">Hora</h2>
            <section className="horario__hora">
                <input className="horario__horas" type="text" value="17:00-19:00"/>
                <input className="horario__horas" type="text"value="19:00-21:00" />
            </section>
            <button className="btn">
                Solicitar
            </button>
        </section>
        </div>
        

    

    )
}

export default Calendario;