import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function RecuperarTable({ solicitudes }) {
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
                 <TableRow key={solicitud.id} className={solicitud.aprobada ? "aprobada" : "denegada"}>
                     <TableCell>{solicitud.id_alumna} - {solicitud.nombre}</TableCell>
                     <TableCell>{solicitud.email}</TableCell>
                     <TableCell>{solicitud.id_clase}</TableCell>
                     <TableCell>{new Date(solicitud.fecha).toLocaleString()}</TableCell>
                     <TableCell>{solicitud.aprobada ? "✅ Aprobada" : "❌ Denegada"}</TableCell>
                 </TableRow>
             ))}
         </TableBody>
     </Table>
 </TableContainer>
    );
}

export default RecuperarTable;
