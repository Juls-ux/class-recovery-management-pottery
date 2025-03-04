import { Calendar } from 'antd'; // ✅ Mantiene la importación del calendario de Ant Design

const CalendarioInput = () => { // ✅ Cambia el nombre del componente
  const dateCellRender = (value) => {
    const formattedDate = value.format('YYYY-MM-DD');
    return formattedDate === '2025-03-04' ? (
      <div style={{ background: '#ff4d4f', color: 'white', padding: '5px', borderRadius: '4px' }}>
        Evento 🎉
      </div>
    ) : null;
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default CalendarioInput; // ✅ Exportamos con el nuevo nombre


