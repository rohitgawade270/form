import { InputLabel, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function BookingInputs() {

  return (
    <Box>
      <h2>Booking</h2>
      <p>Manage booking details</p>
      <Grid container spacing={2}>
        <Grid item>
         
          <TextField
            size="small"
            id="booking-no"
            variant="standard"
           label="Booking No"
          
          />
        </Grid>
        <Grid item>
          <TextField
           variant="standard"
            size="small"
            id="booking-date"
            label="Booking Date"
         
          />
        </Grid>
        <Grid item>
          <TextField
            variant="standard"
            size="small"
            id="customer"
            label="Customer"
           
          />
        </Grid>
        <Grid item>
          <TextField
           variant="standard"
            size="small"
            id="loading-port"
            label="Loading Port"
        
          />
        </Grid>
        <Grid item>
          <TextField
            variant="standard"
            size="small"
            id="fpd"
            label="FPD"
          
          />
        </Grid>
        <Grid item>
          <TextField
           variant="standard"
            size="small"
            id="commodity"
            label="Commodity"
        
          />
        </Grid>
        <Grid item>
          <TextField
           variant="standard"
            size="small"
            id="commodity-category"
            label="Commodity Category"
          
          />
        </Grid>
        
          <Grid item sx={{   }}>
            <TextField
             variant="standard"
              size="small"
              id="vessel-voyage"
              label="Vessel Voyage"
             
            />
          </Grid>
          <Grid item sx={{   }}>
            <TextField
             variant="standard"
              size="small"
              id="booking-date"
              label="Booking Date"
           
            />
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              size="small"
              id="line"
              label="Line"
           
            />
          </Grid>
          <Grid item>
            <TextField
             variant="standard"
              size="small"
              id="inventory"
              label="Inventory"
             
            />
          </Grid>
          <Grid item>
            <TextField
             variant="standard"
              size="small"
              id="status"
              label="Status"
          
            />
          </Grid>
          <Grid item sx={{  }}>
            <TextField
              variant="standard"
              size="small"
              id="remarks"
              label="Remarks"
              sx={{ width:"20rem" }}
            />
          </Grid>
      </Grid>
    </Box>
  );
}
export default BookingInputs;








