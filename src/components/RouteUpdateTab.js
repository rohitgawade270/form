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


export default function RouteUpdateTab({ id, initialVal }) {


  const [baseObj, setbaseObj] = useState(initialVal);

  const onPortSerch = (portNumber) => {
    const portName = `port${portNumber}`;
    const vesselVoyageProp = `${portName}VesselVoyage`;
    const etaProp = `${portName}ETA`;
    const etdProp = `${portName}ETD`;
    const terminalProp = `${portName}Terminal`;
    const cutOffDateProp = `${portName}CutOffDate`;
    axios({
      method: 'get',
      url: `http://localhost:3031/routeInofo?vesselVoyage=${baseObj[vesselVoyageProp]}`
    }).then((response) => {
      const [{ vesselVoyage, eta, etd, terminal, cutOffDate }] = response.data;
      setbaseObj({
        ...baseObj, ...{
          [vesselVoyageProp]: vesselVoyage,
          [etaProp]: eta,
          [etdProp]: etd,
          [terminalProp]: terminal,
          [cutOffDateProp]: cutOffDate
        }
      });
    }).catch((error) => {
      console.log(error);
    });
  };



  const onDateValChange = (fieldName) => (value) => {
    setbaseObj({ ...baseObj, [fieldName]: value });
  }

  const onValChange = (e) => {
    if (e.target.type === 'checkbox')
      setbaseObj({ ...baseObj, [e.target.name]: e.target.checked === true ? 'Y' : 'N' });
    else
      setbaseObj({ ...baseObj, [e.target.name]: e.target.value });
  }



  const saveData = () => {
    axios({
      method: 'put',
      url: `http://localhost:3031/bookings/${id}`,
      data: baseObj
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }


  return (
    <>
      <Stack sx={{ direction: 'column', minHeight: "465px", justifyContent: 'space-between' }}>
        <Box>
          <Grid container spacing={2}>
            <Grid lg={4} item>
              <Paper elevation={1} sx={{ p: 1 }} >
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Port 1</p>
                <Grid container spacing={2}  >
                  <Grid item xs={6}>
                    <TextField variant='standard' label="Vessel Voyage" size="small" fullWidth
                      value={baseObj.portOneVesselVoyage}
                      name='portOneVesselVoyage'
                      onChange={(evt) => onValChange(evt)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => onPortSerch('One')}>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small"
                      value={baseObj.portOneTerminal}
                      name='portOneTerminal'
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Cut-off Date"
                        value={dayjs(baseObj.portOneCutOffDate)}
                        name="portOneCutOffDate"
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
                  <Grid item xs={6} alignSelf='end'>
                    <TextField variant='filled' fullWidth label="E.T.A" size="small"
                      name="portOneETA"
                      value={baseObj.portOneETA}
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small"
                      name="portOneETD"
                      value={baseObj.portOneETD}
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="E.T.A. at Destination"
                        onChange={onDateValChange('portOneEtaAtDestination')}
                        value={dayjs(baseObj.portOneEtaAtDestination)}
                        name="portOneEtaAtDestination"
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
                  <Grid item xs={6}>
                    <TextField variant='standard' label="Vessel Voyage" size="small" fullWidth
                      value={baseObj.portTwoVesselVoyage}
                      name='portTwoVesselVoyage'
                      onChange={(evt) => onValChange(evt)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => onPortSerch('Two')}>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small"
                      value={baseObj.portTwoTerminal}
                      name='portTwoTerminal'
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Cut-off Date"
                        value={dayjs(baseObj.portTwoCutOffDate)}
                        name="portTwoCutOffDate"
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
                  <Grid item xs={6} alignSelf='end'>
                    <TextField variant='filled' fullWidth label="E.T.A" size="small"
                      name="portTwoETA"
                      value={baseObj.portTwoETA}
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small"
                      name="portTwoETD"
                      value={baseObj.portTwoETD}
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="E.T.A. at Destination"
                        onChange={onDateValChange('portTwoEtaAtDestination')}
                        value={dayjs(baseObj.portTwoEtaAtDestination)}
                        name="portTwoEtaAtDestination"
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
                  <Grid item xs={6}>
                    <TextField variant='standard' label="Vessel Voyage" size="small" fullWidth
                      value={baseObj.portThreeVesselVoyage}
                      name='portThreeVesselVoyage'
                      onChange={(evt) => onValChange(evt)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => onPortSerch('Three')}>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small"
                      value={baseObj.portThreeTerminal}
                      name='portThreeTerminal'
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="Cut-off Date"
                        value={dayjs(baseObj.portThreeCutOffDate)}
                        name="portThreeCutOffDate"
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
                  <Grid item xs={6} alignSelf='end'>
                    <TextField variant='filled' fullWidth label="E.T.A" size="small"
                      name="portThreeETA"
                      value={baseObj.portThreeETA}
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small"
                      name="portThreeETD"
                      value={baseObj.portThreeETD}
                      readOnly
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        label="E.T.A. at Destination"
                        onChange={onDateValChange('portThreeEtaAtDestination')}
                        value={dayjs(baseObj.portThreeEtaAtDestination)}
                        name="portThreeEtaAtDestination"
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
