
import { useState } from "react"
import PropTypes from "prop-types"

function Grupos({ searchTerm, setSearchTerm, alumnosAsignados, setAlumnosAsignados, alumnosAsignadosGrupo }) {


    const dias = [...new Set(alumnosAsignadosGrupo.map(obj => obj.dia))];
    const horario = [...new Set(alumnosAsignadosGrupo.map(obj2 => obj2.horario))];

    return (
        <>
            <div className="grupos">
                <h1>Visión Global de Grupos</h1>

                {/* Barra de búsqueda y botones */}
                <div className="grupos__acciones">
                    <input className="grupos__input" type="search" placeholder="Buscar" />
                    <button className="grupos__add-btn">Añadir</button>
                    <button className="grupos__manage-btn">Gestión Alumnos</button>
                </div>

                {/* Tabla de horarios */}
                <section className="tabla-container">
                    {/* Primera celda vacía */}
                    <div className="tabla__header tabla__empty"></div>

                    {/* Días de la semana en la parte superior */}
                    {dias.map((dia) => (
                        <div key={dia} className="tabla__header">
                            {dia}
                        </div>
                    ))}

                    {/* Horarios y celdas vacías */}
                    {horario.map((hora) => (
                        <>
                            <div key={hora} className="tabla__horario">{hora}</div>
                            {dias.map((dia, index) => (
                                <div key={`${hora}-${dia}-${index}`} className="tabla__cell"></div>
                            ))}
                        </>
                    ))}
                </section>
            </div>
        </>
    )
}
Grupos.propTypes = {
    searchTerm: PropTypes.func,
    setSearchTerm: PropTypes.func,
    setAlumnosAsignados: PropTypes.func,
    alumnosAsignados: PropTypes.array,
};

export default Grupos;
