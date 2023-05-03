import React, { useEffect , useState} from 'react';
import { Box, Grid, Paper, Tab, Typography , useMediaQuery, useTheme} from '@mui/material'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import GeneralInformationTab from '../components/GeneralInformationTab';
import LineDetailsTab from '../components/LineDetailsTab';
import RouteUpdateTab from '../components/RouteUpdateTab';

export default function Booking() {

  const [booking,setBooking] = useState({});
  const { id } = useParams();
 
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

  const bookingData = [
    {
      label: 'Booking No',
      value: '5356783'
    },
    {
      label: 'Booking Date',
      value: '27/04/2023'
    },
    {
      label: 'Customer',
      value: 'customer 1'
    },
    {
      label: 'Loading Port',
      value: 'port 1'
    },
    {
      label: 'FPD',
      value: 'fpd'
    },
    {
      label: 'Commodity',
      value: '14'
    },
    {
      label: 'Commodity Category',
      value: 'commodity'
    },
    {
      label: 'Vessel Voyage',
      value: 'voyage'
    },
    {
      label: 'Line',
      value: '14'
    },
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
  ];

  const [value, setValue] = useState('1');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    {
      Object.keys(booking).length > 0 ?
         <Box sx={{ marginTop: 9, fontFamily: 'poppins' }}>
         <Box>
           {/* for booking summary */}
           <Paper elevation={5} sx={{ p: '20px' }}>
             <Grid container spacing={2}>
               <Grid lg={3} item>
                 <h4>Booking Summary</h4>
                 <p>Manage booking details</p>
               </Grid>
               <Grid item lg={9}>
                 <Grid container spacing={1}>
                   {bookingData.map((data) => {
                     return <Grid item key={data.label} lg={2} md={3} sm={4} xs={4}>
                       <Typography variant='p' style={{ fontSize: '8pt', fontWeight: 'bold' }} component='p'>{data.label}</Typography>
                       <Typography variant='p' style={{ fontSize: '8pt' }} component='p'>{data.value}</Typography>
                     </Grid>
                   })}
                 </Grid>
               </Grid>
             </Grid>
           </Paper>
         </Box>
         <Box>
           {/* for booking */}
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
                   <GeneralInformationTab id={booking.id} lineDetails={booking.lineDetails} routeUpdate={booking.routeUpdate} initialVal={booking.generalInformation} />
                 </TabPanel>
                 <TabPanel sx={{ p: 0 }} value="2">
                   <LineDetailsTab id={booking.id} initialVal={booking.lineDetails} routeUpdate={booking.routeUpdate} generalInformation={booking.generalInformation} />
                 </TabPanel>
                 <TabPanel sx={{ p: 0 }} value="3">
                   <RouteUpdateTab id={booking.id} lineDetails={booking.lineDetails} initialVal={booking.routeUpdate} generalInformation={booking.generalInformation} />
                 </TabPanel>
               </TabContext>
             </Box>
           </Paper>
         </Box>
       </Box>
       :
       <></>
    }
    </>
 
  )
}
