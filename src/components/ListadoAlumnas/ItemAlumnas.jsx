import PropTypes from 'prop-types';
import EditIcon from "../../images/edit-icon.svg";
import DeletIcon from "../../images/delet-icon.svg";


function ItemAlumnas({ alumnas = [] }) {  // 👈 Valor por defecto
    return (
      <ul className="listado__ul">
        {alumnas.length > 0 ? (
          alumnas.map((oneAlumn) => (
            <li key={oneAlumn.email} className="listado__li">
              <label className="listado__label">Nombre:</label>
              <input className="listado__input" type="text" value={oneAlumn.nombre}  />
  
              <label className="listado__label">E-Mail:</label>
              <input className="listado__input" type="text" value={oneAlumn.email}  />
  
              <label className="listado__label">Teléfono:</label>
              <input className="listado__input" type="text" value={oneAlumn.telefono}  />
  
              <label className="listado__label">Día:</label>
              <input className="listado__input" type="text" value={oneAlumn.dia}  />
  
              <label className="listado__label">Hora:</label>
              <input className="listado__input" type="text" value={oneAlumn.horario}  />
  
              <div className="listado__icons">
                <img className="listado__iconEdit" src={EditIcon} alt="icono editar" />
                <img className="listado__iconDelet" src={DeletIcon} alt="icono eliminar" />
              </div>
            </li>
          ))
        ) : (
          <p>No hay alumnas disponibles.</p>  // 👈 Mensaje si el array está vacío
        )}
      </ul>
    );
  }

  ItemAlumnas.propTypes = {
    alumnas: PropTypes.object
}
  export default ItemAlumnas;