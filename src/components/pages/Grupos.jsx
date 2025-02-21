
import { useState } from "react"
import PropTypes from "prop-types"

function Grupos({ searchTerm, setSearchTerm, alumnosAsignados, setAlumnosAsignados, alumnosAsignadosGrupo }) {


    const dias = [...new Set(alumnosAsignadosGrupo.map(obj => obj.dia))];
    const horario = [...new Set(alumnosAsignadosGrupo.map(obj2 => obj2.horario))];

    return (
        <>
            <div className="grupos">
                <h1>Vision global de Grupos</h1>

                <div className="grupos__actiones">
                    <input
                        className="grupos__input"
                        type="search"
                        placeholder="Buscar"
                        value=""

                    />
                    <button className="grupos__add-btn" >Añadir</button>
                    <button className="grupos__manage-btn">Gestión Alumnos</button>
                </div>


                <div className="dia-contaier">
                    <div className="dia-contaier__column">
                        <div className="dia-contaier__header"></div>
                        <thead>
                            <tr>
                                {dias.map((dia) => (
                                    <th key={dia}>{dia}</th>
                                ))}
                            </tr>
                        </thead>

                    </div>

                </div>

                <div className="horario-contaier">
                    <div className="horario-contaier__column">
                        <div className="horario-contaier__header"></div>
                        <thead>
                            <tr>
                                {horario.map((hora) => (
                                    <th key={hora}>{hora}</th>
                                ))}
                            </tr>
                        </thead>

                    </div>

                </div>


                <div className="">
                    <div className=""></div>

                    <div className="">

                    </div>

                </div>

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
