import { Box, Divider, Grid, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import { Button } from 'react-bootstrap'
import React from 'react'
import SelectTextField from './SelectTextField';
import GI_Box from './General Information Tab/GI_Box';
import PI_Box from './General Information Tab/PI_Box';
import RI_Box from './General Information Tab/RI_Box';

export default function GI_Tab() {
    const app = [
        {
            value: 'FireQube',
            label: 'FireQube',
        },
        {
            value: 'Teravista',
            label: 'Teravista',
        }
    ];

    const data = [
        {
            value: 'select',
            label: 'select an option'
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
            <Box>
                <Grid container alignItems='center' spacing={2} >
                    <Grid item>
                        <Typography sx={{ fontWeight: 600 }}>Booking Type</Typography>
                    </Grid>
                    <Grid item md={2} xs={6}>
                        <TextField id="select-app" label='Export to FCL' defaultValue='' select size='small' fullWidth >
                            {app.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item md={2} >
                        <Button variant="success" style={{ fontSize: '14px' }} className='w-100' size='md'>Save</Button>
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="success" style={{ fontSize: '14px' }} className='w-100' size='md'>Save as New</Button>
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="success" style={{ fontSize: '14px' }} className='w-100' size='md'>Cancel</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid lg={4} item>
                        <GI_Box data={data} />
                    </Grid>
                    <Grid lg={4} item>
                       <PI_Box  data={data} />
                    </Grid>
                    <Grid lg={4} item>
                       <RI_Box data={data} />
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}
