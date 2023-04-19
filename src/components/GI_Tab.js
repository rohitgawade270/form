import { Box, Grid, Typography } from '@mui/material'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import React from 'react'
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
                    <Grid item >
                        <DropdownButton style={{ fontSize: '12px' }} id="export-btn" title="Export FCL" size="sm" variant='secondary'>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </Grid>
                    <Grid item  >
                        <Button variant="success" className='fs-12' size='sm'>Save</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="success" className='fs-12' size='sm'>Save as New</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="success" className='fs-12' size='sm'>Cancel</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid lg={4} item>
                        <GI_Box data={data} />
                    </Grid>
                    <Grid lg={4} item>
                        <PI_Box data={data} />
                    </Grid>
                    <Grid lg={4} item>
                        <RI_Box data={data} />
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}
