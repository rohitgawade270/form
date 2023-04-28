import { Box, Checkbox, FormControlLabel, Grid, MenuItem, Paper, Stack, TextField } from '@mui/material'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import React from 'react'
import data from '../db.json'
import {POL, POD,POR, FPD, MOT, ImoClass, ImoUnNumber, ParkingGroup, ContainerSize } from '../Utils/optionFieldData'


export default function GeneralInformationTab() {

    // const [generalInfo, setGeneralInfo] = useState({bookingOffice:'select',bookingNumber:'',bookingDate:'',deliveryMode:'select',stuffingType:'select',stuffingLocation:'select',bookingType:'select'});
    // const [partiesDetails,setPartiesDetails] = useState({customer: 'select', customerLocation: 'select', shipper: 'select', consianee: 'select', cha: 'select', salesPerson: 'select', overseasAgent: 'select'});
    // const [routeInfo, setRouteInfo] = useState({por:'select',pol:'select',pod:'select',fpd:'select',mot:'select'});
    // const [cargoInfo, setCargoInfo] = useState({ imoClass: 'select', imoUnNumber: 'select', parkingGroup: 'select', grossWeight: '', volume: ''});
    // const [hazDetails,setHazDetails] = useState({imoClass: 'select', imoUnNumber: 'select', parkingGroup: 'select'});
    // const [containerDetails,setContainerDetails] = useState({ sizeType: 'select', noOfContainers : ''});

    const { bookingOffice, deliveryMode, stuffingType, stuffingLocation , bookingType, customer, customerLocation, shipper,consianee,cha,salesPerson,overseasAgent,por } = data;

    return (
        <>

            <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>General Information</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Booking Office' variant="standard" fullWidth>
                                        {bookingOffice.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid alignSelf='end' item lg={4} sm={4} xs={6}>
                                    <TextField variant='standard' fullWidth label="Booking Number" id="bookingNumber" size="small" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField type='date' fullWidth variant='standard' id="bookingDate" label='Booking Date' size='small' InputLabelProps={{ shrink: true }} />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Delivery Mode' variant="standard" fullWidth>
                                        {deliveryMode.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Stuffing Type' variant="standard" fullWidth>
                                    {stuffingType.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Stuffing Location' variant="standard" fullWidth>
                                    {stuffingLocation.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Booking Type' variant="standard" fullWidth>
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
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>Parties Involved</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Customer' variant="standard" fullWidth>
                                         {customer.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField select label='Customer Location' variant="standard" fullWidth>
                                    {customerLocation.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="shipper" select label='Shipper' variant="standard" fullWidth>
                                    {shipper.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="consianee" select label='Consianee' variant="standard" fullWidth>
                                    {consianee.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="cha" select label='CHA' variant="standard" fullWidth>
                                    {cha.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="salesPerson"  select label='Sales Person' variant="standard" fullWidth>
                                    {salesPerson.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="overseasAgent" select label='Overseas Agent' variant="standard" fullWidth>
                                    {overseasAgent.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <FormControlLabel control={<Checkbox size="small" />} label="Line BL Required" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>Route Information</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="por" select label='POR' variant="standard" fullWidth>
                                    {POR.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="pol" defaultValue='select' select label='POL' variant="standard" fullWidth>
                                        {POL.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="pod" defaultValue='select' select label='POD' variant="standard" fullWidth>
                                        {POD.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="fpd" defaultValue='select' select label='FPD' variant="standard" fullWidth>
                                        {FPD.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="mot" defaultValue='select' select label='MOT' variant="standard" fullWidth>
                                        {MOT.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <FormControlLabel control={<Checkbox size="small" />} label="Multi-currency" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>Cargo Information</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="imoClass" defaultValue='select' select label='IMO Class' variant="standard" fullWidth>
                                        {ImoClass.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="imoUnNumber" defaultValue='select' select label='IMO UN Number' variant="standard" fullWidth>
                                        {ImoUnNumber.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="imoUnNum" select label='IMO UN Number' defaultValue='select' variant="standard" fullWidth>
                                        {ImoUnNumber.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="parkingGroup" defaultValue='select' select label='Parking Group' variant="standard" fullWidth>
                                        {ParkingGroup.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField variant='standard' name='grossWeight' fullWidth label="Gross Weight" size="small" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField variant='standard' name="volume" fullWidth label="Volume" size="small" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>HAZ Details</p>
                            <Grid container spacing={2}  >
                                <Grid item xs={4}>
                                    <TextField name="imoClass" defaultValue='select' select label='IMO Class' variant="standard" fullWidth>
                                        {ImoClass.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField name="imoUnNumber" defaultValue='select' select label='IMO UN Number' variant="standard" fullWidth>
                                        {ImoUnNumber.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField name="parkingGroup" defaultValue='select' select label='Parking Group' variant="standard" fullWidth>
                                        {ParkingGroup.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>Container Details</p>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <TextField name="sizeType" select label='Size Type' defaultValue='select' variant="standard" fullWidth>
                                        {ContainerSize.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
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
                    </Grid>
                </Grid>
            </Box >
            <Box sx={{ marginTop: 2 }}>
                <Stack direction='row' flexWrap='wrap' gap={1} >
                    {/* <Typography sx={{ fontWeight: 'bold' }}>Booking Type</Typography> */}
                    <DropdownButton id="export-btn" title="Export FCL" size="sm" variant='secondary'>
                        <Dropdown.Item className='fs-12' href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item className='fs-12' href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item className='fs-12' href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    {/* <Button onClick={postData} variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button> */}
                    <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save as New</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-x-square paddingRight bootstrapIcon" ></i>Cancel</Button>
                </Stack>
            </Box>
        </>
    )
}
