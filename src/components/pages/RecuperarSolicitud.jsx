import React, { useEffect, useState } from "react";
import RecuperarTable from '../RecuperarTable';

function RecuperarSolicitud({ user }) {
    const [solicitudes, setSolicitudes] = useState([]);
    const [error, setError] = useState(null);

    const obtenerSolicitudes = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/solicitudes");
            const result = await res.json();
            if (result.success) {
                setSolicitudes(result.data); // Actualiza las solicitudes cuando se recibe la respuesta
            } else {
                setError(result.error || "Hubo un error al obtener las solicitudes.");
            }
        } catch (error) {
            setError("Error de conexión con el servidor.");
        }
    };

    // Llamar a obtenerSolicitudes cuando el componente se monte
    useEffect(() => {
        obtenerSolicitudes();
    }, []);

    // Función que se llama cuando una nueva solicitud se envía correctamente
    const handleNewSolicitud = () => {
        obtenerSolicitudes(); // Vuelve a cargar las solicitudes después de una nueva solicitud
    };

    return (
        <>
            <div className="title">
                <h1>📅 Solicitudes para recuperar clases</h1>
            </div>

            <section>
                {error && <p className="text">{error}</p>} {/* Muestra error si existe */}

                {solicitudes.length === 0 && !error ? (
                    <p>No hay solicitudes pendientes.</p>
                ) : (
                    <RecuperarTable solicitudes={solicitudes} handleNewSolicitud={handleNewSolicitud} /> // Pasa las solicitudes a la tabla
                )}
            </section>
        </>
    );
}

export default RecuperarSolicitud;
