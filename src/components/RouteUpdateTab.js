import React, { useState } from 'react'
import { Grid, IconButton, InputAdornment, Paper, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { Button } from 'react-bootstrap'
import { Search } from '@mui/icons-material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'
import axios from 'axios'


export default function RouteUpdateTab({ id, initialVal, lineDetails, generalInformation }) {

  const [portOne, setPortOne] = useState(initialVal.portOne)
  const [portTwo, setPortTwo] = useState(initialVal.portTwo)
  const [portThree, setPortThree] = useState(initialVal.portThree)

  const onPortOneDateValChange = (fieldName) => (value) => {
    setPortOne({ ...portOne, [fieldName]: value });
  }

  const onPortTwoDateValChange = (fieldName) => (value) => {
    setPortTwo({ ...portTwo, [fieldName]: value });
  }

  const onPortThreeDateValChange = (fieldName) => (value) => {
    setPortThree({ ...portThree, [fieldName]: value });
  }

  const onPortOneValChange = (e) => {
    setPortOne({ ...portOne, [e.target.name]: e.target.value });
  }

  const onPortTwoValChange = (e) => {
    setPortTwo({ ...portTwo, [e.target.name]: e.target.value });
  }

  const onPortThreeValChange = (e) => {
    setPortThree({ ...portThree, [e.target.name]: e.target.value });
  }

  const onPortOneSerch = () => {
    axios({
      method: 'get',
      url: `http://localhost:3031/routeInofo?vesselVoyage=${portOne.vesselVoyage}`
    }).then((response) => {
     const [{vesselVoyage,eta,etd,terminal,cutOffDate}] = response.data;
     setPortOne({...portOne,...{vesselVoyage,eta,etd,terminal,cutOffDate}});
    }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  const onPortTwoSerch = () => {
    axios({
      method: 'get',
      url: `http://localhost:3031/routeInofo?vesselVoyage=${portTwo.vesselVoyage}`
    }).then((response) => {
     const [{vesselVoyage,eta,etd,terminal,cutOffDate}] = response.data;
     setPortTwo({...portTwo,...{vesselVoyage,eta,etd,terminal,cutOffDate}});
    }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  const onPortThreeSerch = () => {
    axios({
      method: 'get',
      url: `http://localhost:3031/routeInofo?vesselVoyage=${portThree.vesselVoyage}`
    }).then((response) => {
     const [{vesselVoyage,eta,etd,terminal,cutOffDate}] = response.data;
     setPortThree({...portThree,...{vesselVoyage,eta,etd,terminal,cutOffDate}});
    }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }


  const saveData = () => {
    const data = { lineDetails, generalInformation, routeUpdate : {portOne,portTwo,portThree} }
    axios({
      method: 'patch',
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
      <Stack sx={{ direction: 'column', minHeight: '382px', justifyContent: 'space-between' }}>
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={2}>
            <Grid lg={4} item>
              <Paper elevation={1} sx={{ p: 1 }} >
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Port 1</p>
                <Grid container spacing={2}  >
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='standard' label="Vessel Voyage" size="small" fullWidth
                      value={portOne.vesselVoyage}
                      name="vesselVoyage"
                      onChange={(evt) => onPortOneValChange(evt)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={onPortOneSerch}>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small"
                      value={portOne.terminal}
                      name='terminal'
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Cut-off Date"
                        value={dayjs(portOne.cutOffDate)}
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
                      name="eta"
                      value={portOne.eta}
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small"
                      name="etd"
                      value={portOne.eta}
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="E.T.A. at Destination"
                        onChange={onPortOneDateValChange('etaAtDestination')}
                        value={dayjs(portOne.etaAtDestination)}
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
            <Grid lg={4} item>
              <Paper elevation={1} sx={{ p: 1 }} >
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Port 2</p>
                <Grid container spacing={2}  >
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='standard' label="Vessel Voyage" size="small" fullWidth
                      value={portTwo.vesselVoyage}
                      name="vesselVoyage"
                      onChange={(evt) => onPortTwoValChange(evt)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={onPortTwoSerch}>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small"
                      value={portTwo.terminal}
                      name='terminal'
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Cut-off Date"
                        value={dayjs(portTwo.cutOffDate)}
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
                      name="eta"
                      value={portTwo.eta}
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small"
                      name="etd"
                      value={portTwo.eta}
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="E.T.A. at Destination"
                        onChange={onPortTwoDateValChange('etaAtDestination')}
                        value={dayjs(portTwo.etaAtDestination)}
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
            <Grid lg={4} item>
              <Paper elevation={1} sx={{ p: 1 }} >
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Port 3</p>
                <Grid container spacing={2}  >
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='standard' label="Vessel Voyage" size="small" fullWidth
                      value={portThree.vesselVoyage}
                      name="vesselVoyage"
                      onChange={(evt) => onPortThreeValChange(evt)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={onPortThreeSerch}>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small"
                      value={portThree.terminal}
                      name='terminal'
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Cut-off Date"
                        value={dayjs(portThree.cutOffDate)}
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
                      name="eta"
                      value={portThree.eta}
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small"
                      name="etd"
                      value={portThree.eta}
                      readOnly
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="E.T.A. at Destination"
                        onChange={onPortThreeDateValChange('etaAtDestination')}
                        value={dayjs(portThree.etaAtDestination)}
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
          </Grid>
        </Box >
        <Box sx={{ marginTop: 2 }}>
          <Button onClick={saveData} variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
        </Box>
      </Stack>
    </>
  )
}
