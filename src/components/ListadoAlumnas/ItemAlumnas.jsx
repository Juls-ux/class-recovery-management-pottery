import PropTypes from 'prop-types';
import EditIcon from "../../images/edit-icon.svg";
import DeletIcon from "../../images/delet-icon.svg";


function ItemAlumnas({ alumnas = [], setAlumnas }) {
  const handleDelete = (email) => {
    const confirmDelete = window.confirm("¿Seguro que quieres borrar a esta alumna?");
    
    if (confirmDelete) {
        console.log("Eliminando a:", email);
        setAlumnas(prevAlumnas => prevAlumnas.filter(alumna => alumna.email !== email));
    } else {
        console.log("Cancelado");
    }
};
    return (
      <table className="tabla-alumnas">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>E-Mail</th>
          <th>Teléfono</th>
          <th>Día</th>
          <th>Hora</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {alumnas.length > 0 ? (
          alumnas.map((oneAlumn) => (
            <tr key={oneAlumn.email}>
              <td data-label="ID">
                <input className="listado__input" type="text" value={oneAlumn.id} readOnly />
              </td>
              <td data-label="Nombre">
                <input className="listado__input" type="text" value={oneAlumn.nombre} readOnly />
              </td>
              <td data-label="Apellido">
                <input className="listado__input" type="text" value={oneAlumn.apellido} readOnly />
              </td>
              <td data-label="E-Mail">
                <input className="listado__input" type="text" value={oneAlumn.email} readOnly />
              </td>
              <td data-label="Teléfono">
                <input className="listado__input" type="text" value={oneAlumn.telefono} readOnly />
              </td>
              
              <td data-label="Día">
                <input className="listado__input" type="text" value={oneAlumn.dia} readOnly />
              </td>
              <td data-label="Hora">
                <input className="listado__input" type="text" value={oneAlumn.horario} readOnly />
              </td>
              <td data-label="Acciones">
                <div className="listado__icons">
                  <img className="listado__iconEdit" src={EditIcon} alt="icono editar" />
                  <img 
                    className="listado__iconDelet" 
                    src={DeletIcon} 
                    alt="icono eliminar"
                    onClick={() => handleDelete(oneAlumn.email)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No hay alumnas disponibles.</td>
          </tr>
        )}
      </tbody>
    </table>
    );
  }

  ItemAlumnas.propTypes = {
    alumnas: PropTypes.array,
    setAlumnas: PropTypes.func.isRequired

}
  export default ItemAlumnas;