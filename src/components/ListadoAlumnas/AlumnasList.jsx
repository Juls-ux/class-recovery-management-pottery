
import PropTypes from 'prop-types';
import ItemAlumnas from "./ItemAlumnas";


function AlumnasList({ filteredAlumnas, handleDelete, setAlumnas }) {
    return (

        <>
            <ItemAlumnas alumnas={filteredAlumnas} setAlumnas={setAlumnas} handleDelete={handleDelete}/>        </>
    );
}

AlumnasList.propTypes = {
    alumnas: PropTypes.array,
    setAlumnas: PropTypes.func.isRequired
}
export default AlumnasList;