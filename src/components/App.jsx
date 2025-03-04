import { useState , useEffect} from 'react';

import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import GestionAlumnas from './pages/GestionAlumnas'
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

  const [alumnosAsignados, setAlumnosAsignados]=useState(alumnosAsignadosGrupo);
  const [filterName, setFilterName]= useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
    nombre: '',
    email: '',
    telefono: '',
    dia: '',
    horario: ''
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
      <Route path="GestionAlumnas" element={<GestionAlumnas alumnas={alumnas} setAlumnas={setAlumnas} handlerInputFilterName={handlerInputFilterName} filteredAlumnas={filteredAlumnas} newAlumna={newAlumna} setNewAlumna={setNewAlumna} gruposJson={gruposJson} handleDelete={handleDelete} />} />

        <Route path='Alumnas' element={<Alumnas />}> </Route>
        <Route path='Calendario' element={<Calendario />}> </Route>
        <Route path='Grupos' element={<Grupos searchTerm={searchTerm} setSearchTerm={setSearchTerm} alumnosAsignados={alumnosAsignados} setAlumnosAsignados={setAlumnosAsignados} alumnosAsignadosGrupo={alumnosAsignadosGrupo }/>}></Route>

      </Routes>

      <div>
         <div><Enlaces></Enlaces></div>
      </div>
    </main>


  )
}

export default App
