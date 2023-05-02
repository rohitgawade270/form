import React, { useEffect, useState } from 'react'
import { Box, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import { Table } from 'react-bootstrap';
import BookingItems from '../components/BookingItems';

export default function BookingListPage() {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3031/bookings'
        }).then((response) => {
            setBooking(response.data)
        }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }, []);

    return (
        <>
            {
                booking.length > 0 ?
                    <Box sx={{ marginTop: 8 }}>
                        <Paper elevation={5} sx={{ p: 3 }}>
                            <h4>Booking Details</h4>
                            <p>Manage booking details</p>

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id</TableCell>
                                            <TableCell align="center">Booking Date</TableCell>
                                            <TableCell align="center">Booking Number</TableCell>
                                            <TableCell align="center">Delivery Mode</TableCell>
                                            <TableCell align="center"></TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {booking.map((booking) => (
                                         <BookingItems key={booking.id} booking={booking} />
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Paper>
                    </Box>
                    :
                    <></>
            }
        </>

    )
}
