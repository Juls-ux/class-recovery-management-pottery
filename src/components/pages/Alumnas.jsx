
import Header from "../layout/Header";
import heroAlumnas from "../../images/hero-alumnas.jpg";
import avatar from "../../images/avatar-alumnas.jpg";


function Alumnas(){

    return(
        
        <div>
        <Header /> {}
        <div className="hero">
            <h1 className="hero__h1">Hola Paquita!</h1>

        </div>

        <div className="alumnas">
       <img className="alumnas__avatar" src={avatar}alt="avatar-alumnas" />
        <h2 className="alumnas__h2">Paquita Salas</h2>
        </div>

      </div>
    

    )
}

export default Alumnas;