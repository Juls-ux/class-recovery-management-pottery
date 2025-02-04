
import Header from "../layout/Header";

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


            <section>
                <label htmlFor="">Nombre</label>
                <input type="text" value="Paquita Salas" />

                <label htmlFor="">E-Mail</label>
                <input type="text" value="ps-management@gmail.com" />

                <label htmlFor="">Telefono</label>
                <input type="text" value="73534536" />


                <label htmlFor="">Día</label>
                <input type="text" value="Lunes" />

                <label htmlFor="">hora</label>
                <input type="text" value="17:00-19:00" />

            </section>


        </div>

    )
}

export default GestionAlumnas;