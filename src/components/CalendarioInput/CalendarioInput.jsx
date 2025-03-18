import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Input, Tooltip, ColorPicker } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Cambia el idioma a español

dayjs.locale('es'); // Establece el idioma de Dayjs

const CalendarioInput = ({selectedDate, setSelectedDate, mode, setMode, onSelect, onPanelChange}) => {
  // Estado para manejar los eventos en cada día (almacena la fecha, el texto escrito y el color)
  const [events, setEvents] = useState({});
  const [editingDate, setEditingDate] = useState(null);
  const [eventText, setEventText] = useState('');
  const [eventColor, setEventColor] = useState('#ffffff'); // Color inicial

  // Función para cargar los eventos desde localStorage
  const loadEventsFromLocalStorage = () => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || {};
    setEvents(storedEvents);
  };

  // Función para guardar los eventos en localStorage
  const saveEventsToLocalStorage = (events) => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  };

  // Cargar los eventos cuando el componente se monta
  useEffect(() => {
    loadEventsFromLocalStorage();
  }, []);

  // Función para manejar la selección de una fecha
  const handleDateClick = (date) => {
    const dateString = date.format('YYYY-MM-DD');
    setEditingDate(dateString);
    setEventText(events[dateString]?.text || ''); // Cargar el texto del evento existente si hay uno
    setEventColor(events[dateString]?.color || '#ffffff'); // Cargar el color del evento
  };

  // Función para guardar el evento de la fecha
  const handleSaveEvent = () => {
    if (editingDate && eventText.trim()) {
      const updatedEvents = {
        ...events,
        [editingDate]: { text: eventText, color: eventColor },
      };
      setEvents(updatedEvents);
      saveEventsToLocalStorage(updatedEvents); // Guardar en localStorage
    }
    setEditingDate(null); // Cerrar la edición
    setEventText(''); // Limpiar el campo de texto
    setEventColor('#ffffff'); // Resetear el color
  };

  // Función para manejar el cambio de texto
  const handleTextChange = (e) => {
    setEventText(e.target.value);
  };

  // Función para manejar el cambio de color
  const handleColorChange = (color) => {
    setEventColor(color.hex); // Cambiar el color del evento
  };

  // Función para hacer renderizado de la celda de calendario
  const renderCell = (value) => {
    const dateString = value.format('YYYY-MM-DD');
    return (
      <div
        style={{
          position: 'relative',
          padding: '8px',
          border: '1px solid #f0f0f0',
          borderRadius: '4px',
          height: '100px',
        }}
        onClick={() => handleDateClick(value)}
      >
        {/* Mostrar el texto del evento si existe */}
        {events[dateString] && (
          <div
            style={{
              fontSize: '12px',
              backgroundColor: events[dateString].color || '#e0f7fa', // Color del evento
              padding: '4px',
              borderRadius: '4px',
              position: 'absolute',
              bottom: '10px',
              left: '10px',
            }}
          >
            {events[dateString].text}
          </div>
        )}

        {/* Si estamos editando, mostramos el campo de texto */}
        {editingDate === dateString && (
          <>
            <Input
              value={eventText}
              onChange={handleTextChange}
              onBlur={handleSaveEvent} // Guardar al hacer clic fuera
              onPressEnter={handleSaveEvent} // Guardar al presionar Enter
              autoFocus
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '10px',
                width: '90%',
                fontSize: '14px',
                padding: '5px',
              }}
            />
            <ColorPicker
               type="color"
               value={eventColor}
               onChange={e => handleColorChange(e.target.value)}
               style={{
                 position: 'absolute',
                 bottom: '10px',
                 left: '10px',
                 width: '30px',
                 height: '30px',
                 padding: '0',
                 border: 'none',
                 background: 'transparent',
              }}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>📅 Calendario Rotas</h2>

      {/* Calendario */}
      <Calendar
        value={selectedDate}
        mode={mode}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        fullscreen={true} // Cambia a 'false' para una vista más compacta
        showWeek={true} // Muestra números de semana
        validRange={[dayjs().subtract(1, 'month'), dayjs().add(3, 'month')]} // Rango de fechas permitidas
        cellRender={renderCell} // Usamos nuestro render personalizado para las celdas
      />
    </div>
  );
};

CalendarioInput.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  onSelect: PropTypes.func,
  onPanelChange: PropTypes.func,
};

export default CalendarioInput;
