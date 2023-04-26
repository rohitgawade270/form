import { Box, Checkbox, FormControlLabel, Grid, MenuItem, Paper, Stack, TextField } from '@mui/material'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import React, { useContext } from 'react'
import BookingContext from '../context/BookingContext';
import { BookingOffice, BookingType, DeliveryMode, StuffingLocation, StuffingType, Customer, CustomerLocation, Shipper, Consianee, CHA, SalesPerson, OverseasAgent, POL, POD, POR, FPD, MOT, ImoClass, ImoUnNumber, ParkingGroup, ContainerSize } from '../Utils/optionFieldData'

export default function GeneralInformationTab() {

    const context = useContext(BookingContext);
    const { generalInfo, setGeneralInfo, partiesDetails, setPartiesDetails, routeInfo, setRouteInfo, cargoInfo, setCargoInfo, hazDetails, setHazDetails, containerDetails, setContainerDetails } = context;
    const { bookingOffice, bookingNumber, bookingDate, deliveryMode, stuffingType, stuffingLocation, bookingType } = generalInfo;
    const { customer, customerLocation, shipper, consianee, cha, salesPerson, overseasAgent } = partiesDetails;
    const { por, pol, pod, fpd, mot } = routeInfo;
    const { imoClass, imoUnNumber, parkingGroup, grossWeight, volume } = cargoInfo;
    const { sizeType, noOfContainers } = containerDetails;

    function handleGeneralInfo(event) {
        setGeneralInfo({ ...generalInfo, [event.target.name]: event.target.value });
    }

    function handlePartiesDetails(event) {
        setPartiesDetails({ ...partiesDetails, [event.target.name]: event.target.value });
    }

    function handleRouteInfo(event) {
        setRouteInfo({ ...routeInfo, [event.target.name]: event.target.value });
    }

    function handleCargoInfo(event) {
        setCargoInfo({ ...cargoInfo, [event.target.name]: event.target.value });
    }

    function handleHazDetails(event) {
        setHazDetails({ ...hazDetails, [event.target.name]: event.target.value });
    }

    function handlContainerDetails(event) {
        setContainerDetails({ ...containerDetails, [event.target.name]: event.target.value });
    }

 

   async function postData(){
    const data = {generalInformation:generalInfo,partiesInvolved:partiesDetails,routeInformation: routeInfo, cargoInformation :cargoInfo, hazDetails, containerDetails}
    const params = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body:JSON.stringify(data)
      }
      const fetchApi = await fetch("http://localhost:3031/booking",params);
      const jsonData = await fetchApi.json();
      console.log(jsonData)
    }


    return (
        <>

            <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>General Information</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="bookingOffice" onChange={handleGeneralInfo} select label='Booking Office' value={bookingOffice} variant="standard" fullWidth>
                                        {BookingOffice.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid alignSelf='end' item lg={4} sm={4} xs={6}>
                                    <TextField name="bookingNumber" value={bookingNumber} onChange={handleGeneralInfo} variant='standard' fullWidth label="Booking Number" id="bookingNumber" size="small" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField type='date' fullWidth variant='standard' value={bookingDate} onChange={handleGeneralInfo} name="bookingDate" id="bookingDate" label='Booking Date' size='small' InputLabelProps={{ shrink: true }} />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="deliveryMode" onChange={handleGeneralInfo} select label='Delivery Mode' value={deliveryMode} variant="standard" fullWidth>
                                        {DeliveryMode.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="stuffingType" onChange={handleGeneralInfo} select label='Stuffing Type' value={stuffingType} variant="standard" fullWidth>
                                        {StuffingType.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="stuffingLocation" onChange={handleGeneralInfo} select label='Stuffing Location' value={stuffingLocation} variant="standard" fullWidth>
                                        {StuffingLocation.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="bookingType" onChange={handleGeneralInfo} select label='Booking Type' value={bookingType} variant="standard" fullWidth>
                                        {BookingType.map((option) => (
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
                            <p style={{ fontWeight: 'bold' }}>Parties Involved</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="customer" onChange={handlePartiesDetails} select label='Customer' value={customer} variant="standard" fullWidth>
                                        {Customer.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="customerLocation" onChange={handlePartiesDetails} select label='Customer Location' value={customerLocation} variant="standard" fullWidth>
                                        {CustomerLocation.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="shipper" onChange={handlePartiesDetails} select label='Shipper' value={shipper} variant="standard" fullWidth>
                                        {Shipper.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="consianee" onChange={handlePartiesDetails} select label='Consianee' value={consianee} variant="standard" fullWidth>
                                        {Consianee.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="cha" onChange={handlePartiesDetails} select label='CHA' value={cha} variant="standard" fullWidth>
                                        {CHA.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="salesPerson" onChange={handlePartiesDetails} select label='Sales Person' value={salesPerson} variant="standard" fullWidth>
                                        {SalesPerson.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="overseasAgent" onChange={handlePartiesDetails} select label='Overseas Agent' value={overseasAgent} variant="standard" fullWidth>
                                        {OverseasAgent.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
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
                                    <TextField name="por" onChange={handleRouteInfo} select label='POR' value={por} variant="standard" fullWidth>
                                        {POR.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="pol" onChange={handleRouteInfo} select label='POL' value={pol} variant="standard" fullWidth>
                                        {POL.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="pod" onChange={handleRouteInfo} select label='POD' value={pod} variant="standard" fullWidth>
                                        {POD.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="fpd" onChange={handleRouteInfo} select label='FPD' value={fpd} variant="standard" fullWidth>
                                        {FPD.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="mot" onChange={handleRouteInfo} select label='MOT' value={mot} variant="standard" fullWidth>
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
                                    <TextField name="imoClass" onChange={handleCargoInfo} select label='IMO Class' value={imoClass} variant="standard" fullWidth>
                                        {ImoClass.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="imoUnNumber" onChange={handleCargoInfo} select label='IMO UN Number' value={imoUnNumber} variant="standard" fullWidth>
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
                                    <TextField name="parkingGroup" onChange={handleCargoInfo} select label='Parking Group' value={parkingGroup} variant="standard" fullWidth>
                                        {ParkingGroup.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField variant='standard' name='grossWeight' value={grossWeight} onChange={handleCargoInfo} fullWidth label="Gross Weight" size="small" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField variant='standard' name="volume" value={volume} onChange={handleCargoInfo} fullWidth label="Volume" size="small" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>HAZ Details</p>
                            <Grid container spacing={2}  >
                                <Grid item xs={4}>
                                    <TextField name="imoClass" onChange={handleHazDetails} select label='IMO Class' value={hazDetails.imoClass} variant="standard" fullWidth>
                                        {ImoClass.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField name="imoUnNumber" onChange={handleHazDetails} select label='IMO UN Number' value={hazDetails.imoUnNumber} variant="standard" fullWidth>
                                        {ImoUnNumber.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField name="parkingGroup" onChange={handleHazDetails} select label='Parking Group' value={hazDetails.parkingGroup} variant="standard" fullWidth>
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
                                    <TextField name="sizeType" onChange={handlContainerDetails} select label='Size Type' value={sizeType} variant="standard" fullWidth>
                                        {ContainerSize.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField name="noOfContainers" value={noOfContainers} onChange={handlContainerDetails} variant='standard' fullWidth label='Number of Containers' />
                                </Grid>
                                <Grid item alignSelf='end' xs={4}>
                                    <Button variant='primary' size='sm'>Add</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box >
            <Box sx={{ marginTop: 2 }}>
                <Stack direction='row' flexWrap='wrap' spacing={2}>
                    {/* <Typography sx={{ fontWeight: 'bold' }}>Booking Type</Typography> */}
                    <DropdownButton id="export-btn" title="Export FCL" size="sm" variant='secondary'>
                        <Dropdown.Item className='fs-12' href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item className='fs-12' href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item className='fs-12' href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Button onClick={postData} variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save as New</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-x-square paddingRight bootstrapIcon" ></i>Cancel</Button>
                </Stack>
            </Box>
        </>
    )
}
