import React, { useState } from 'react'
import { Box, Checkbox, FormControlLabel, Grid, MenuItem, Paper, Stack, TextField } from '@mui/material'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import data from '../db.json'
import axios from 'axios'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'


export default function GeneralInformationTab({ id, initialVal, routeUpdate, lineDetails }) {
    const [baseObj, setbaseObj] = useState(initialVal);


    const onDateValChange = (fieldName) => (value) => {
        setbaseObj({ ...baseObj, [fieldName]: value });
    }

    const onValChange = (e) => {
        if (e.target.type === 'checkbox')
            setbaseObj({ ...baseObj, [e.target.name]: e.target.checked === true ? 'Y' : 'N' });
        else
            setbaseObj({ ...baseObj, [e.target.name]: e.target.value });
    }

    const { imoClass, imoUnNumber, parkingGroup, pol, pod, fpd, mot, bookingOffice, deliveryMode, stuffingType, stuffingLocation, bookingType, customer, customerLocation, shipper, consianee, cha, salesPerson, overseasAgent, por } = data;
    // const {containerSizeType} = data;


    const saveData = () => {
        const data = { generalInformation: baseObj, lineDetails, routeUpdate }
        axios({
            method: 'put',
            url: `http://localhost:3031/bookings/${id}`,
            data: data
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }




    return (
        <>

            <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid item lg={4} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper elevation={1} sx={{ p: 1 }}>
                                    <p style={{ fontWeight: 'bold' }}>General Information</p>
                                    <Grid container spacing={2}  >
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select variant="standard" fullWidth
                                                value={baseObj.bookingOffice}
                                                name='bookingOffice'
                                                onChange={(evt) => onValChange(evt)}
                                                label='Booking Office' >
                                                {bookingOffice.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid alignSelf='end' item lg={4} sm={4} xs={6}>
                                            <TextField variant='standard' fullWidth size="small"
                                                value={baseObj.bookingNumber}
                                                label="Booking Number"
                                                name="bookingNumber"
                                                onChange={(evt) => onValChange(evt)}
                                            />
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                <DatePicker
                                                    label="Booking Date"
                                                    onChange={onDateValChange('bookingDate')}
                                                    value={dayjs(baseObj.bookingDate)}
                                                    name="bookingDate"
                                                    slotProps={{
                                                        textField: {
                                                            variant: 'standard',
                                                            fullWidth: true,
                                                            InputLabelProps: { shrink: true },
                                                        }
                                                    }}
                                                />
                                            </LocalizationProvider>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='Delivery Mode' variant="standard" fullWidth
                                                value={baseObj.deliveryMode}
                                                onChange={(evt) => onValChange(evt)}
                                                name='deliveryMode'
                                            >
                                                {deliveryMode.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='Stuffing Type' variant="standard" fullWidth
                                                value={baseObj.stuffingType}
                                                onChange={(evt) => onValChange(evt)}
                                                name='stuffingType'
                                            >
                                                {stuffingType.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='Stuffing Location' variant="standard" fullWidth
                                                value={baseObj.stuffingLocation}
                                                onChange={(evt) => onValChange(evt)}
                                                name='stuffingLocation'
                                            >
                                                {stuffingLocation.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='Booking Type' variant="standard" fullWidth
                                                value={baseObj.bookingType}
                                                onChange={(evt) => onValChange(evt)}
                                                name='bookingType'
                                            >
                                                {bookingType.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper elevation={1} sx={{ p: 1 }}>
                                    <p style={{ fontWeight: 'bold' }}>HAZ Details</p>
                                    <Grid container spacing={2}  >
                                        <Grid item xs={4}>
                                            <TextField select label='IMO Class' variant="standard" fullWidth
                                                value={baseObj.hazImoClass}
                                                onChange={(evt) => onValChange(evt)}
                                                name='hazImoClass'
                                            >
                                                {imoClass.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField select label='IMO UN Number' variant="standard" fullWidth
                                                value={baseObj.hazImoUnNumber}
                                                onChange={(evt) => onValChange(evt)}
                                                name='hazImoUnNumber'
                                            >
                                                {imoUnNumber.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField select label='Parking Group' variant="standard" fullWidth
                                                value={baseObj.hazParkingGroup}
                                                onChange={(evt) => onValChange(evt)}
                                                name='hazParkingGroup'
                                            >
                                                {parkingGroup.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>Parties Involved</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Customer' variant="standard" fullWidth
                                        value={baseObj.customer}
                                        onChange={(evt) => onValChange(evt)}
                                        name='customer'
                                    >
                                        {customer.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Customer Location' variant="standard" fullWidth
                                        value={baseObj.customerLocation}
                                        onChange={(evt) => onValChange(evt)}
                                        name='customerLocation'
                                    >
                                        {customerLocation.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Shipper' variant="standard" fullWidth
                                        value={baseObj.shipper}
                                        onChange={(evt) => onValChange(evt)}
                                        name='shipper'
                                    >
                                        {shipper.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Consianee' variant="standard" fullWidth
                                        value={baseObj.consianee}
                                        onChange={(evt) => onValChange(evt)}
                                        name='consianee'
                                    >
                                        {consianee.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='CHA' variant="standard" fullWidth
                                        value={baseObj.cha}
                                        onChange={(evt) => onValChange(evt)}
                                        name='cha'
                                    >
                                        {cha.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Sales Person' variant="standard" fullWidth
                                        value={baseObj.salesPerson}
                                        onChange={(evt) => onValChange(evt)}
                                        name='salesPerson'
                                    >
                                        {salesPerson.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Overseas Agent' variant="standard" fullWidth
                                        value={baseObj.overseasAgent}
                                        onChange={(evt) => onValChange(evt)}
                                        name='overseasAgent'
                                    >
                                        {overseasAgent.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <FormControlLabel
                                        control={<Checkbox checked={baseObj.lineBlRequired === 'Y'} size="small" />}
                                        label="Line BL Required"
                                        value={baseObj.lineBlRequired}
                                        onChange={(evt) => onValChange(evt)}
                                        name='lineBlRequired'
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Paper elevation={1} sx={{ p: 1 }}>
                                    <p style={{ fontWeight: 'bold' }}>Container Details</p>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <TextField name="sizeType" select label='Size Type' variant="standard" fullWidth>
                                                {containerSizeType.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField name="noOfContainers" variant='standard' fullWidth label='Number of Containers' />
                                        </Grid>
                                        <Grid item alignSelf='end' xs={4}>
                                            <Button variant='primary' size='sm'><i className="bi bi-plus-square paddingRight bootstrapIcon"></i>Add</Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid> */}
                        </Grid>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper elevation={1} sx={{ p: 1 }}>
                                    <p style={{ fontWeight: 'bold' }}>Route Information</p>
                                    <Grid container spacing={2}  >
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="por" select label='POR' variant="standard" fullWidth
                                                value={baseObj.por}
                                                onChange={(evt) => onValChange(evt)}
                                            >
                                                {por.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="pol" defaultValue='select' select label='POL' variant="standard" fullWidth
                                                value={baseObj.pol}
                                                onChange={(evt) => onValChange(evt)} >
                                                {pol.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="pod" defaultValue='select' select label='POD' variant="standard" fullWidth
                                                value={baseObj.pod}
                                                onChange={(evt) => onValChange(evt)} >
                                                {pod.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="fpd" defaultValue='select' select label='FPD' variant="standard" fullWidth
                                                value={baseObj.fpd}
                                                onChange={(evt) => onValChange(evt)}
                                            >
                                                {fpd.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="mot" defaultValue='select' select label='MOT' variant="standard" fullWidth
                                                value={baseObj.mot}
                                                onChange={(evt) => onValChange(evt)}
                                            >
                                                {mot.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <FormControlLabel
                                                control={<Checkbox checked={baseObj.multiCurrency === 'Y'} size="small" />}
                                                label="Multi-currency"
                                                onChange={(evt) => onValChange(evt)}
                                                name="multiCurrency"
                                            />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper elevation={1} sx={{ p: 1 }}>
                                    <p style={{ fontWeight: 'bold' }}>Cargo Information</p>
                                    <Grid container spacing={2}  >
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='IMO Class' variant="standard" fullWidth
                                                value={baseObj.cargoImoClass}
                                                onChange={(evt) => onValChange(evt)}
                                                name='cargoImoClass'
                                            >
                                                {imoClass.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='IMO UN Number' variant="standard" fullWidth
                                                value={baseObj.cargoImoUnNumber}
                                                onChange={(evt) => onValChange(evt)}
                                                name='cargoImoUnNumber'
                                            >
                                                {imoUnNumber.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        {/* <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="imoUnNum" select label='IMO UN Number' variant="standard" fullWidth>
                                        {imoUnNumber.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid> */}
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="cargoParkingGroup" select label='Parking Group' variant="standard" fullWidth
                                                value={baseObj.cargoParkingGroup}
                                                onChange={(evt) => onValChange(evt)}
                                            >
                                                {parkingGroup.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                            <TextField variant='standard' fullWidth label="Gross Weight" size="small"
                                                value={baseObj.grossWeight}
                                                name='grossWeight'
                                                onChange={(evt) => onValChange(evt)}
                                            />
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                            <TextField variant='standard' fullWidth label="Volume" size="small"
                                                name="volume"
                                                value={baseObj.volume}
                                                onChange={(evt) => onValChange(evt)}
                                            />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box >
            <Box sx={{ marginTop: 2 }}>
                <Stack direction='row' flexWrap='wrap' gap={1} >
                    <DropdownButton id="export-btn" title="Export FCL" size="sm" variant='secondary'>
                        <Dropdown.Item className='fs-12' href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item className='fs-12' href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item className='fs-12' href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="primary" size='sm' onClick={saveData} >  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save as New</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-x-square paddingRight bootstrapIcon" ></i>Cancel</Button>
                </Stack>
            </Box>
        </>
    )
}
