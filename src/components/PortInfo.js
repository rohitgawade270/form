import { Search } from '@mui/icons-material'
import { Grid, IconButton, InputAdornment, Paper, TextField } from '@mui/material'
import React from 'react'

export default function PortInfo() {
  return (
    <Paper elevation={1} sx={{ p: 1 }} >
      <p style={{ fontWeight: 'bold' }}>Container Details</p>
      <Grid container spacing={2}  >
        <Grid item lg={4} sm={4} xs={6}>
          <TextField variant='standard' label="Vessel Voyage" size="small" fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item lg={4} sm={4} xs={6}>
          <TextField variant='filled' fullWidth label="Terminal" size="small" />
        </Grid>
        <Grid item lg={4} sm={4} xs={6}>
          <TextField variant='filled' fullWidth label="Cut-off Date" size="small" />
        </Grid>
        <Grid item lg={4} sm={4} xs={6}>
          <TextField variant='filled' fullWidth label="E.T.A" size="small" />
        </Grid>
        <Grid item lg={4} sm={4} xs={6}>
          <TextField variant='filled' fullWidth disabled label="E.T.D" size="small" />
        </Grid>
        <Grid item lg={4} sm={4} xs={6}>
          <TextField type='date' fullWidth variant='standard' label="E.T.A. at Destination" size='small' InputLabelProps={{ shrink: true }} />
        </Grid>
      </Grid>
    </Paper>

  )
}
