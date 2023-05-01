import React from 'react'
import { TableCell, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function BookingItems({ booking }) {
    const { id, generalInformation: { bookingNumber, bookingDate , deliveryMode} } = booking;
    const date  = new Date(bookingDate).toLocaleDateString();
        // const [generalInfo, setGeneralInfo] = useState({bookingOffice:'select',bookingNumber:'',bookingDate:'',deliveryMode:'select',stuffingType:'select',stuffingLocation:'select',bookingType:'select'});
    // const [partiesDetails,setPartiesDetails] = useState({customer: 'select', customerLocation: 'select', shipper: 'select', consianee: 'select', cha: 'select', salesPerson: 'select', overseasAgent: 'select'});
    // const [routeInfo, setRouteInfo] = useState({por:'select',pol:'select',pod:'select',fpd:'select',mot:'select'});
    // const [cargoInfo, setCargoInfo] = useState({ imoClass: 'select', imoUnNumber: 'select', parkingGroup: 'select', grossWeight: '', volume: ''});
    // const [hazDetails,setHazDetails] = useState({imoClass: 'select', imoUnNumber: 'select', parkingGroup: 'select'});
    // const [containerDetails,setContainerDetails] = useState({ sizeType: 'select', noOfContainers : ''});


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
            <TableCell align="center"><Typography component={Link} to={`/booking/${id}`} sx={{color:'black'}} ><i className="bi bi-pencil-square" ></i></Typography></TableCell>
            <TableCell align="center"><i className="bi bi-trash"></i></TableCell>
        </TableRow>
    )
}
