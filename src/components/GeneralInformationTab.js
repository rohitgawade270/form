import { Box, Checkbox, FormControlLabel, Grid, Paper, Stack, TextField } from '@mui/material'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import React from 'react'
import SelectTextField from './SelectTextField';

export default function GeneralInformationTab() {


    const data = [
        {
            value: 'select',
            label: 'select'
        },
        {
            value: 'FireQube',
            label: 'FireQube',
        },
        {
            value: 'Teravista',
            label: 'Teravista',
        }
    ]

    return (
        <>

            <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>General Information</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth id="bookingOffice" labelText="Booking Office" value="select" />
                                </Grid>
                                <Grid alignSelf='end' item lg={4} sm={4} xs={6}>
                                    <TextField variant='standard' fullWidth label="Booking Number" id="bookingNumber" size="small" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField type='date' fullWidth variant='standard' id="bookingDate" label='Booking Date' size='small' InputLabelProps={{ shrink: true }} />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth id="deliveryMode" labelText="Delivery Mode" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth id="stuffingType" labelText="Stuffing Type" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth id="stuffingLocation" labelText="Stuffing Location" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth id="bookingType"  labelText="Booking Type" value="select" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>Parties Involved</p>
                            <Grid container spacing={2}  >
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth labelText="Customer" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth labelText="Customer Location" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth labelText="Shipper" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth labelText="Consianee" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth labelText="CHA" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth labelText="Sales Person" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} fullWidth labelText="Overseas Agent" value="select" />
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
                                    <SelectTextField fullWidth data={data} labelText="POR" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField fullWidth data={data} labelText="POL" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField fullWidth data={data} labelText="POD" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField fullWidth data={data} labelText="FPD" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField fullWidth data={data} labelText="MOT" value="select" />
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
                                    <SelectTextField data={data} labelText="IMO Class" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} labelText="IMO UN Number" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} labelText="IMO UN Number" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6}>
                                    <SelectTextField data={data} labelText="Parking Group" value="select" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField variant='standard' fullWidth label="Gross Weight" size="small" />
                                </Grid>
                                <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                    <TextField variant='standard' fullWidth label="Volume" size="small" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>HAZ Details</p>
                            <Grid container spacing={2}  >
                                <Grid item xs={4}>
                                    <SelectTextField data={data} labelText="IMO Class" value="select" />
                                </Grid>
                                <Grid item xs={4}>
                                    <SelectTextField data={data} labelText="IMO UN Number" value="select" />
                                </Grid>
                                <Grid item xs={4}>
                                    <SelectTextField data={data} labelText="Packing Group" value="select" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                            <p style={{ fontWeight: 'bold' }}>Container Details</p>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <SelectTextField data={data} labelText="Size Type" value="select" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField variant='standard' fullWidth label='Number of Containers' />
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
                    <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save as New</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-x-square paddingRight bootstrapIcon" ></i>Cancel</Button>
                </Stack>
            </Box>
        </>
    )
}
