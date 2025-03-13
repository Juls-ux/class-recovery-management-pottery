import PropTypes from 'prop-types';
import Header from "../layout/Header";
import FormAddAlum from "../Form/FormAddAlum";
import Preview from "../Form/Preview";
import { useState } from 'react';


import AlumnasList from "../ListadoAlumnas/AlumnasList";
import { Link } from 'react-router';

function GestionAlumnas({alumnas,setAlumnas, filterName, filteredAlumnas, handlerInputFilterName,newAlumna, setNewAlumna, gruposJson, handleDelete}) {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    

    return (

        <div>
            <div className="title">
                <h1 className="title__h1">Listado de todos las alumnas</h1>
                <section className="title__sectionbtn">
                    <button className="addInput" onClick={handleOpenModal}>+ Añadir</button>
                    <button className="btn-admin" >Ver Grupos Semanales
                        <Link to="/Grupos"> </Link>
                    </button>
                    <input className="search-input" type="search" name="search" placeholder="Buscar" onChange={handlerInputFilterName} value={filterName} />
                </section>

            </div>


            <section className="listado">
            <AlumnasList filteredAlumnas={filteredAlumnas} setAlumnas={setAlumnas} handleDelete={handleDelete} />
            <Preview alumnas={alumnas} newAlumna={newAlumna}/>

            </section>

            {/* MODAL */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <FormAddAlum alumnas={alumnas} setAlumnas={setAlumnas} setNewAlumna={setNewAlumna} newAlumna={newAlumna} gruposJson={gruposJson} handleCloseModal={handleCloseModal} />
                    </div>
                </div>
            )}


        </div>

    )
}
GestionAlumnas.propTypes = {
       alumnas: PropTypes.array.isRequired,
    filterName: PropTypes.string.isRequired,
    filteredAlumnas: PropTypes.array.isRequired,
    handlerInputFilterName: PropTypes.func.isRequired,
    newAlumna: PropTypes.object.isRequired,
    setAlumnas: PropTypes.func.isRequired,
    setNewAlumna: PropTypes.func.isRequired,
    gruposJson: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
}
export default GestionAlumnas;