import PropTypes from "prop-types";

function Preview({ alumnas = [] }) {
    return (

        <div className="preview">
            <section className="preview__section">
                <h3 className="preview--title">Vista Previa de la Información de la Alumna</h3>
                
                <ul className="listado__ul">
                <li className="listado__li">
                <p className="listado__addInput">{alumnas.email || "Email de la nueva alumna"}</p>
                </li>
                <li className="listado__li">
                <p className="listado__addInput">{alumnas.telefono || "Telefono de la nueva alumna"}</p>
                </li>

                <li className="listado__li">
                <p className="listado__addInput">{alumnas.dia || "Día que viene la nueva alumna"}</p>                </li>

                <li className="listado__li">
                <p className="listado__addInput">{alumnas.hora || "Hora de la nueva alumna"}</p>
                </li>
            </ul>

            </section>
            
            </div>

    )
}

export default Preview;

