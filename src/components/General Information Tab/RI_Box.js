import { Checkbox, FormControlLabel, Grid, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import SelectTextField from '../SelectTextField'
import { Button } from 'react-bootstrap'





export default function RI_Box({ data }) {



    return (

        <Grid container rowSpacing={2}>
            <Grid paddingTop={1} item sm={12} >
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 }}>Route Information</Typography>
                    <Grid container paddingTop={1} spacing={2}  >
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="POR" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="POL" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="POD" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="FPD" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="MOT" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <FormControlLabel control={<Checkbox size="small" />} label="Multi-currency" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item sm={12}>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 }}>Container Details</Typography>
                    <Grid container paddingTop={1} spacing={2}  >
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="Size Type" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <TextField variant='standard' label='Number of Containers' />
                        </Grid>
                        <Grid item alignSelf='end' sm={4}>
                            <Button variant='success' className='fs-12' size='sm'>Add</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}
