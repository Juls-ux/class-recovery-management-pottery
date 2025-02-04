import { Link } from "react-router";


function Enlaces() {

    return (<>
        <div className="footer">
            <ul className="footerNav">
                <li> <Link className="enlaces-temporales" to="Home"> Home</Link> </li>
                <li> <Link className="enlaces-temporales" to="Alumnas"> Perfil alumnas</Link> </li>
                <li>  <Link className="enlaces-temporales" to="Calendario"> Calendario</Link> </li>
            </ul>

        </div>
    </>

    )

}

export default Enlaces;