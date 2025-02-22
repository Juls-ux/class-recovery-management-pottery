import React from "react";
import PropTypes from "prop-types";

function Grupos({ searchTerm, setSearchTerm, alumnosAsignados, setAlumnosAsignados, alumnosAsignadosGrupo }) {

    console.log("Datos de alumnosAsignadosGrupo:", alumnosAsignadosGrupo);

    const dias = [...new Set(alumnosAsignadosGrupo.map(obj => obj.dia))];
    const horario = [...new Set(alumnosAsignadosGrupo.map(obj2 => obj2.horario))];

    console.log("Días:", dias);
    console.log("Horarios:", horario);

    return (
        <div className="grupos">
            <h1>Visión Global de Grupos</h1>

            <div className="grupos__acciones">
                <input
                    className="grupos__input"
                    type="search"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="grupos__add-btn">Añadir</button>
                <button className="grupos__manage-btn">Gestión Alumnos</button>
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
                                            .map((alumno) => (
                                                <div key={alumno.id}>
                                                    <li>{alumno.nombre}</li>
                                                </div>
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
    );
}

Grupos.propTypes = {
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func,
    setAlumnosAsignados: PropTypes.func,
    alumnosAsignados: PropTypes.array,
    alumnosAsignadosGrupo: PropTypes.array.isRequired
};

export default Grupos;
