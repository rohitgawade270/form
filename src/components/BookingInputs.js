import { InputLabel, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function BookingInputs() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <Typography sx={{ }}>Booking No</Typography>
          <TextField
            size="small"
            id="booking-no"
            variant="outlined"
            sx={{
              width: "9.5rem",
              marginTop: "0.3rem",
                "& .MuiInputLabel-root": { color: "green" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
                },
            }}
          />
        </Grid>
        <Grid item>
          <Typography sx={{ }}>Booking Date</Typography>
          <TextField
            variant="outlined"
            size="small"
            id="booking-date"
            sx={{ width: "9.5rem", marginTop: "0.3rem",
            "& .MuiInputLabel-root": { color: "green" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
            }, }}
          />
        </Grid>
        <Grid item>
          <Typography sx={{}}>Customer</Typography>
          <TextField
            variant="outlined"
            size="small"
            id="customer"
            sx={{ width: "9.5rem", marginTop: "0.3rem",
            "& .MuiInputLabel-root": { color: "green" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
            }, }}
          />
        </Grid>
        <Grid item>
          <Typography sx={{ }}>Loading Port</Typography>
          <TextField
            variant="outlined"
            size="small"
            id="loading-port"
            sx={{ width: "9.5rem", marginTop: "0.3rem" ,
            "& .MuiInputLabel-root": { color: "green" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
            },}}
          />
        </Grid>
        <Grid item>
          <Typography sx={{  }}>FPD</Typography>
          <TextField
            variant="outlined"
            size="small"
            id="fpd"
            sx={{ width: "9.5rem", marginTop: "0.3rem" ,
            "& .MuiInputLabel-root": { color: "green" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
            },}}
          />
        </Grid>
        <Grid item>
          <Typography sx={{  }}>Commodity</Typography>
          <TextField
            variant="outlined"
            size="small"
            id="commodity"
            sx={{ width: "9.5rem", marginTop: "0.3rem" ,
            "& .MuiInputLabel-root": { color: "green" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
            },}}
          />
        </Grid>
        <Grid item>
          <Typography sx={{}}>Commodity Category</Typography>
          <TextField
            variant="outlined"
            size="small"
            id="commodity-category"
            sx={{ width: "9.5rem", marginTop: "0.3rem" ,
            "& .MuiInputLabel-root": { color: "green" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
            },}}
          />
        </Grid>
        
          <Grid item sx={{   }}>
            <Typography sx={{}}>Vessel Voyage</Typography>
            <TextField
              variant="outlined"
              size="small"
              id="vessel-voyage"
              sx={{ width: "9.5rem", marginTop: "0.3rem" ,
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
              },}}
            />
          </Grid>
          <Grid item sx={{   }}>
            <Typography sx={{}}>Booking Date</Typography>
            <TextField
              variant="outlined"
              size="small"
              id="booking-date"
              sx={{ width: "9.5rem", marginTop: "0.3rem",
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
              }, }}
            />
          </Grid>
          <Grid item>
            <Typography sx={{}}>Line</Typography>
            <TextField
              variant="outlined"
              size="small"
              id="line"
              sx={{ width: "9.5rem", marginTop: "0.3rem" ,
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
              },}}
            />
          </Grid>
          <Grid item>
            <Typography sx={{}}>Inventory</Typography>
            <TextField
              variant="outlined"
              size="small"
              id="inventory"
              sx={{ width: "9.5rem", marginTop: "0.3rem",
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
              }, }}
            />
          </Grid>
          <Grid item>
            <Typography sx={{}}>Status</Typography>
            <TextField
              variant="outlined"
              size="small"
              id="status"
              sx={{ width: "9.5rem", marginTop: "0.3rem",
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
              }, }}
            />
          </Grid>
          <Grid item sx={{  }}>
          <Typography sx={{}}>Remarks</Typography>
            <TextField
              variant="outlined"
              size="small"
              id="remarks"
              sx={{ width: "20rem", marginTop: "0.3rem",
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border:"1px solid", borderRadius:"0.5rem"},
              }, }}
            />
          </Grid>
       
      </Grid>
    </Box>
  );
}
export default BookingInputs;








