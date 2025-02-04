
import Header from "../layout/Header";

import EditIcon from "../../images/edit-icon.svg";
import DeletIcon from "../../images/delet-icon.svg";

function GestionAlumnas() {
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
                <ul className="listado__ul">

                    <li className="listado__li">
                        <label className="listado__label" htmlFor="">Nombre</label>
                        <input className="listado__input" type="text" value="Paquita Salas" />
                    </li>

                    <li className="listado__li">
                        <label className="listado__label" htmlFor="">E-Mail</label>
                        <input className="listado__input" type="text" value="ps-management@gmail.com" />

                    </li>

                    <li className="listado__li">
                       <label className="listado__label" htmlFor="">Telefono</label>
                        <input className="listado__input" type="text" value="73534536" />
                    </li>

                    <li className="listado__li">

                        <label className="listado__label" htmlFor="">Día</label>
                        <input className="listado__input" type="text" value="Lunes" />
                    </li>
                    <li className="listado__li">

                        <label className="listado__label" htmlFor="">hora</label>
                        <input className="listado__input" type="text" value="17:00-19:00" />
                    </li>

                    <li><img className="listado__iconEdit" src={EditIcon}alt="icono editar"/></li>
                    <li><img className="listado__iconDelet" src={DeletIcon}alt="icono "/></li>
                </ul>







            </section>


        </div>

    )
}

export default GestionAlumnas;