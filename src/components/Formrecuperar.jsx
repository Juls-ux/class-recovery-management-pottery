
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function FormRecuperar() {
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [mensaje, setMensaje] = useState("");
  
    const enviarSolicitud = async () => {
      if (!fechaSeleccionada) {
        alert("Por favor, selecciona una fecha y hora.");
        return;
      }
  
      const requestBody = {
        email: "usuario@example.com", // Reemplázalo con el email de la usuaria autenticada
        fecha: fechaSeleccionada.toISOString(),
      };
  
      try {
        const res = await fetch("http://localhost:3000/api/recuperar-clase", {
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
        <h2 className="text-xl font-bold mb-2">Recupera una clase</h2>
        
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
        
        <button
          className="grupos__add-btn"
          onClick={enviarSolicitud}
        >
          Enviar solicitud
        </button>
  
        {mensaje && <p className="mt-3 text-lg">{mensaje}</p>}
      </div>
    );
  };
  
  export default FormRecuperar;