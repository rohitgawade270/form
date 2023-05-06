import React from 'react'
import { TableCell, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export default function BookingItems({ booking }) {
    const { id, bookingNumber, bookingDate, deliveryMode  } = booking;
    const date = new Date(bookingDate).toLocaleDateString();


    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {id}
            </TableCell>
            <TableCell align="center">{date}</TableCell>
            <TableCell align="center">{bookingNumber}</TableCell>
            <TableCell align="center">{deliveryMode}</TableCell>
            <TableCell align="center"><Typography component={Link} to={`/booking/${id}`} sx={{ color: 'black' }} ><i className="bi bi-pencil-square" ></i></Typography></TableCell>
            <TableCell align="center"><i className="bi bi-trash"></i></TableCell>
        </TableRow>
    )
}
