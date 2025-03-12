import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate} from "react-router";


function FormAddAlum({alumnas, setAlumnas, handleSubmit, setNewAlumna,newAlumna, gruposJson }) {
    const navigate = useNavigate();
  
    const handleChange = (ev) => {
        const { name, value } = ev.target;
        console.log(`Cambiando ${name} a ${value}`); 
        setNewAlumna((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        setAlumnas(prevAlumnas => [...prevAlumnas, newAlumna]);
        setNewAlumna({ nombre: "", 
            apellido: "", 
            email: "", 
            telefono: "", 
            dia: "", 
            contraseña:"",
            confirmContraseña:"",
            horario: "" });
        alert("Alumna añadida correctamente");

        if (data.contraseña !== data.contraseña2){
            setErrors('Las contraseñas no coinciden');
            return;
        }

        const res = await fetch('http://localhost:3000/api/register',
            {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        );
        const dataJson = await res.json();
        if ( !dataJson.sucess) {
            setEerrors(dataJson.error)
        }
        else {
            navigate('/Home');
        }

    };

    const dias = [...new Set(gruposJson.map(obj => obj.dia))];
    const horario = [...new Set(gruposJson.map(obj2 => obj2.horario))];

    return (
        <form className="addForm" onSubmit={handleFormSubmit}>
            <h2 className="addForm--title">Información nueva alumna</h2>

            <fieldset className="addForm__group">
                
                <input className="addForm__input" type="text" name="nombre" placeholder="Nombre de la alumna"
                    value={newAlumna.nombre} onChange={handleChange} required />
                
              
                <input className="addForm__input" type="text" name="apellido" placeholder="Apellido de la alumna"
                    value={newAlumna.apellido} onChange={handleChange} required />

                
                <input className="addForm__input" type="email" name="email" placeholder="E-mail"
                    value={newAlumna.email} onChange={handleChange} required />

                
                <input className="addForm__input" type="phone" name="telefono" placeholder="Teléfono"
                    value={newAlumna.telefono} onChange={handleChange} required />

                <input className="addForm__input" type="password" name="password" id="contraseña" placeholder="Contraseña"
                    value={newAlumna.contraseña} onChange={handleChange} required />  

                    <input className="addForm__input" type="confirmContraseña" name="confirmContraseña" id="contraseña2"  placeholder="Repite la contraseña"
                    value={newAlumna.contraseña2} onChange={handleChange} required />  
                    

           
                <input className="addForm__input" type="text" name="dia" placeholder="Día"
                    value={newAlumna.dia} autoComplete="off" list="dia-list" onChange={handleChange} required />
                    <datalist id="dia-list">
                        {dias.map(dia => <option key={dia} value={dia}></option>)}
                        
                    </datalist>

               
                <input className="addForm__input" type="text" name="horario" placeholder="Hora"
                    value={newAlumna.horario} autoComplete="off" list="horario-list" onChange={handleChange} required />
                <datalist id="horario-list">
                    {horario.map(horario => <option key={horario} value={horario}></option>)}

                </datalist>
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

