import PropTypes from "prop-types";

function FormAddAlum({handleSubmit}) {


    return (
        <form className="addForm">
            <h2 className="title">Información nueva alumna</h2>

            <fieldset className="addForm__group">

                <input className="addForm__input" type="text" name="name" placeholder="Nombre de la alumna"
                    value="" />

                <input className="addForm__input" type="email" name="email" placeholder="E-mail"
                    value="" />

                <input className="addForm__input" type="phone" name="phone" placeholder="Teléfono"
                    value="" />

                <input className="addForm__input" type="day" name="day" placeholder="Día"
                    value="" />

                <input className="addForm__input" type="time" name="time" placeholder="Hora"
                    value="" />

            </fieldset>

            <fieldset className="addForm__group--upload">
                <button className="button--large" onClick={handleSubmit}>Guardar Alumna</button>
       
            </fieldset>
        </form>
    );
};


export default FormAddAlum;

