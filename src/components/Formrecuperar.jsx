import React, { useMemo, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Holidays from "date-holidays";

function FormRecuperar({ fechaSeleccionada, setFechaSeleccionada, enviarSolicitud, mensaje }) {
    const [festivos, setFestivos] = useState([]);

    // ✅ Automatiza los festivos con la librería Holidays
    useEffect(() => {
        const hd = new Holidays("ES", "CT"); // 🇪🇸 España, Cataluña (ajustá tu región)
        const year = new Date().getFullYear();
        const feriados = hd.getHolidays(year).map((h) => new Date(h.date));
        setFestivos(feriados);
    }, []);

    // ✅ Solo permite 3 bloques exactos: 12–14, 17–19, 19–21
    const bloquesPermitidos = useMemo(() => {
        const hoy = new Date();
        const baseDate = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());

        const bloques = [12, 17, 19]; // horas de inicio

        return bloques.map((h) => {
            const fecha = new Date(baseDate);
            fecha.setHours(h, 0, 0, 0);
            return fecha;
        });
    }, []);

    // 🔴 Función para mostrar festivos en rojo
    const esFestivo = (date) =>
        festivos.some((f) => f.toDateString() === date.toDateString());

    // 🔒 Función para filtrar solo los horarios válidos
    const filterHours = (time) => {
        const validHours = [12, 17, 19]; // Horas permitidas: 12, 17, 19
        const hour = time.getHours();
        const minute = time.getMinutes();

        // Filtra solo las horas completas en esos bloques (sin minutos intermedios)
        if (validHours.includes(hour) && (minute === 0 || minute === 15 || minute === 30 || minute === 45)) {
            return true;
        }
        return false;
    };

    return (
        <div className="form-recuperar">
            <DatePicker
                selected={fechaSeleccionada}
                onChange={(date) => setFechaSeleccionada(date)}
                showTimeSelect
                includeTimes={bloquesPermitidos} // Muestra solo los bloques de tiempo disponibles
                dateFormat="Pp"
                timeFormat="HH:mm"
                timeIntervals={15} // Intervalo de 15 minutos
                minDate={new Date()}
                excludeDates={festivos} // Bloquea los días festivos
                dayClassName={(date) => esFestivo(date) ? "react-datepicker__day--festivo" : undefined}
                filterTime={filterHours} // Filtra solo los bloques de horas válidos
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
