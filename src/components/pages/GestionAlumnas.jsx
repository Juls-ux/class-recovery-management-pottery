import PropTypes from 'prop-types';
import Header from "../layout/Header";
import FormAddAlum from "../Form/FormAddAlum";
import Preview from "../Form/Preview";

import AlumnasList from "../ListadoAlumnas/AlumnasList";

function GestionAlumnas({alumnas,setAlumnas, filterName, filteredAlumnas, handlerInputFilterName,newAlumna, setNewAlumna, gruposJson, handleDelete}) {
    return (

        <div>
            <Header /> { }

            <div className="title">
                <h1 className="title__h1">Listado de todos las alumnas</h1>
                <section className="title__sectionbtn">
                    <input className="addInput" type="Add" name="" id="" value="Añadir" />
                    <button className="btn-admin" >Ver Grupos Semanales</button>
                    <input className="search-input" type="search" name="search" placeholder="Buscar" onChange={handlerInputFilterName} value={filterName} />
                </section>

            </div>


            <section className="listado">
            <AlumnasList filteredAlumnas={filteredAlumnas} setAlumnas={setAlumnas} handleDelete={handleDelete} />
            <FormAddAlum alumns={alumnas} setAlumnas={setAlumnas} setNewAlumna={setNewAlumna} newAlumna={newAlumna} gruposJson={gruposJson} />
            <Preview alumnas={alumnas} newAlumna={newAlumna}/>

            </section>


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
}
export default GestionAlumnas;