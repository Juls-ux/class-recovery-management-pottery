import PropTypes from "prop-types";

function Preview({alumnas}) {
    return (
        <div className="preview">
        <section className="preview__section">
          <h3 className="preview--title">Vista Previa de la Información de la Alumna</h3>
          <ul className="listado__ul">
            {alumnas.length > 0 ? (
              alumnas.map((alumna, index) => (
                <li key={index} className="listado__li">
                  <p className="listado__addInput">{alumna.nombre || "Nombre"}</p>
                  <p className="listado__addInput">{alumna.email || "Email"}</p>
                  <p className="listado__addInput">{alumna.telefono || "Teléfono"}</p>
                  <p className="listado__addInput">{alumna.dia || "Día"}</p>
                  <p className="listado__addInput">{alumna.horario || "Hora"}</p>
                </li>
              ))
            ) : (
              <li className="listado__li">No hay alumnas registradas</li>
            )}
          </ul>
        </section>
      </div>

    )
}
Preview.propTypes = {
    alumnas: PropTypes.array.isRequired,
};

export default Preview;

