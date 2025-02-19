import PropTypes from "prop-types";

function Preview({newAlumna = {} }) {

  return (
    <div className="preview">
      <section className="preview__section">
        <h3 className="preview--title">Vista Previa de la Información de la Alumna</h3>

        {newAlumna.nombre ? (
          <ul className="preview__ul">
            <li className="preview__li">
              <p className="preview__addInput">{newAlumna.nombre || "Nombre"}</p>
              <p className="preview__addInput">{newAlumna.email || "Email"}</p>
              <p className="preview__addInput">{newAlumna.telefono || "Teléfono"}</p>
              <p className="preview__addInput">{newAlumna.dia || "Día"}</p>
              <p className="preview__addInput">{newAlumna.horario || "Hora"}</p>
            </li>
          </ul>
        ) : (
          <p className="preview__p" >No hay información de la alumna disponible.</p>
        )}
      </section>
    </div>

  )

}
Preview.propTypes = {
  newAlumna: PropTypes.objectz
};

export default Preview;

