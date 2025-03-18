
import React, { useEffect, useState } from "react";

function RecuperarSolicitud({user}) {
    const [solicitudes, setSolicitudes] = useState([]);
    const [error, setError] = useState(null); // Estado para manejar el error

    useEffect(() => {
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

        obtenerSolicitudes();
    }, []);

    return (
        <>
            <div className="title">
                <h1>📅  Solicitudes para recuperar clases</h1>
            </div>

            <section>
                {error && <p className="text">{error}</p>} {/* Mostrar error si existe */}

                {solicitudes.length === 0 && !error ? (
                    <p>No hay solicitudes pendientes.</p>
                ) : (
                    <ul>
                        {solicitudes.map((solicitud) => (
                            <li key={solicitud.id} className="border-b py-2">
                                <strong>{solicitud.email}</strong> - {new Date(solicitud.fecha).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
}

export default RecuperarSolicitud;