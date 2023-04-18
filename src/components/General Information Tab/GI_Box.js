import { Grid, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import SelectTextField from '../SelectTextField'






export default function GI_Box({ data }) {



    return (

        <Grid container rowSpacing={2}>
            <Grid paddingTop={1} item xs={12} >
                <Paper elevation={0} sx={{ bgcolor: '#d2d2d2', p: 2 }}>
                    <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 }}>General Information</Typography>
                    <Grid container paddingTop={1} spacing={2}  >
                        <Grid item xs={4}>
                            <SelectTextField data={data} id="booking-office" labelText="Booking Office" value="select" />
                        </Grid>
                        <Grid alignSelf='end' item xs={4}>
                            <TextField variant='standard' label="Booking Number" id="booking-num" size="small" />
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel htmlFor="booking-date">Booking Date</InputLabel>
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
            <Paper elevation={0} sx={{ bgcolor: '#d2d2d2', p: 2 }}>
                    <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 }}>Cargo Information</Typography>
                    <Grid container paddingTop={1} spacing={2}  >
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
                            <TextField variant='standard' label="Gross Weight" size="small" />
                        </Grid>
                        <Grid item xs={4} alignSelf='end'>
                            <TextField variant='standard' label="Volume" size="small" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}
