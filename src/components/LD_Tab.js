import React from "react";
import { Button } from "react-bootstrap";
import { Grid, Paper, TextField, Typography, Box, InputAdornment, IconButton } from '@mui/material'
import SelectTextField from "./SelectTextField";
import { Search } from "@mui/icons-material";

export default function LD_Tab() {

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
      <Button variant="success" className='fs-12' size='sm'>Save</Button>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 }}>Booking with Line</Typography>
              <Grid container paddingTop={1} spacing={2}  >
                <Grid item xs={4}>
                  <TextField variant='standard' label="Line Booking Number" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField variant='standard' label="Line Booking Date" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField variant='standard' label="Line Booking Validity" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField variant='standard' label="SI Cut-off Date" size="small" />
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth variant='standard' label="Service Contract Number" size="small" />
                </Grid>
                <Grid item xs={4}>
                <SelectTextField data={data} labelText="Pickup Point" value="select" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 }}>Vessel Information</Typography>
              <Grid container paddingTop={1} spacing={2}  >
                <Grid item xs={4}>
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
                <Grid item xs={8}>
                  <TextField variant='filled' fullWidth label="Terminal" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField variant='filled' label="Cut-off Date" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField variant='filled' label="E.T.A" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField variant='filled' label="E.T.D" size="small" />
                </Grid>
                <Grid item xs={6}>
                <TextField variant='standard' label="E.T.A. at Destination" size="small" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: 600 }}>Transhipment Ports</Typography>
              <Grid container paddingTop={1} spacing={2}  >
                <Grid item xs={6}>
                  <TextField variant='standard' label="Port 1" size="small"
                   InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                        <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  />
                </Grid>
                <Grid item xs={6}>
                <TextField variant='standard' label="Port 2" size="small"
                 InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                      <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                />
                </Grid>
                <Grid item xs={6} alignSelf='center'>
                  <TextField  variant='standard' label="Port 3" size="small"
                   InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                        <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  />
                </Grid>
              </Grid>
            </Paper>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
