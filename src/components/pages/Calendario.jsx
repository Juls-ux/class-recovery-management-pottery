
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
        </section>
        </div>
        

    

    )
}

export default Calendario;