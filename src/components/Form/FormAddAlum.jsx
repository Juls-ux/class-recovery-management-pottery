
import PropTypes from "prop-types";


function FormAddAlum({alumnas, setAlumnas, handleSubmit, setNewAlumna,newAlumna }) {

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        console.log(`Cambiando ${name} a ${value}`); // Verifica qué campo está cambiando
        setNewAlumna((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        setAlumnas([...alumnas, newAlumna]); // Agrega la nueva alumna
        setNewAlumna({ nombre: "", email: "", telefono: "", dia: "", horario: "" }); // Limpia el formulario
        console.log('se ha agregado una aluman')
    };

    return (
        <form className="addForm" onSubmit={handleFormSubmit}>
            <h2 className="addForm--title">Información nueva alumna</h2>

            <fieldset className="addForm__group">
                <label className="addForm__label">Nombre de la alumna</label>
                <input className="addForm__input" type="text" name="nombre" placeholder="Nombre de la alumna"
                    value={newAlumna.nombre} onChange={handleChange} required />

                <label className="addForm__label">E-Mail de la alumna</label>
                <input className="addForm__input" type="email" name="email" placeholder="E-mail"
                    value={newAlumna.email} onChange={handleChange} required />

                <label className="addForm__label">Teléfono de la alumna</label>
                <input className="addForm__input" type="phone" name="telefono" placeholder="Teléfono"
                    value={newAlumna.telefono} onChange={handleChange} required />

                <label className="addForm__label">Día de la semana que viene la alumna</label>
                <input className="addForm__input" type="day" name="dia" placeholder="Día"
                    value={newAlumna.dia} onChange={handleChange} required />

                <label className="addForm__label">Horario de la alumna</label>
                <input className="addForm__input" type="time" name="horario" placeholder="Hora"
                    value={newAlumna.horario} onChange={handleChange} required />
            </fieldset>

            <fieldset className="addForm__btn-group">
                <button className="button--large" type="submit">Guardar Alumna</button>
            </fieldset>
        </form>
    );
};

FormAddAlum.propTypes = {
    alumnas: PropTypes.array.isRequired,
    setAlumnas: PropTypes.func.isRequired,
    newAlumna: PropTypes.object.isRequired,
    setNewAlumna: PropTypes.func.isRequired,
}
export default FormAddAlum;

