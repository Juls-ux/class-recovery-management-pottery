
import PropTypes from "prop-types";


function FormAddAlum({alumnas, setAlumnas, handleSubmit, setNewAlumna, }) {

    const handleChange = (ev) => {
        const { nombre, value } = ev.target;
        setNewAlumna((prev) => ({ ...prev, [nombre]: value }));
    };

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        setAlumnas([...alumnas, newAlumna]); // Agrega la nueva alumna
        setNewAlumna({ nombre: "", email: "", telefono: "", dia: "", horario: "" }); // Limpia el formulario
    };

    return (
        <form className="addForm" onSubmit={handleFormSubmit}>

            <h2 className="addForm--title">Información nueva alumna</h2>

            <fieldset className="addForm__group">
                <label className="addFom__label">Nombre de la alumna</label>
                <input className="addForm__input" type="text" name="name" placeholder="Nombre de la alumna"
                    value={alumnas.nombre} onChange={handleChange}
                    required />

                <label className="addFom__label">E-Mail de la alumna</label>
                <input className="addForm__input" type="email" name="email" placeholder="E-mail"
                    value={alumnas.email} onChange={handleChange}
                    required />

                <label className="addFom__label">Teléfono de la alumna</label>
                <input className="addForm__input" type="phone" name="phone" placeholder="Teléfono"
                    value={alumnas.telefono} onChange={handleChange}
                    required />
                <label className="addFom__label">Día de la semana que viene  la alumna</label>
                <input className="addForm__input" type="day" name="day" placeholder="Día"
                    value={alumnas.dia} onChange={handleChange}
                    required />
                <label className="addFom__label">Horario de la alumna</label>
                <input className="addForm__input" type="time" name="time" placeholder="Hora"
                    value={alumnas.horario} onChange={handleChange}
                    required />

            </fieldset>

            <fieldset className="addForm__btn-group">
                <button className="button--large" onClick={handleSubmit}>Guardar Alumna</button>
       
            </fieldset>
        </form>
    );
};

FormAddAlum.propTypes = {
    alumnas: PropTypes.array.isRequired,
    setAlumnas: PropTypes.func.isRequired,
    newAlumna: PropTypes.object.isRequired,
    setNewAlumna: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
}
export default FormAddAlum;

