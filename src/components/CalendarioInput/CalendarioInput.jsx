import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Input, Button, Popover, Select, Tag } from 'antd'; // Usamos Tag para mostrar categorías
import { SketchPicker } from 'react-color';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const CalendarioInput = ({ selectedDate, setSelectedDate, mode, setMode, onSelect, onPanelChange }) => {
  const [events, setEvents] = useState({});
  const [editingDate, setEditingDate] = useState(null);
  const [eventText, setEventText] = useState('');
  const [eventColor, setEventColor] = useState('#ffffff');
  const [eventCategory, setEventCategory] = useState('');
  const [colorPickerVisible, setColorPickerVisible] = useState(false);


  // Datos de los grupos

  const [grupos, setGrupos] = useState([]);


  // Cargar los datos de los grupos desde la API
  useEffect(() => {
    if (grupos.length > 0) {
      const groupEvents = generateGroupEvents();
      setEvents((prevEvents) => ({ ...prevEvents, ...groupEvents }));
    }
  }, [grupos]); // ⚠️ Se ejecuta cada vez que se actualicen los grupos


  // Función para generar eventos de los grupos en las fechas correspondientes
  const generateGroupEvents = () => {
    const events = {};
    const diasSemana = {
      "Lunes": 1,
      "Martes": 2,
      "Miércoles": 3,
      "Jueves": 4,
      "Viernes": 5
    };

    grupos.forEach((grupo) => {
      const diaIndex = diasSemana[grupo.dia];
      if (diaIndex === undefined) return; // Si el día no es válido, lo ignoramos

      // Calculamos la primera fecha de la semana actual para ese día
      let fechaInicio = dayjs().day(diaIndex);

      // Si la fecha ya pasó en esta semana, la llevamos a la siguiente semana
      if (fechaInicio.isBefore(dayjs(), "day")) {
        fechaInicio = fechaInicio.add(7, "day");
      }

      // Generamos los eventos para las siguientes 4 semanas (ajusta según sea necesario)
      for (let i = 0; i < 4; i++) {
        const fechaGrupo = fechaInicio.add(i * 7, "day").format("YYYY-MM-DD");

        if (!events[fechaGrupo]) {
          events[fechaGrupo] = [];
        }

        events[fechaGrupo].push({
          text: `Grupo (${grupo.horario})`,
          color: "#ffcc00", // Color por defecto para los grupos
          category: "grupo",
          alumnos: grupo.alumnos
        });
      }
    });

    return events;
  };


  const loadEventsFromLocalStorage = () => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || {};
    setEvents(storedEvents);
  };

  const saveEventsToLocalStorage = (events) => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  };

  useEffect(() => {
    loadEventsFromLocalStorage();
  }, []);

  const handleDateClick = (date) => {
    const dateString = date.format('YYYY-MM-DD');
    setEditingDate(dateString);
    setEventText(events[dateString]?.text || '');
    setEventColor(events[dateString]?.color || '#ffffff');
    setEventCategory(events[dateString]?.category || '');
    setColorPickerVisible(true);
  };

  const handleSaveEvent = () => {
    if (editingDate && eventText.trim()) {
      const updatedEvents = {
        ...events,
        [editingDate]: {
          text: eventText,
          color: eventColor, // Guardamos el color asignado
          category: eventCategory,
        },
      };
      setEvents(updatedEvents);
      saveEventsToLocalStorage(updatedEvents);
    }
    setEditingDate(null);
    setEventText('');
    setEventColor('#ffffff');
    setEventCategory('');
    setColorPickerVisible(false);
  };


  const handleTextChange = (e) => {
    setEventText(e.target.value);
  };

  const handleColorChange = (color) => {
    setEventColor(color.hex);
  };

  const handleCategoryChange = (value) => {
    setEventCategory(value);
    const categoryColors = {
      vacaciones: "#ff4d4f", // Rojo
      grupo: "#52c41a",      // Verde
      reunion: "#fa8c16",    // Naranja
    };
    setEventColor(categoryColors[value] || "#ffffff"); // Asigna el color según la categoría
  };

  const handleCategoryEditClick = () => {
    setColorPickerVisible(false); // Cerrar el selector de color si se va a editar la categoría
  };

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
        {events[dateString] && (
          <div
            style={{
              fontSize: '12px',
              backgroundColor: events[dateString].color || '#e0f7fa',
              padding: '4px',
              borderRadius: '4px',
              position: 'absolute',
              bottom: '10px',
              left: '10px',
            }}
          >
            {events[dateString].text}
            {events[dateString].category && (
              <Tag
                color={events[dateString].color} // Aplica el color del evento
                style={{ marginTop: '5px', cursor: 'pointer' }}
                onClick={handleCategoryEditClick}
              >
                {events[dateString].category}
              </Tag>
            )}
          </div>
        )}


        {/* Si estamos editando, mostramos el campo de texto */}
        {editingDate === dateString && (
          <>
            <Input
              value={eventText}
              onChange={handleTextChange}
              onBlur={handleSaveEvent}
              onPressEnter={handleSaveEvent}
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
            <Select
              style={{ width: '100%', marginBottom: '10px' }}
              value={eventCategory}
              onChange={handleCategoryChange}
            >
              <Select.Option value="vacaciones">Vacaciones</Select.Option>
              <Select.Option value="grupo">Grupo</Select.Option>
              <Select.Option value="reunion">Reunión</Select.Option>
            </Select>

            {colorPickerVisible && (
              <Popover
                content={<SketchPicker color={eventColor} onChangeComplete={handleColorChange} />}
                trigger="click"

                onClickOutSide={() => setColorPickerVisible(false)}
                placement="topLeft"
              >
                <Button
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    width: '30px',
                    height: '30px',
                    padding: '0',
                    backgroundColor: eventColor,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                />
              </Popover>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>📅 Calendario Rotas</h2>

      <Calendar
        value={selectedDate}
        mode={mode}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        fullscreen={true}
        showWeek={true}
        validRange={[dayjs().subtract(1, 'month'), dayjs().add(3, 'month')]}
        cellRender={renderCell}
        handleCategoryChange={handleCategoryChange}
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

