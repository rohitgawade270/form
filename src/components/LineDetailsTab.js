import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Grid, TextField, Box, InputAdornment, IconButton, Paper, MenuItem, Stack} from '@mui/material'
import { Search } from "@mui/icons-material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'
import data from '../db.json'
import axios from "axios";


export default function LineDetailsTab({ id, initialVal, routeUpdate, generalInformation }) {

  const [baseObj, setbaseObj] = useState(initialVal);
  // const { containerDetails } = generalInformation;

  const onDateValChange = (fieldName) => (value) => {
    setbaseObj({ ...baseObj, [fieldName]: value });
  }

  const onValChange = (e) => {
    if (e.target.type === 'checkbox')
      setbaseObj({ ...baseObj, [e.target.name]: e.target.checked === true ? 'Y' : 'N' });
    else
      setbaseObj({ ...baseObj, [e.target.name]: e.target.value });
  }

  const { pickupPoint } = data;



  const saveData = () => {
    const data = { lineDetails: baseObj, generalInformation, routeUpdate }
    axios({
      method: 'put',
      url: `http://localhost:3031/bookings/${id}`,
      data: data
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (

    <>
      <Stack sx={{ direction: 'column',minHeight:"382px",  justifyContent: 'space-between'}}>
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={2}>
            <Grid lg={4} xs={12} item>
              <Paper elevation={1} sx={{ p: 1 }}>
                <p style={{ fontWeight: 'bold' }}>Booking with Line</p>
                <Grid container spacing={2}  >
                  <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                    <TextField variant='standard' fullWidth label="Line Booking Number" size="small"
                      value={baseObj.lineBookingNumber}
                      name="lineBookingNumber"
                      onChange={(evt) => onValChange(evt)}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Line Booking Date"
                        onChange={onDateValChange('lineBookingDate')}
                        value={dayjs(baseObj.lineBookingDate)}
                        name="lineBookingDate"
                        slotProps={{
                          textField: {
                            variant: 'standard',
                            fullWidth: true,
                            InputLabelProps: { shrink: true },
                          }
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Line Booking Validity"
                        onChange={onDateValChange('lineBookingValidity')}
                        value={dayjs(baseObj.lineBookingValidity)}
                        name="lineBookingValidity"
                        slotProps={{
                          textField: {
                            variant: 'standard',
                            fullWidth: true,
                            InputLabelProps: { shrink: true },
                          }
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="SI cut-off Date"
                        onChange={onDateValChange('siCutOffDate')}
                        value={dayjs(baseObj.siCutOffDate)}
                        name="siCutOffDate"
                        slotProps={{
                          textField: {
                            variant: 'standard',
                            fullWidth: true,
                            InputLabelProps: { shrink: true },
                          }
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                    <TextField fullWidth variant='standard' label="Service Contract Number" size="small"
                      value={baseObj.serviceContractNumber}
                      name="serviceContractNumber"
                      onChange={(evt) => onValChange(evt)}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField select label='Pickup Point' variant="standard" fullWidth
                      value={baseObj.pickupPoint}
                      name='pickupPoint'
                      onChange={(evt) => onValChange(evt)}
                    >
                      {pickupPoint.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
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
                  <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                    <TextField variant='standard' label="Vessel Voyage" size="small" fullWidth
                      value={baseObj.vesselVoyage}
                      name="vesselVoyage"
                      onChange={(evt) => onValChange(evt)}
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
                  <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                    <TextField variant='filled' fullWidth label="Terminal" size="small"
                      value={baseObj.terminal}
                      name="terminal"
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Cut-off Date"
                        value={dayjs(baseObj.cutOffDate)}
                        name="cutOffDate"
                        readOnly
                        slotProps={{
                          textField: {
                            variant: 'filled',
                            fullWidth: true,
                            InputLabelProps: { shrink: true },
                          }
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.A" size="small"
                      value={baseObj.eta}
                      name="eta"
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small"
                      value={baseObj.etd}
                      name="etd"
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="E.T.A. at Destination"
                        onChange={onDateValChange('etaAtDestination')}
                        value={dayjs(baseObj.etaAtDestination)}
                        name="etaAtDestination"
                        slotProps={{
                          textField: {
                            variant: 'standard',
                            fullWidth: true,
                            InputLabelProps: { shrink: true },
                          }
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid lg={4} xs={12} item>
              <Paper elevation={1} sx={{ p: 1 }}>
                <p style={{ fontWeight: 'bold' }}>Transhipment Ports</p>
                <Grid container spacing={2}  >
                  <Grid item sm={4} xs={6}>
                    <TextField name="portOne" variant='standard' label="Port 1" size="small" fullWidth
                      value={baseObj.portOne}
                      onChange={(evt) => onValChange(evt)}
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
                      value={baseObj.portTwo}
                      onChange={(evt) => onValChange(evt)}
                      name="portTwo"
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
                      value={baseObj.portThree}
                      onChange={(evt) => onValChange(evt)}
                      name="portThree"
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
          <Button onClick={saveData} variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
        </Box>
      </Stack>


    </>
  );
}
