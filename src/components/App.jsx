import { useState } from 'react';

import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import GestionAlumnas from './pages/GestionAlumnas'
import Alumnas from './pages/Alumnas';
import Calendario from './pages/Calendario';
import Enlaces from './layout/enlaces';
import '../styles/App.scss'
import dataJson from '../data/alumnos.json'



function App() {  

  const [alumnas, setAlumnas]= useState(dataJson);
  const [filterName, setFilterName]= useState('');

  const [newAlumna, setNewAlumna] = useState({
    nombre: '',
    email: '',
    telefono: '',
    dia: '',
    horario: ''
  });

//SECCION EVENTOS

const handlerInputFilterName= (ev) => {
ev.preventDefault();
setFilterName(ev.target.value);
}


const filteredAlumnas= alumnas.filter( alumna => alumna.nombre.toLocaleLowerCase().includes (filterName.toLocaleLowerCase() ));

//FETCH 
    

  return (
    <main>

      <Routes>
      <Route index element={<Home />} />
      <Route path="GestionAlumnas" element={<GestionAlumnas alumnas={alumnas} setAlumnas={setAlumnas} handlerInputFilterName={handlerInputFilterName} filteredAlumnas={filteredAlumnas} setNewAlumna={setNewAlumna}/>} />

        <Route path='Alumnas' element={<Alumnas />}> </Route>
        <Route path='Calendario' element={<Calendario />}> </Route>

      </Routes>

      <div>
         <div><Enlaces></Enlaces></div>
      </div>
    </main>


  )
}

export default App
