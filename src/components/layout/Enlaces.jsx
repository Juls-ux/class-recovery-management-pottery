import { Link } from "react-router";


function Enlaces() {

    return (<>
        <div className="footer">
            <ul>
                <li> <Link className="enlaces-temporales" to="Index"> Login</Link> </li>
                <li> <Link className="enlaces-temporales" to="Alumnas"> Perfil alumnas</Link> </li>
                <li>  <Link className="enlaces-temporales" to="Calendario"> Calendario</Link> </li>
            </ul>

        </div>
    </>

    )

}

export default Enlaces;