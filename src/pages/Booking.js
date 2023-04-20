import React from 'react';
import { Box, Paper } from '@mui/material'
import BookingInputs from '../components/BookingInputs'
import BookingTabs from '../components/BookingTabs'

export default function Booking() {
 
  return (
    <Box sx={{ marginTop: 8 , backgroundColor:'#d0d0d0',fontFamily:'poppins'}}>
      <Paper elevation={5} sx={{p:3}}>
      <BookingInputs />
      <BookingTabs  />
      </Paper>
    </Box>
  )
}
