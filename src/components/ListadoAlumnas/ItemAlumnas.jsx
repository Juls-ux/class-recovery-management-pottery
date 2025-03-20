import PropTypes from 'prop-types';
import EditIcon from "../../images/edit-icon.svg";
import DeletIcon from "../../images/delet-icon.svg";
import { useState, useEffect } from 'react';

function ItemAlumnas({ alumnas = [], setAlumnas }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentAlumna, setCurrentAlumna] = useState(null);


  const handlePaymentChange = async (email, value) => {
    console.log(`Iniciando actualización de pago para: ${email}, nuevo valor: ${value}`);
  
    const updatedAlumnas = alumnas.map(alumna =>
      alumna.email === email ? { ...alumna, pago: value } : alumna
    );
    setAlumnas(updatedAlumnas); // Update local state for immediate UI feedback
  
    try {
      const response = await fetch(`/api/alumnas/clases/${email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pago: value }),
      });
  
      console.log(`Código de estado HTTP: ${response.status}`);
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Error en la respuesta del servidor:", errorData || "Sin cuerpo de respuesta");
        throw new Error(`Error al actualizar el pago (HTTP ${response.status})`);
      }
  
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const responseBody = await response.json();
        console.log("Respuesta del servidor:", responseBody);
  
        setAlumnas(prevAlumnas =>
          prevAlumnas.map(alumna =>
            alumna.email === email ? responseBody : alumna
          )
        );
      } else {
        console.warn("La respuesta no es un JSON válido.");
      }
    } catch (error) {
      console.error("Error en handlePaymentChange:", error);
    }
  };

  // Función para guardar los cambios
  const handleSave = () => {
    setAlumnas(prevAlumnas => prevAlumnas.map(alumna =>
      alumna.email === currentAlumna.email ? currentAlumna : alumna
    ));
    setIsEditing(false);  // Salimos del modo de edición
  };

  // Función para cancelar la edición
  const handleCancel = () => {
    setIsEditing(false);
    setCurrentAlumna(null);
  };

  // Función para eliminar una alumna
  const handleDelete = (email) => {
    const confirmDelete = window.confirm("¿Seguro que quieres borrar a esta alumna?");
    if (confirmDelete) {
      setAlumnas(prevAlumnas => prevAlumnas.filter(alumna => alumna.email !== email));
    }
  };

  useEffect(() => {
    const fetchAlumnas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/alumnas/clases?sort=a');
        if (!response.ok) {
          throw new Error('Error en la obtención de alumnas');
        }
        const data = await response.json();
        setAlumnas(data);
      } catch (error) {
        console.error("Error al obtener alumnas:", error);
      }
    };

    fetchAlumnas();
  }, [setAlumnas]);

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
          <th>Pago</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {alumnas.length > 0 ? (
          alumnas.map((oneAlumn) => (
            <tr key={oneAlumn.email}>
              <td data-label="ID">
                {isEditing && currentAlumna.email === oneAlumn.email ? (
                  <input
                    className="listado__input"
                    type="text"
                    name="id"
                    value={currentAlumna.id}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className="listado__input" type="text" value={oneAlumn.id} readOnly />
                )}
              </td>
              <td data-label="Nombre">
                {isEditing && currentAlumna.email === oneAlumn.email ? (
                  <input
                    className="listado__input"
                    type="text"
                    name="nombre"
                    value={currentAlumna.nombre}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className="listado__input" type="text" value={oneAlumn.nombre} readOnly />
                )}
              </td>
              <td data-label="Apellido">
                {isEditing && currentAlumna.email === oneAlumn.email ? (
                  <input
                    className="listado__input"
                    type="text"
                    name="apellidos"
                    value={currentAlumna.apellidos}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className="listado__input" type="text" value={oneAlumn.apellidos} readOnly />
                )}
              </td>
              <td data-label="E-Mail">
                {isEditing && currentAlumna.email === oneAlumn.email ? (
                  <input
                    className="listado__input"
                    type="text"
                    name="email"
                    value={currentAlumna.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className="listado__input" type="text" value={oneAlumn.email} readOnly />
                )}
              </td>
              <td data-label="Teléfono">
                {isEditing && currentAlumna.email === oneAlumn.email ? (
                  <input
                    className="listado__input"
                    type="text"
                    name="telefono"
                    value={currentAlumna.telefono}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className="listado__input" type="text" value={oneAlumn.telefono} readOnly />
                )}
              </td>
              <td data-label="Día">
                {isEditing && currentAlumna.email === oneAlumn.email ? (
                  <input
                    className="listado__input"
                    type="text"
                    name="dia"
                    value={currentAlumna.dia}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className="listado__input" type="text" value={oneAlumn.dia} readOnly />
                )}
              </td>
              <td data-label="Hora">
                {isEditing && currentAlumna.email === oneAlumn.email ? (
                  <input
                    className="listado__input"
                    type="text"
                    name="horario"
                    value={currentAlumna.horario}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input className="listado__input" type="text" value={oneAlumn.horario} readOnly />
                )}
              </td>
              <td data-label="Pago" className="pago">
                <select
                  className="listado__pago"
                  value={oneAlumn.pago || "pendiente"}
                  onChange={(e) => handlePaymentChange(oneAlumn.email, e.target.value)}
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="pagado">Pagado</option>
                </select>
              </td>
              <td data-label="Acciones">
                <div className="listado__icons">
                  <img
                    className="listado__iconEdit"
                    src={EditIcon}
                    alt="icono editar"
                    onClick={() => { setIsEditing(true); setCurrentAlumna(oneAlumn); }}
                  />
                  <img
                    className="listado__iconDelet"
                    src={DeletIcon}
                    alt="icono eliminar"
                    onClick={() => handleDelete(oneAlumn.email)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {isEditing && currentAlumna.email === oneAlumn.email && (
                  <div>
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={handleCancel}>Cancelar</button>
                  </div>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9">No hay alumnas disponibles.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

ItemAlumnas.propTypes = {
  alumnas: PropTypes.array,
  setAlumnas: PropTypes.func.isRequired
};

export default ItemAlumnas;
