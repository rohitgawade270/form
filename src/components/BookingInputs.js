import { TextField , Grid, Box} from "@mui/material";

function BookingInputs() {

  return (
    <Box>
      <h4>Booking Summary</h4>
      <p>Manage booking details</p>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <TextField size="small" id="booking-no" variant="standard" label="Booking No" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="booking-date" label="Booking Date" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="customer" label="Customer" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="loading-port" label="Loading Port" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="fpd" label="FPD" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="commodity" label="Commodity" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="commodity-category" label="Commodity Category" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="vessel-voyage" label="Vessel Voyage" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="booking-date" label="Booking Date" />
        </Grid>
        <Grid item  lg={4}>
          <TextField variant="standard" size="small" id="line" label="Line" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="inventory" label="Inventory" />
        </Grid>
        <Grid item lg={4}>
          <TextField variant="standard" size="small" id="status" label="Status" />
        </Grid>
        <Grid item lg={12}>
          <TextField variant="standard" size="small" id="remarks" label="Remarks" fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
}
export default BookingInputs;








