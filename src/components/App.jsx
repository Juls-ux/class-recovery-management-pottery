import { useState, useEffect } from 'react';
import { Routes, Route, useMatch, useNavigate, useLocation } from 'react-router';
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

import alumnosAsignadosGrupo from '../data/alumnos-asig-grupos.json';
import { Badge } from 'antd';
import Header from './layout/Header';
import RecuperarSolicitud from './pages/RecuperarSolicitud';
import FormRecuperar from './Formrecuperar';




function App() {

  const { pathname: path } = useLocation();
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  // ✅ Recuperar usuario de localStorage al cargar la app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowform] = useState(false);


  const handleAddAlumna = () => {
    setShowModal(true);
  };

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



  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const enviarSolicitud = async (ev) => {
    ev.preventDefault();
  

    const hora = fechaSeleccionada.toISOString().slice(11, 19); // Formato: HH:mm:ss
    const fechaFormateada = fechaSeleccionada.toISOString().slice(0, 19).replace("T", " "); // Formato: YYYY-MM-DD HH:mm:ss
  
    const claseEncontrada = grupos.find(c => c.dia === id_clase.dia && c.horario === id_clase.horario);
  

    const claseId = claseEncontrada ? claseEncontrada.id : null;
   
  
    const requestBody = {
      id_alumna: user.id,
      id_clase: claseId,  // ID de clase encontrado o `null`
      nombre: user.nombre,
      email: user.email,
      fecha: fechaFormateada,
      hora: hora
    };


    if (!fechaSeleccionada || !hora) {
      setMensaje("No se proporcionaron los datos necesarios.");
      return;
    }
  
    console.log("Cuerpo de la solicitud:", requestBody);
  
    try {
      const res = await fetch("http://localhost:3000/api/recuperar-clase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
  
      const data = await res.json();
      if (data.success) {
        setMensaje("Solicitud enviada correctamente ✅");
      } else {
        setMensaje("Error al enviar la solicitud ❌");
      }
    } catch (error) {
      setMensaje("Error de conexión con el servidor ❌");
    }
  };
  


  const login = async ({ email, contraseña }) => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contraseña }),
      });

      const data = await res.json();
      if (!data.token) {
        console.error("Error: No se recibió un token");
        return;
      }

      console.log("Token recibido:", data.token);

      const tokenParts = data.token.split(".");
      const payload = JSON.parse(atob(tokenParts[1]));

      // ✅ Guardar en el estado y en localStorage
      setUser(payload);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(payload));
      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };
  const logout = () => {


    console.log("Cerrando sesión..."); // 🛠 Depuración
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/");
  };

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
      <Header user={user} login={login} logout={logout} token={token} setToken={setToken}
      />
      <main>

        <Routes>
          <Route index element={<Home login={login} logout={logout} setUser={setUser} user={user} token={token} setToken={setToken} handlerRecuperar={handlerRecuperar} enviarSolicitud={enviarSolicitud} mensaje={mensaje} setMensaje={setMensaje} fechaSeleccionada={fechaSeleccionada} setFechaSeleccionada={setFechaSeleccionada} FormRecuperar={FormRecuperar} />} />
          <Route path="GestionAlumnas" element={<GestionAlumnas alumnas={alumnas} handleDelete={handleDelete} setAlumnas={setAlumnas} handlerInputFilterName={handlerInputFilterName} filterName={filterName} filteredAlumnas={filteredAlumnas} setNewAlumna={setNewAlumna} newAlumna={newAlumna} />} />
          <Route path="Alumnas" element={<Alumnas user={user} login={login} logout={logout} handlerRecuperar={handlerRecuperar} showForm={showForm} setShowForm={setShowform} />} />
          <Route path="Calendario" element={<Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} mode={mode} setMode={setMode} cellRender={cellRender} onSelect={onSelect} onPanelChange={onPanelChange} />} />
          <Route path="Grupos" element={<Grupos searchTerm={searchTerm} handlerInputFilterName={handlerInputFilterName}filterName={filterName} setAlumnosAsignados={setAlumnosAsignados} setGrupos={setGrupos} grupos={grupos} setSearchTerm={setSearchTerm} alumnosAsignados={alumnosAsignados} alumnosAsignadosGrupo={alumnosAsignadosGrupo} />} />
          <Route path='RecuperarSolicitud' element={<RecuperarSolicitud />} />
        </Routes>


        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <FormAddAlum alumnas={alumnas} setAlumnas={setAlumnas} gruposJson={gruposJson} />
              <FormRecuperar
               user={user}
                enviarSolicitud={enviarSolicitud}
                mensaje={mensaje}
                setMensaje={setMensaje}
                fechaSeleccionada={fechaSeleccionada}
                setFechaSeleccionada={setFechaSeleccionada}
              />
            </div>
          </div>
        )}

        <div><Enlaces /></div>
      </main>

    </>
  )
}

export default App