import { Search } from '@mui/icons-material'
import { Grid, IconButton, InputAdornment, Paper, TextField} from '@mui/material'
import React from 'react'

export default function PortInfo({ port }) {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <p className='sectionTitle' style={{ textTransform: 'uppercase' }}>{port}</p>
      <Grid container spacing={2}  >
        <Grid item xs={5}>
          <TextField variant='standard' label="Vessel Voyage" size="small"
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
        <Grid item xs={7}>
          <TextField variant='filled' fullWidth label="Terminal" size="small" />
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
          <TextField type='date' variant='standard' label="E.T.A. at Destination" size='small' InputLabelProps={{ shrink: true }} />
        </Grid>
      </Grid>
    </Paper>
  )
}
