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
//import dataJson from '../data/alumnos.json';
import gruposJson from '../data/grupos.json';
import alumnosAsignadosGrupo from '../data/alumnos-asig-grupos.json';
import { Badge } from 'antd';
import Header from './layout/Header';

const USUARIA_FALSA = {
  id: 1,
  nombre: 'MariCarmen',
  apellidos: 'Salas',
  email: 'maricarmen@salas.com',
  rol: 'admin'
}

function App() {

  const [loggedUser, setLoggedUser] = useState(USUARIA_FALSA);

  const [showForm, setShowform]= useState(false);

  const handlerRecuperar = (ev) => {
    ev.preventDefault();
    setShowform(!showForm); 

    }



  const [alumnas, setAlumnas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/alumnas/clases')
      .then(response => response.json())
      .then(result => console.log('Success:', result))
      .catch(error => console.error('Error:', error));
  }, []);


  const [grupos, setGrupos] = useState([]);
  const [alumnosAsignados, setAlumnosAsignados] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/alumnas/grupos')
      .then(response => response.json())
      .then(result => console.log('Success:', result))
      .catch(error => console.error('Error:', error));
  }, []);

 

  const [filterName, setFilterName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //CALENDARIO
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [mode, setMode] = useState('month');

  // Función para personalizar las celdas del calendario
  const cellRender = (current, { today }) => {
    const formattedDate = current.format('YYYY-MM-DD');

    if (current.day() === 2) {
      return (
        <ul>
          <li><Badge status="success" text="17-19 Clase (5)" /></li>

        </ul>
      );
    }

    return formattedDate === today.format('YYYY-MM-DD') ? (
      <ul>
        <li><Badge status="success" text="17-19 Clase (5)" /></li>
        <li><Badge status="warning" text="19-21 Clase (10)" /></li>
      </ul>
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
    <>
      <Header loggedUser={loggedUser} />
      <main>

        <Routes>
          <Route index element={<Home />} />
          <Route path="GestionAlumnas" element={<GestionAlumnas alumnas={alumnas} gruposJson={gruposJson} setAlumnas={setAlumnas} handlerInputFilterName={handlerInputFilterName} filteredAlumnas={filteredAlumnas} setNewAlumna={setNewAlumna} newAlumna={newAlumna} />} />
          <Route path="Alumnas" element={<Alumnas loggedUser={loggedUser} handlerRecuperar={handlerRecuperar} showForm={showForm} setShowForm={setShowform}/>} />
          <Route path="Calendario" element={<Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} mode={mode} setMode={setMode} cellRender={cellRender} onSelect={onSelect} onPanelChange={onPanelChange} />} />
          <Route path="Grupos" element={<Grupos searchTerm={searchTerm} filterName={filterName} setAlumnosAsignados={setAlumnosAsignados} setGrupos={setGrupos} grupos={grupos} setSearchTerm={setSearchTerm} alumnosAsignados={alumnosAsignados} alumnosAsignadosGrupo={alumnosAsignadosGrupo} />} />
        </Routes>

        <div>
          <div><Enlaces></Enlaces></div>
        </div>
      </main>

    </>
  )
}

export default App
