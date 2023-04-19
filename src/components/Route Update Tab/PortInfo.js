import { Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

export default function PortInfo({port}) {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
    <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 , textTransform:'uppercase'}}>{port}</Typography>
    <Grid container paddingTop={1} spacing={2}  >
      <Grid item xs={4}>
        <TextField variant='standard' label="Vessel Voyage" size="small" />
      </Grid>
      <Grid item xs={6}>
        <TextField variant='filled' label="Terminal" size="small" />
      </Grid>
      <Grid item xs={4}>
        <TextField variant='filled' label="Cut-off Date" size="small" />
      </Grid>
      <Grid item xs={4}>
        <TextField variant='filled' label="E.T.A" size="small" />
      </Grid>
      <Grid item xs={4}>
        <TextField variant='filled' disabled label="E.T.D" size="small" />
      </Grid>
      <Grid item xs={4}>
        <TextField variant='standard' label="E.T.A at Destination" size="small" />
      </Grid>
    </Grid>
  </Paper>
  )
}
