import React from "react";
import { Button } from "react-bootstrap";
import { Grid, TextField, Box, InputAdornment, IconButton, Paper, MenuItem, Stack, } from '@mui/material'
import { Search } from "@mui/icons-material";
import { PickupPoint } from "../Utils/optionFieldData";

export default function LineDetailsTab() {

  return (

    <>
    <Stack sx={{direction:'column',minHeight:'382px',justifyContent:'space-between'}}>
    <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid lg={4} xs={12} item>
            <Paper elevation={1} sx={{ p: 1 }}>
              <p style={{ fontWeight: 'bold' }}>Booking with Line</p>
              <Grid container spacing={2}  >
                <Grid item lg={4} sm={4} xs={6}>
                  <TextField variant='standard' fullWidth label="Line Booking Number" size="small" />
                </Grid>
                <Grid item lg={4} sm={4} xs={6}>
                  <TextField type='date' variant='standard' fullWidth label='Line Booking Date' size='small' InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item lg={4} sm={4} xs={6}>
                  <TextField type='date' variant='standard' fullWidth label="Line Booking Validity" size='small' InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item lg={4} sm={4} xs={6}>
                  <TextField type='date' variant='standard' fullWidth label="SI Cut-off Date" size='small' InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item lg={4} sm={4} xs={6}>
                  <TextField fullWidth variant='standard' label="Service Contract Number" size="small" />
                </Grid>
                <Grid item lg={4} sm={4} xs={6}>
                  <TextField name="pickupPoint" select label='Pickup Point' defaultValue='select' variant="standard" fullWidth>
                    {PickupPoint.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid lg={4} xs={12} item>
            <Paper elevation={1} sx={{ p: 1 }}>
              <p style={{ fontWeight: 'bold' }}>Vessel Information</p>
              <Grid container spacing={2}  >
                <Grid item lg={4} sm={4} xs={6}>
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
                  <TextField variant='filled' fullWidth label="E.T.D" size="small" />
                </Grid>
                <Grid item lg={4} sm={4} xs={6}>
                  <TextField type='date' fullWidth variant='standard' label="E.T.A. at Destination" size='small' InputLabelProps={{ shrink: true }} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid lg={4} xs={12} item>
            <Paper elevation={1} sx={{ p: 1 }}>
              <p style={{ fontWeight: 'bold' }}>Transhipment Ports</p>
              <Grid container spacing={2}  >
                <Grid item sm={4} xs={6}>
                  <TextField variant='standard' label="Port 1" size="small" fullWidth
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
                <Grid item sm={4} xs={6}>
                  <TextField variant='standard' label="Port 2" size="small" fullWidth
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
                <Grid item sm={4} xs={6} alignSelf='center'>
                  <TextField variant='standard' label="Port 3" size="small" fullWidth
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
        </Grid>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
      </Box>
    </Stack>
 
      
    </>
  );
}
