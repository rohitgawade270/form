import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Button } from 'react-bootstrap'
import PortInfo from './PortInfo'


export default function RouteUpdateTab() {
  return (
    <>
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
      <Box sx={{marginTop:2}}>
      <Button variant="primary"  size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
      </Box>
    </>
  )
}
