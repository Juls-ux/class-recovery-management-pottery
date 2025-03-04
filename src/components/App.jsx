import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importa el idioma español

import Home from './pages/Home';
import GestionAlumnas from './pages/GestionAlumnas';
import Alumnas from './pages/Alumnas';
import Calendario from './pages/Calendario';
import Grupos from './pages/Grupos';
import Enlaces from './layout/enlaces';
import '../styles/App.scss';
import dataJson from '../data/alumnos.json';
import gruposJson from '../data/grupos.json';
import alumnosAsignadosGrupo from '../data/alumnos-asig-grupos.json';


function App() {

  const [alumnas, setAlumnas] = useState(() => {
    const storedAlumnas = localStorage.getItem('alumnas');
    return storedAlumnas ? JSON.parse(storedAlumnas) : dataJson;
  });

  const [grupos, setGrupos] = useState(() => {
    const storedGrupos = localStorage.getItem('grupos');
    return storedGrupos ? JSON.parse(storedGrupos) : gruposJson;
  });

  const [alumnosAsignados, setAlumnosAsignados] = useState(alumnosAsignadosGrupo);
  const [filterName, setFilterName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //CALENDARIO
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [mode, setMode] = useState('month');

  // Función para personalizar las celdas del calendario
  const cellRender = (current, { today }) => {
    const formattedDate = current.format('YYYY-MM-DD');
    return formattedDate === today.format('YYYY-MM-DD') ? (
      <div style={{ background: '#1890ff', color: 'white', padding: '5px', borderRadius: '4px' }}>
        Hoy 📅
      </div>
    ) : null;
  };

  // Función cuando se selecciona una fecha
  const onSelect = (date) => {
    console.log('Fecha seleccionada:', date.format('YYYY-MM-DD'));
    setSelectedDate(date);
  };

  // Función cuando se cambia el panel (mes/año)
  const onPanelChange = (date, newMode) => {
    console.log('Cambio de panel:', date.format('YYYY-MM-DD'), 'Modo:', newMode);
    setMode(newMode);
  };


  const handleDelete = (email) => {
    const confirmDelete = window.confirm("¿Seguro que quieres borrar a esta alumna?");

    if (confirmDelete) {
      console.log("Eliminando a:", email);
      setAlumnas(prevAlumnas => prevAlumnas.filter(alumna => alumna.email !== email));
    } else {
      console.log("Cancelado");
    }
  };
  const [newAlumna, setNewAlumna] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dia: "",
    horario: ""
  });


  // Guardar alumnas en localStorage cuando cambian
  useEffect(() => {
    if (alumnas) {
      localStorage.setItem('alumnas', JSON.stringify(alumnas));
    }
  }, [alumnas]);

  // Guardar grupos en localStorage cuando cambian
  useEffect(() => {
    if (grupos) {
      localStorage.setItem('grupos', JSON.stringify(grupos));
    }
  }, [grupos]);


  //SECCION EVENTOS

  const handlerInputFilterName = (ev) => {
    ev.preventDefault();
    setFilterName(ev.target.value);
  }


  const filteredAlumnas = alumnas.filter(alumna => alumna.nombre.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()));


  return (
    <main>

      <Routes>
        <Route index element={<Home />} />
        <Route path="GestionAlumnas" element={<GestionAlumnas alumnas={alumnas} gruposJson={gruposJson} setAlumnas={setAlumnas} handlerInputFilterName={handlerInputFilterName} filteredAlumnas={filteredAlumnas} setNewAlumna={setNewAlumna} newAlumna={newAlumna}/>} />
        <Route path="Alumnas" element={<Alumnas />} />
        <Route path="Calendario" element={<Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} mode={mode} setMode={setMode} cellRender={cellRender} onSelect={onSelect} onPanelChange={onPanelChange} />} />
        <Route path="Grupos" element={<Grupos searchTerm={searchTerm} setAlumnosAsignados={setAlumnosAsignados} setGrupos={setGrupos} gruposJson={gruposJson} setSearchTerm={setSearchTerm} alumnosAsignados={alumnosAsignados} alumnosAsignadosGrupo={alumnosAsignadosGrupo} />} />
      </Routes>

      <div>
        <div><Enlaces></Enlaces></div>
      </div>
    </main>


  )
}

export default App
