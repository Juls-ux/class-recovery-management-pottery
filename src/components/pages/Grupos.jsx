import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';

function Grupos({ handlerInputFilterName, filterName }) {
  const [grupos, setGrupos] = useState([]);

  // Cargar los datos de los grupos desde la API
  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/alumnas/grupos');
        if (!response.ok) {
          throw new Error('Error al obtener los grupos');
        }
        const data = await response.json();
        setGrupos(data[0].resultado_json);  // Establecer los datos de los grupos
      } catch (error) {
        console.error("Error al obtener los grupos:", error);
      }
    };

    fetchGrupos();
  }, []);

  // Días de la semana
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  // Obtener todos los horarios únicos
  const horarios = [...new Set(grupos.map(grupo => grupo.horario))];

  // Crear una estructura para la tabla
  const tabla = dias.map(dia => {
    const columnas = horarios.map(horario => {
      const gruposFiltrados = grupos.filter(grupo => grupo.dia === dia && grupo.horario === horario);
      return {
        horario,
        alumnos: gruposFiltrados.length > 0 ? gruposFiltrados[0].alumnos || [] : []
      };
    });
    return {
      dia,
      columnas
    };
  });

  return (
    <div className="grupos">
      <h1>Visión Global de Grupos</h1>

      <div className="grupos__acciones">
        <input
          className="grupos__input"
          type="search"
          placeholder="Buscar"
          onChange={handlerInputFilterName}
          value={filterName}
        />
          <Link to="/GestionAlumnas" className="grupos__add-btn">
           + Añadir
          </Link>
          <Link to="/GestionAlumnas" className="grupos__manage-btn">
            Gestión Alumnos
          </Link>
      </div>

      <section className="tabla-container">
        <table className="tabla">
          <thead className="tabla__header">
            <tr>
              <th></th>
              {horarios.map((horario) => (
                <th key={horario}>{horario}</th>
              ))}
            </tr>
          </thead>
          <tbody className="tabla__cell">
            {tabla.map((fila) => (
              <tr key={fila.dia}>
                <td>{fila.dia}</td>
                {fila.columnas.map((columna, index) => (
                  <td key={index}>
                    {columna.alumnos.length > 0 ? (
                      <ul>
                        {columna.alumnos.map((alumno) => (
                          <li key={alumno.id}>
                            <p><strong>{alumno.nombre}</strong></p>
                            <p>{alumno.email}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay alumnos</p>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

Grupos.propTypes = {
  setGrupos: PropTypes.func.isRequired,
  alumnosAsignados: PropTypes.array,
  setAlumnosAsignados: PropTypes.func,
  handlerInputFilterName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired
};

export default Grupos;
