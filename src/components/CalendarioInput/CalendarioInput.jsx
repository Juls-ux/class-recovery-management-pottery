import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Calendar } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Cambia el idioma a español

dayjs.locale('es'); // Establece el idioma de Dayjs

const CalendarioInput = ({selectedDate, setSelectedDate, mode, setMode, cellRender, onSelect, onPanelChange}) => {
  

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>📅 Calendario Rotas</h2>
      <Calendar
        cellRender={cellRender}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        value={selectedDate}
        mode={mode}
        fullscreen={true} // Cambia a 'false' para una vista más compacta
        showWeek={true} // Muestra números de semana
        validRange={[dayjs().subtract(1, 'month'), dayjs().add(3, 'month')]} // Rango de fechas permitidas
      />
    </div>
  );
};

CalendarioInput.propTypes = {

  selectedDate: PropTypes.func,
  setSelectedDate: PropTypes.func,
  mode: PropTypes.func,
  setMode: PropTypes.func,
  cellRender:PropTypes.func,
  onSelect:PropTypes.func,
  onPanelChange:PropTypes.func
};


export default CalendarioInput;


