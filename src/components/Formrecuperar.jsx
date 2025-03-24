import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormRecuperar({ user, fechaSeleccionada, setFechaSeleccionada, enviarSolicitud, mensaje, setMensaje }) {
    

    return (
        <div className="form-recuperar">
            <DatePicker
                selected={fechaSeleccionada}
                onChange={(date) => setFechaSeleccionada(date)}
                showTimeSelect
                dateFormat="Pp"
                timeFormat="HH:mm"
                timeIntervals={15}
                minDate={new Date()}
                className="border p-2 rounded"
                inline
            />

            <button className="grupos__add-btn" onClick={enviarSolicitud}>
                Enviar solicitud
            </button>

            {mensaje && <p className="mt-3 text-lg">{mensaje}</p>}
        </div>
    );
}

export default FormRecuperar;


