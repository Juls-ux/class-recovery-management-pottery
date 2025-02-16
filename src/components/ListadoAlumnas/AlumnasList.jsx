
import ItemAlumnas from "./ItemAlumnas";


function AlumnasList({ alumnas = [] }) {  // 👈 Valor por defecto
    return (

        <>
        <ItemAlumnas alumnas={alumnas}/>
        </>
    );
  }

  export default AlumnasList;