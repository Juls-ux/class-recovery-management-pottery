import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormRecuperar({ user }) {
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [mensaje, setMensaje] = useState("");

    const enviarSolicitud = async () => {
        if (!fechaSeleccionada) {
            alert("Por favor, selecciona una fecha y hora.");
            return;
        }

        if (!user || !user.email || !user.id_alumna || !user.id_clase) {
            setMensaje("No se proporcionaron los datos necesarios.");
            return;
        }

        // Extraer la hora de la fecha seleccionada
        const hora = fechaSeleccionada.toISOString().slice(11, 19); // Formato: HH:mm:ss
        const fechaFormateada = fechaSeleccionada.toISOString().slice(0, 19).replace("T", " "); // Formato: YYYY-MM-DD HH:mm:ss

        const requestBody = {
            email: user.email,
            fecha: fechaFormateada, // Enviar en formato correcto
            hora: hora, // Incluir la hora
            id_alumna: user.id_alumna, // Asegúrate de que id_alumna esté presente en el objeto user
            id_clase: user.id_clase, // Asegúrate de que id_clase esté presente en el objeto user
        };

        console.log("Cuerpo de la solicitud:", requestBody);

        try {
            const res = await fetch("http://localhost:3000/api/solicitudes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody),
            });

            const data = await res.json();
            if (data.success) {
                setMensaje("Solicitud enviada correctamente ✅");
            } else {
                setMensaje("Error al enviar la solicitud ❌");
            }
        } catch (error) {
            setMensaje("Error de conexión con el servidor ❌");
        }
    };

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


