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
                setSolicitudes(result.data);
            } else {
                setError(result.error || "Hubo un error al obtener las solicitudes.");
            }
        } catch (error) {
            setError("Error de conexión con el servidor.");
        }
    };

    // Fetch solicitudes when the component mounts
    useEffect(() => {
        obtenerSolicitudes();
    }, []);

    // Function to handle successful submission of a new solicitud from FormRecuperar
    const handleNewSolicitud = () => {
        // Re-fetch the solicitudes after a new one has been submitted
        obtenerSolicitudes();
    };

    return (
        <>
            <div className="title">
                <h1>📅 Solicitudes para recuperar clases</h1>
            </div>

        
        <section>
                {error && <p className="text">{error}</p>} {/* Show error if exists */}

                {solicitudes.length === 0 && !error ? (
                    <p>No hay solicitudes pendientes.</p>
                ) : (
                    <RecuperarTable solicitudes={solicitudes} />
                )}

            </section>
        </>
    );
}

export default RecuperarSolicitud;

