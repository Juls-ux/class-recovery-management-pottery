function Formrecuperar() {
    return (

        <>
        <form className="form-recuperar">
            <ul className="form-recuperar__ul">
                <li className="form-recuperar__li">
                    <select className="form-recuperar__select" name="dia"
                    >
                        <option value="" disabled selected>Selecciona un día</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miércoles">Miércoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                    </select>
                </li>
                <li className="form-recuperar__li">
                    <select className="form-recuperar__select" name="hora"
                    >
                    <option value="" disabled selected>Selecciona una hora</option>
                        <option value="17-19">17:00 - 19:00</option>

                        <option value="19-21">19:00 - 21:00</option>
                    </select>
                </li>
            </ul>
            <input className="form-recuperar__btn" type="
            send" value='Enviar' />
           
        </form>
        </>
    )
}

export default Formrecuperar;