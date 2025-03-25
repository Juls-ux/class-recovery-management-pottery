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
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nomnbre</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Día que viene</TableCell>
                        <TableCell>Fecha & hora que quiere recuperar</TableCell>
                        <TableCell>Aprobada/Denegada</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {solicitudes?.map((solicitud) => (
                        <TableRow key={solicitud.id}>
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
