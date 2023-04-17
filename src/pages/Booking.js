import { Box, Typography } from '@mui/material'
import React from 'react'
import BookingInputs from '../components/BookingInputs'
import BookingTabs from '../components/BookingTabs'

export default function Booking() {
  return (
   <Box sx={{marginTop:10}}>
<BookingInputs/>
<BookingTabs />
   </Box>
  )
}
