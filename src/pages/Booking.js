import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material'
import BookingTabs from '../components/BookingTabs'


export default function Booking() {

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



  return (
    <Box sx={{ marginTop: 10, fontFamily: 'poppins' }}>

      <Paper elevation={5} sx={{ p: '20px' }}>
        <Grid container spacing={2}>
          <Grid lg={3} item>
            <h4 style={{ marginBottom: '0' }}>Booking Summary</h4>
            <p style={{ marginBottom: '' }}>Manage booking details</p>
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

      <Paper elevation={5} sx={{ p: '20px', marginTop: 2 , minHeight:'495px' }}>
        <h4 style={{ marginBottom: '0' }}>Booking</h4>
        {/* <p style={{ marginBottom: '0' }}>Manage booking details</p> */}
        <BookingTabs />
      </Paper>

    </Box>
  )
}
