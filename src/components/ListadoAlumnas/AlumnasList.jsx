
import PropTypes from 'prop-types';
import ItemAlumnas from "./ItemAlumnas";


function AlumnasList({ alumnas = [] }) {  // 👈 Valor por defecto
    return (

        <>
        <ItemAlumnas alumnas={alumnas}/>
        </>
    );
  }

  AlumnasList.propTypes = {
    alumnas: PropTypes.array
}
  export default AlumnasList;