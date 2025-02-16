import PropTypes from 'prop-types';
import Header from "../layout/Header";

import AlumnasList from "../ListadoAlumnas/AlumnasList";

function GestionAlumnas({alumnas}) {
    return (

        <div>
            <Header /> { }

            <div className="title">
                <h1 className="title__h1">Listado de todos los alumnos</h1>
                <section className="title__sectionbtn">
                    <input className="addInput" type="Add" name="" id="" value="Añadir" />
                    <button className="btn-admin" >Ver Grupos Semanales</button>
                </section>

            </div>


            <section className="listado">
                <AlumnasList alumnas={alumnas}/>

            </section>


        </div>

    )
}
GestionAlumnas.propTypes = {
    alumnas: PropTypes.array
}
export default GestionAlumnas;