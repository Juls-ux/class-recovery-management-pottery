
import PropTypes from "prop-types";


function FormAddAlum({alumnas, setAlumnas, handleSubmit}) {



    return (
        <form className="addForm" onSubmit={(ev) => {
            ev.preventDefault();
            setAlumnas(prev => [...prev, alumna]); // Agrega la nueva alumna al array
        }}>

            <h2 className="addForm--title">Información nueva alumna</h2>

            <fieldset className="addForm__group">

                <input className="addForm__input" type="text" name="name" placeholder="Nombre de la alumna"
                    value={alumnas.nombre} onChange={(ev) => setAlumnas({ ...alumnas, nombre: ev.target.value })} />

                <input className="addForm__input" type="email" name="email" placeholder="E-mail"
                    value={alumnas.email} onChange={(ev) => setAlumnas({ ...alumnas, email: ev.target.value })} />

                <input className="addForm__input" type="phone" name="phone" placeholder="Teléfono"
                    value={alumnas.telefono} onChange={(ev) => setAlumnas({ ...alumnas, telefono: ev.target.value })}/>

                <input className="addForm__input" type="day" name="day" placeholder="Día"
                    value={alumnas.dia}onChange={(ev) => setAlumnas({ ...alumnas, dia: ev.target.value })} />

                <input className="addForm__input" type="time" name="time" placeholder="Hora"
                    value={alumnas.horario} onChange={(ev) => setAlumnas({ ...alumnas, horario: ev.target.value })}/>

            </fieldset>

            <fieldset className="addForm__btn-group">
                <button className="button--large" onClick={handleSubmit}>Guardar Alumna</button>
       
            </fieldset>
        </form>
    );
};

FormAddAlum.propTypes = {
    setAlumnas: PropTypes.func.isRequired,
    
 handleSubmit: PropTypes.func,
}
export default FormAddAlum;

