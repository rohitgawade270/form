import React from "react";
import { Button } from "react-bootstrap";
import { Grid, Paper, TextField,  Box, InputAdornment, IconButton } from '@mui/material'
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
      <Box sx={{ marginTop: 2, fontFamily:'poppins' }}>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Paper elevation={1} sx={{ p: 2 }}>
              <p className='sectionTitle'>Booking with Line</p>
              <Grid container spacing={2}  >
                <Grid item xs={4}>
                  <TextField variant='standard' fullWidth label="Line Booking Number" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField type='date' variant='standard' fullWidth label='Line Booking Date' size='small' InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={4}>
                  <TextField type='date' variant='standard' fullWidth label="Line Booking Validity" size='small' InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={4}>
                  <TextField type='date' variant='standard' fullWidth label="SI Cut-off Date" size='small' InputLabelProps={{ shrink: true }} />
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
            <Paper elevation={1} sx={{ p: 2 }}>
              <p className='sectionTitle'>Vessel Information</p>
              <Grid container spacing={2}  >
                <Grid item xs={5}>
                  <TextField variant='standard' fullWidth label="Vessel Voyage" size="small"
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
                  <TextField variant='filled' label="E.T.D" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField type='date' fullWidth variant='standard' label="E.T.A. at Destination" size='small' InputLabelProps={{ shrink: true }} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={1} sx={{ p: 2 }}>
                  <p className='sectionTitle'>Transhipment Ports</p>
                  <Grid container spacing={2}  >
                    <Grid item xs={4}>
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
                    <Grid item xs={4}>
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
                    <Grid item xs={4} alignSelf='center'>
                      <TextField variant='standard' label="Port 3" size="small"
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
