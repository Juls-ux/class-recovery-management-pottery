import PropTypes from "prop-types";

function Preview({newAlumna = {} }) {

  return (
    <div className="preview">
      <section className="preview__section">
        <h3 className="preview--title">Vista Previa de la Información de la Alumna</h3>

        {newAlumna.nombre ? (
          <ul className="listado__ul">
            <li className="listado__li">
              <p className="listado__addInput">{newAlumna.nombre || "Nombre"}</p>
              <p className="listado__addInput">{newAlumna.email || "Email"}</p>
              <p className="listado__addInput">{newAlumna.telefono || "Teléfono"}</p>
              <p className="listado__addInput">{newAlumna.dia || "Día"}</p>
              <p className="listado__addInput">{newAlumna.horario || "Hora"}</p>
            </li>
          </ul>
        ) : (
          <p>No hay información de la alumna disponible.</p>
        )}
      </section>
    </div>

  )

}
Preview.propTypes = {
  newAlumna: PropTypes.objectz
};

export default Preview;

