import { Checkbox, FormControlLabel, Grid, Paper } from '@mui/material'
import React from 'react'
import SelectTextField from '../SelectTextField'





export default function PI_Box({ data }) {



    return (

        <Grid container rowSpacing={2}>
            <Grid paddingTop={1} item sm={12} >
                <Paper elevation={1} sx={{ p: 2 }}>
                    <p className='sectionTitle'>Parties Involved</p>
                    <Grid container spacing={2}  >
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="Customer" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="Customer Location" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="Shipper" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="Consianee" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="CHA" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="Sales Person" value="select" />
                        </Grid>
                        <Grid item sm={4}>
                            <SelectTextField data={data} labelText="Overseas Agent" value="select" />
                        </Grid>
                        <Grid item sm={8}>
                            <FormControlLabel control={<Checkbox size="small" />} label="Line BL Required" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item sm={12}>
                <Paper elevation={1} sx={{ p: 2 }}>
                    <p className='sectionTitle'>HAZ Details</p>
                    <Grid container spacing={2}  >
                        <Grid item sm={5}>
                            <SelectTextField data={data} labelText="IMO Class" value="select" />
                        </Grid>
                        <Grid item sm={5}>
                            <SelectTextField data={data} labelText="IMO UN Number" value="select" />
                        </Grid>
                        <Grid item sm={5}>
                            <SelectTextField data={data} labelText="Packing Group" value="select" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}
