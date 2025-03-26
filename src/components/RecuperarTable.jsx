import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function EstadoSolicitud({solicitud, fetchSolicitud}) {



    const handleClickAprobar = (ev) => {
        fetchSolicitud(solicitud.id_clase, solicitud.id_alumna, '1');
    }

    const handleClickDenegar = () => {
        fetchSolicitud(solicitud.id_clase, solicitud.id_alumna, '0');
    }

    


    return <div style={{display: "flex", gap: "1rem"}}>
        <span>
            {solicitud.aprobada === 1 ? "✅ Aprobada" : solicitud.aprobada === 0 ? "❌ Denegada" : "Pendiente"}
        </span>
        <button onClick={handleClickAprobar}>Aprobar</button>
        <button onClick={handleClickDenegar}>Denegar</button>
        </div>;
}

function RecuperarTable({ solicitudes, fetchSolicitud }) {
    return (
     <TableContainer component={Paper} className="table-container">
     <Table>
         <TableHead>
             <TableRow className="table-header">
                 <TableCell>Nombre</TableCell>
                 <TableCell>Email</TableCell>
                 <TableCell>Día que viene</TableCell>
                 <TableCell>Fecha & Hora</TableCell>
                 <TableCell>Estado</TableCell>
             </TableRow>
         </TableHead>
         <TableBody>
             {solicitudes?.map((solicitud) => (
                 <TableRow key={solicitud.id_alumna+'-'+solicitud.id_clase+'-'+solicitud.fecha} className={solicitud.aprobada ? "aprobada" : solicitud.aprobada === 0 ? "denegada" : "pendiente"}>
                     <TableCell>{solicitud.id_alumna} - {solicitud.nombre}</TableCell>
                     <TableCell>{solicitud.email}</TableCell>
                     <TableCell>{solicitud.id_clase}</TableCell>
                     <TableCell>{new Date(solicitud.fecha).toLocaleString()}</TableCell>
                     <TableCell>
                        <EstadoSolicitud solicitud={solicitud} fetchSolicitud={fetchSolicitud} />
                     </TableCell>
                 </TableRow>
             ))}
         </TableBody>
     </Table>
 </TableContainer>
    );
}

export default RecuperarTable;
