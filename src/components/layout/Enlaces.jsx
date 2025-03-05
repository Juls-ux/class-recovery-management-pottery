import { Link } from "react-router";


function Enlaces() {

    return (<>
        <div className="footer">
            <ul className="footerNav">
                <li> <Link className="enlaces-temporales" to="/"> Home</Link> </li>
                <li> <Link className="enlaces-temporales" to="Alumnas"> Perfil alumnas</Link> </li>
                <li>  <Link className="enlaces-temporales" to="Calendario"> Calendario Alumnas</Link> </li>
                <li>  <Link className="enlaces-temporales" to="GestionAlumnas"> Gestion de Alumnos</Link> </li>  
                <li>  <Link className="enlaces-temporales" to="Grupos"> Grupos de Alumnos</Link> </li>            </ul>

        </div>
    </>

    )

}

export default Enlaces;