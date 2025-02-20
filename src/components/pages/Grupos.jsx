
import { useState } from "react"
import PropTypes from "prop-types"

function Grupos({ searchTerm, setSearchTerm }) {

    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

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


                <div className="">
                    <div className="">
                        <div className=""></div>

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
    
};

export default Grupos;
