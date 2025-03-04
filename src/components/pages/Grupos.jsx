import React from "react";
import PropTypes from "prop-types";
import Header from "../layout/Header";
import { Link } from "react-router";

function Grupos({  alumnosAsignados, setAlumnosAsignados, alumnosAsignadosGrupo, handlerInputFilterName, filterName }) {

    console.log("Datos de alumnosAsignadosGrupo:", alumnosAsignadosGrupo);

    const dias = [...new Set(alumnosAsignadosGrupo.map(obj => obj.dia))];
    const horario = [...new Set(alumnosAsignadosGrupo.map(obj2 => obj2.horario))];
    const nombre = [...new Set(alumnosAsignadosGrupo.map(obj3 => obj3.nombre))];


    console.log("Días:", dias);
    console.log("Horarios:", horario);
    console.log("Nombre:", nombre);

    return (
        <>
        <Header/>
        
        <div className="grupos">
            <h1>Visión Global de Grupos</h1>

            <div className="grupos__acciones">
                <input
                    className="grupos__input"
                    type="search"
                    placeholder="Buscar"
                    onChange={handlerInputFilterName} value={filterName}
                    
                />
                <button className="grupos__add-btn">Añadir
                    <Link to="/GestionAlumnas"></Link>
                </button>
                <button className="grupos__manage-btn">Gestión Alumnos
                    <Link to="/GestionAlumnas"></Link>
                </button>
            </div>

            <section className="tabla-container">
                {alumnosAsignados.length > 0 ? (
                    <>

                        <div className="tabla__header tabla__empty"></div>

                        {dias.map((dia) => (
                            <div key={dia} className="tabla__header">{dia}</div>
                        ))}

                        {horario.map((hora) => (
                            <React.Fragment key={hora}>
                                <div className="tabla__horario">{hora}</div>
                                {dias.map((dia) => (
                                    <div key={`${hora}-${dia}`} className="tabla__cell">
                                    {alumnosAsignadosGrupo
                                      .filter(alumno => alumno.dia === dia && alumno.horario === hora)
                                      .flatMap(grupo => grupo.alumnos) // Extraer los alumnos
                                      .map((alumno) => (
                                        <ul className="tabla__ul" key={alumno.id}>
                                          <li className="tabla__li"><p> <strong>{alumno.nombre || "Sin nombre"}</strong></p></li>
                                          <li className="tabla__li"><p> {alumno.email || "Sin email"}</p> </li>
                                          <li className="tabla__li"><p>{alumno.telefono || "Sin teléfono"}</p> </li>
                                        </ul>
                                      ))
                                    }
                                  </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </>
                ) : (
                    <div className="tabla__mensaje">No hay alumnos disponibles.</div>
                )}
            </section>
        </div>
        </>
    );
}

Grupos.propTypes = {
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func,
    setAlumnosAsignados: PropTypes.func,
    alumnosAsignados: PropTypes.array,
    alumnosAsignadosGrupo: PropTypes.array.isRequired,
    handlerInputFilterName: PropTypes.func.isRequired,
    filterName: PropTypes.func.isRequired
};

export default Grupos;
