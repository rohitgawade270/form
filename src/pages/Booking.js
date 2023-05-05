import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GeneralInformationTab from '../components/GeneralInformationTab';
import LineDetailsTab from '../components/LineDetailsTab';
import RouteUpdateTab from '../components/RouteUpdateTab';

export default function Booking() {

  const [booking, setBooking] = useState({});
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3031/bookings/${id}`
    }).then((response) => {
      setBooking(response.data);
    }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
    // eslint-disable-next-line
  }, []);


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  // const bookingData = [
  //   {
  //     label: 'Booking No',
  //     value: '5356783'
  //   },
  //   {
  //     label: 'Booking Date',
  //     value: '27/04/2023'
  //   },
  //   {
  //     label: 'Customer',
  //     value: 'customer 1'
  //   },
  //   {
  //     label: 'Loading Port',
  //     value: 'port 1'
  //   },
  //   {
  //     label: 'FPD',
  //     value: 'fpd'
  //   },
  //   {
  //     label: 'Commodity',
  //     value: '14'
  //   },
  //   {
  //     label: 'Commodity Category',
  //     value: 'commodity'
  //   },
  //   {
  //     label: 'Vessel Voyage',
  //     value: 'voyage'
  //   },
  //   {
  //     label: 'Line',
  //     value: '14'
  //   },
  //   {
  //     label: 'Inventory',
  //     value: '14242'
  //   },
  //   {
  //     label: 'Status',
  //     value: 'Active'
  //   },
  //   {
  //     label: 'Remarks',
  //     value: 'Active'
  //   },
  // ];

  const bookingData = [
    {
      label: 'Loading Port',
      value: 'port 1'
    },
    {
      label: 'Commodity',
      value: '14'
    },
    {
      label: 'Commodity Category',
      value: 'commodity'
    },
  ];

  const bookingInfo = [
    {
      label: 'Vessel Voyage',
      value: 'voyage'
    },
    {
      label: 'Line',
      value: '14'
    },
    {
      label: 'FPD',
      value: 'fpd'
    },

  ]

  const bookingDet = [
    {
      label: 'Inventory',
      value: '14242'
    },
    {
      label: 'Status',
      value: 'Active'
    },
    {
      label: 'Remarks',
      value: 'Active'
    },
  ]



  return (
    <>
      {
        Object.keys(booking).length > 0 ?
          <Box sx={{ marginTop: 9, fontFamily: 'poppins', }}>
            <Box>
              {/* for booking summary */}
              <Paper elevation={5} sx={{ p: '20px', height: '86vh' }}>
                <Grid container spacing={2}>
                  <Grid lg={3} item>
                    <h4>Booking Summary</h4>
                    <p>Manage booking details</p>
                  </Grid>
                  <Grid item lg={9}>
                    {/* <Grid container spacing={1}>
                   {bookingData.map((data) => {
                     return <Grid item key={data.label} lg={2} md={3} sm={4} xs={4}>
                       <Typography variant='p' style={{ fontSize: '8pt', fontWeight: 'bold' }} component='p'>{data.label}</Typography>
                       <Typography variant='p' style={{ fontSize: '8pt' }} component='p'>{data.value}</Typography>
                     </Grid>
                   })}
                 </Grid> */}
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                          <p style={{ fontWeight: 'bold', fontSize: '13pt', marginBottom: 0 }}>Aniket Chate</p>
                          <Stack direction='row' justifyContent='space-between'>
                            <Typography variant='p' style={{ fontSize: '8pt', color: 'gray' }} component='p'>Booking: <span style={{ color: 'black', fontSize: '10pt' }}>6535378</span></Typography>
                            <Typography variant='p' style={{ fontSize: '8pt', color: 'gray' }} component='p'>Booking Date: <span style={{ color: 'black', fontSize: '10pt' }}>05/05/2023</span></Typography>
                          </Stack>
                        </Paper>
                      </Grid>
                      <Grid item xs={8}>
                        <Paper elevation={1} sx={{ p: 1 }}>
                          <Grid container>
                            <Grid item xs={5}>
                              <Stack width='100%'>
                                {bookingData.map((data) => {
                                  return <Box item key={data.label} >
                                    <Typography variant='p' style={{ fontSize: '8pt', color: 'gray' }} component='p'>{data.label}: <span style={{ color: 'black', fontSize: '10pt' }}>{data.value}</span></Typography>
                                  </Box>
                                })}
                              </Stack>
                            </Grid>
                            <Grid item xs={4}>
                              <Stack width='100%'>
                                {bookingInfo.map((data) => {
                                  return <Box item key={data.label} >
                                    <Typography variant='p' style={{ fontSize: '8pt', color: 'gray' }} component='p'>{data.label}: <span style={{ color: 'black', fontSize: '10pt' }}>{data.value}</span></Typography>
                                  </Box>
                                })}
                              </Stack>
                            </Grid>
                            <Grid item xs={3}>
                              <Stack width='100%'>
                                {bookingDet.map((data) => {
                                  return <Box item key={data.label} >
                                    <Typography variant='p' style={{ fontSize: '8pt', color: 'gray' }} component='p'>{data.label}: <span style={{ color: 'black', fontSize: '10pt' }}>{data.value}</span></Typography>
                                  </Box>
                                })}
                              </Stack>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} textColor="secondary" variant={`${isSmallScreen ? "fullWidth" : "standard"}`} indicatorColor="secondary" aria-label="booking tab">
                      <Tab accessKey='g'  label="General Information"  {...a11yProps(0)} />
                      <Tab accessKey='l' label="Line Details" {...a11yProps(1)} />
                      <Tab accessKey='r' label="Route Update" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel  value={value} index={0}>
                    <GeneralInformationTab id={booking.id} initialVal={booking} />
                  </TabPanel>
                  <TabPanel sx={{ p: 0 }} value={value} index={1}>
                    <LineDetailsTab id={booking.id} initialVal={booking} />
                  </TabPanel>
                  <TabPanel sx={{ p: 0 }} value={value} index={2}>
                    <RouteUpdateTab id={booking.id} initialVal={booking} />
                  </TabPanel>
                </Box>
              </Paper>
            </Box>
            {/* <Box>
           <Paper elevation={5} sx={{ p: '20px', marginTop: 2, minHeight: '49px' }}>
             <h4>Booking</h4>
             <Box sx={{ width: '100%', typography: 'body1' }}>
               <TabContext value={value}>
                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                   <TabList onChange={handleChange} textColor="secondary" variant={`${isSmallScreen ? "fullWidth" : "standard"}`} indicatorColor="secondary" aria-label="booking tab">
                     <Tab label="General Information" value="1" />
                     <Tab label="Line Details" value="2" />
                     <Tab label="Route Update" value="3" />
                   </TabList>
                 </Box>
                 <TabPanel sx={{ p: 0 }} value="1">
                   <GeneralInformationTab id={booking.id} initialVal={booking} />
                 </TabPanel>
                 <TabPanel sx={{ p: 0 }} value="2">
                   <LineDetailsTab id={booking.id} initialVal={booking} />
                 </TabPanel>
                 <TabPanel sx={{ p: 0 }} value="3">
                   <RouteUpdateTab id={booking.id} initialVal={booking} />
                 </TabPanel>
               </TabContext>
             </Box>
           </Paper>
         </Box> */}
          </Box>
          :
          <></>
      }
    </>
  )
}
