import { Paper, TextField, Typography, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Button } from 'react-bootstrap'
import SelectTextField from './SelectTextField'
import PortInfo from './Route Update Tab/PortInfo'


export default function RU_Tab() {
  return (
    <>
      <Box>
      <Button variant="success" className='fs-12' size='sm'>Save</Button>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid lg={4} item>
            <PortInfo port='Port 1' />
          </Grid>
          <Grid lg={4} item>
            <PortInfo port='Port 2' />
          </Grid>
          <Grid lg={4} item>
            <PortInfo port='Port 3' />
          </Grid>
        </Grid>
      </Box >
    </>
  )
}
