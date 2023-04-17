import { Box, Divider, Grid, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import { Button } from 'react-bootstrap'
import React from 'react'

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
            label: 'selct an option'
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
                    <Grid item >
                        <Typography sx={{ fontWeight: 600 }}>Booking Type</Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <TextField id="select-app" label='Export to FCL' defaultValue='' select size='small' fullWidth >
                            {app.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item lg={2}>
                        <Button variant="success" style={{ fontSize: '14px' }} className='w-100' size='md'>Save</Button>
                    </Grid>
                    <Grid item lg={2}>
                        <Button variant="success" style={{ fontSize: '14px' }} className='w-100' size='md'>Save as New</Button>
                    </Grid>
                    <Grid item lg={2}>
                        <Button variant="success" style={{ fontSize: '14px' }} className='w-100' size='md'>Cancel</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid lg={4} item>
                        <Grid container rowSpacing={2}>
                            <Grid item sm={12} >
                                <Box sx={{ bgcolor: '#d2d2d2', p: 1 }}>
                                    <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 }}>General Information</Typography>
                                    <Grid container sx={{ marginY: 1 }}>
                                        <Grid item sm={4}>
                                            <InputLabel htmlFor="booking-office">Booking Office</InputLabel>
                                            <TextField id="booking-office" defaultValue='select' select size='small' fullWidth >
                                                {data.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item sm={12}>
                                <Box sx={{ bgcolor: 'green', p: 5 }}></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid lg={4} item>
                        <Grid container rowSpacing={2}>
                            <Grid item sm={12}>
                                <Box sx={{ bgcolor: 'blue', p: 5 }}></Box>
                            </Grid>
                            <Grid item sm={12}>
                                <Box sx={{ bgcolor: 'green', p: 5 }}></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid lg={4} item>
                        <Grid container rowSpacing={2}>
                            <Grid item sm={12}>
                                <Box sx={{ bgcolor: 'blue', p: 5 }}></Box>
                            </Grid>
                            <Grid item sm={12}>
                                <Box sx={{ bgcolor: 'red', p: 5 }}></Box>
                            </Grid>
                            <Grid item sm={12}>
                                <Box sx={{ bgcolor: 'yellow', p: 5 }}></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}
