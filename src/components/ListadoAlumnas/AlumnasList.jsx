
import PropTypes from 'prop-types';
import ItemAlumnas from "./ItemAlumnas";


function AlumnasList({ filteredAlumnas }) {
    return (

        <>
            <ItemAlumnas alumnas={filteredAlumnas} />        </>
    );
}

AlumnasList.propTypes = {
    alumnas: PropTypes.array
}
export default AlumnasList;