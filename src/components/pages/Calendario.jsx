
import Header from "../layout/Header";
import React from 'react';
import CalendarioInput from '../CalendarioInput/CalendarioInput';
import PropTypes from "prop-types";

function Calendario({ selectedDate, setSelectedDate, mode, setMode, cellRender, onSelect, onPanelChange }) {
  return (
    <div>
 
      <div className="Calenderhero">
        <h1 className="Calenderhero__h1">Calendario</h1>
      </div>
      
      <section className="InfoSec">
        <ul className="InfoSec__ul">
          <li className="InfoSec__li"><button className="InfoSec__btn1"></button><p>Horario normal</p></li>
          <li className="InfoSec__li"><button className="InfoSec__btn2"></button><p>Hueco libre para recuperar</p></li>
          <li className="InfoSec__li"><button className="InfoSec__btn3"></button><p>Festivos/Cierres</p></li>
          <li className="InfoSec__li"><button className="InfoSec__btn4"></button><p>Clases Recuperadas</p></li>
        </ul>
      </section>

      <section className="horario">
        <CalendarioInput selectedDate={selectedDate} cellRender={cellRender} onSelect={onSelect} onPanelChange={onPanelChange} />
      
      </section>
    </div>
  );
}

Calendario.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  cellRender: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onPanelChange: PropTypes.func.isRequired
};

export default Calendario;