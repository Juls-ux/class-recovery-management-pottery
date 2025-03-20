
import Header from "../layout/Header";
import React from 'react';
import CalendarioInput from '../CalendarioInput/CalendarioInput';
import PropTypes from "prop-types";

function Calendario({ selectedDate, setSelectedDate, mode, setMode, cellRender, onSelect, onPanelChange }) {
  return (
    <div>
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