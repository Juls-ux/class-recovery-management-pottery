import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate} from "react-router";


function FormAddAlum({alumnas, setAlumnas, handleSubmit, setNewAlumna,newAlumna,  handleCloseModal }) {
    const navigate = useNavigate();
  
    const [grupos, setGrupos] = useState([])
    const [errors, setErrors] = useState(null);

    console.log(grupos);
    
    useEffect(()=>{
        fetch('http://localhost:3000/api/grupos')
            .then(res => res.json())
            .then(data => {
                setGrupos(data.grupos);
            })
    },[])

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        console.log(`Cambiando ${name} a ${value}`); 
        setNewAlumna((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        
        //alert("Alumna añadida correctamente");

        if (newAlumna.contraseña !== newAlumna.confirmContraseña){
            setErrors('Las contraseñas no coinciden');
            return;
        }

        const grupoObj = grupos.find(g => g.dia === newAlumna.dia && g.horario === newAlumna.horario );

        if( !grupoObj ) {
            setErrors('No te inventes grupos que no hay');
            return;
        }

        const res = await fetch('http://localhost:3000/api/register',
            {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        ...newAlumna,
                        id_grupo: grupoObj.id
                    }) 
            }
        );
        const dataJson = await res.json();
        if ( !dataJson.success) {
            setErrors(dataJson.error)
        }
        else {
            // Ha ido todo bien
            setAlumnas(prevAlumnas => [...prevAlumnas, dataJson.user]);
        setNewAlumna({ nombre: "", 
            apellido: "", 
            email: "", 
            telefono: "", 
            dia: "", 
            contraseña:"",
            confirmContraseña:"",
            horario: "" });
            //navigate('/Home');
            handleCloseModal();
        }

    };

    const dias = [...new Set(grupos.map(obj => obj.dia))];
    const horario = [...new Set(grupos.filter(obj => obj.dia === newAlumna.dia).map(obj2 => obj2.horario))];

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

                <input className="addForm__input" type="password" name="contraseña" id="contraseña" placeholder="Contraseña"
                    value={newAlumna.contraseña} onChange={handleChange} required />  

                    <input className="addForm__input" type="password" name="confirmContraseña" id="confirmContraseña"  placeholder="Repite la contraseña"
                    value={newAlumna.confirmContraseña} onChange={handleChange} required />  
                    

           
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
            { errors && <p>{errors}</p>}
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
    handleCloseModal: PropTypes.func.isRequired
}
export default FormAddAlum;

