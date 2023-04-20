import React from 'react';
import { Grid, Paper, TextField } from '@mui/material'
import SelectTextField from '../SelectTextField'

export default function GI_Box({ data }) {



    return (

        <Grid container rowSpacing={2}>
            <Grid item xs={12} >
                <Paper elevation={1} sx={{ p: 2 }}>
                    <p className='sectionTitle'>General Information</p>
                    <Grid container spacing={2}  >
                        <Grid item xs={4}>
                            <SelectTextField data={data} id="booking-office" labelText="Booking Office" value="select" />
                        </Grid>
                        <Grid alignSelf='end' item xs={4}>
                            <TextField variant='standard' fullWidth   label="Booking Number" id="booking-num" size="small" />
                        </Grid>
                        <Grid item xs={4} alignSelf='end'>
                            <TextField type='date' fullWidth variant='standard' label='Booking Date' size='small' InputLabelProps={{ shrink: true }} />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectTextField data={data} labelText="Delivery Mode" value="select" />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectTextField data={data} labelText="Stuffing Type" value="select" />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectTextField data={data} labelText="Stuffing Location" value="select" />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectTextField data={data} labelText="Booking Type" value="select" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={1} sx={{ p: 2 }}>
                    <p className='sectionTitle'>Cargo Information</p>
                    <Grid container spacing={2}  >
                        <Grid item xs={4}>
                            <SelectTextField data={data} labelText="IMO Class" value="select" />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectTextField data={data} labelText="IMO UN Number" value="select" />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectTextField data={data} labelText="IMO UN Number" value="select" />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectTextField data={data} labelText="Parking Group" value="select" />
                        </Grid>
                        <Grid item xs={4} alignSelf='end'>
                            <TextField variant='standard' fullWidth label="Gross Weight" size="small" />
                        </Grid>
                        <Grid item xs={4} alignSelf='end'>
                            <TextField variant='standard' fullWidth label="Volume" size="small" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}
