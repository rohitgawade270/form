import { InputLabel, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function BookingInputs() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
         
          <TextField
            size="small"
            id="booking-no"
            variant="standard"
           label="Booking No"
            sx={{
              width: "9.5rem",
              marginTop: "0.3rem",
              
            }}
          />
        </Grid>
        <Grid item>
          <TextField
           variant="standard"
            size="small"
            id="booking-date"
            label="Booking Date"
            sx={{ width: "9.5rem", marginTop: "0.3rem",
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="standard"
            size="small"
            id="customer"
            label="Customer"
            sx={{ width: "9.5rem", marginTop: "0.3rem",
          }}
          />
        </Grid>
        <Grid item>
          <TextField
           variant="standard"
            size="small"
            id="loading-port"
            label="Loading Port"
            sx={{ width: "9.5rem", marginTop: "0.3rem" ,
         }}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="standard"
            size="small"
            id="fpd"
            label="FPD"
            sx={{ width: "9.5rem", marginTop: "0.3rem" ,
       }}
          />
        </Grid>
        <Grid item>
          <TextField
           variant="standard"
            size="small"
            id="commodity"
            label="Commodity"
            sx={{ width: "9.5rem", marginTop: "0.3rem" ,
        }}
          />
        </Grid>
        <Grid item>
          <TextField
           variant="standard"
            size="small"
            id="commodity-category"
            label="Commodity Category"
            sx={{ width: "9.5rem", marginTop: "0.3rem" ,
        }}
          />
        </Grid>
        
          <Grid item sx={{   }}>
            <TextField
             variant="standard"
              size="small"
              id="vessel-voyage"
              label="Vessel Voyage"
              sx={{ width: "9.5rem", marginTop: "0.3rem" ,
          }}
            />
          </Grid>
          <Grid item sx={{   }}>
            <TextField
             variant="standard"
              size="small"
              id="booking-date"
              label="Booking Date"
              sx={{ width: "9.5rem", marginTop: "0.3rem",
            }}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              size="small"
              id="line"
              label="Line"
              sx={{ width: "9.5rem", marginTop: "0.3rem" ,
       }}
            />
          </Grid>
          <Grid item>
            <TextField
             variant="standard"
              size="small"
              id="inventory"
              label="Inventory"
              sx={{ width: "9.5rem", marginTop: "0.3rem",
             }}
            />
          </Grid>
          <Grid item>
            <TextField
             variant="standard"
              size="small"
              id="status"
              label="Status"
              sx={{ width: "9.5rem", marginTop: "0.3rem",
           }}
            />
          </Grid>
          <Grid item sx={{  }}>
            <TextField
              variant="standard"
              size="small"
              id="remarks"
              label="Remarks"
              sx={{ width: "20rem", marginTop: "0.3rem",
        }}
            />
          </Grid>
      </Grid>
    </Box>
  );
}
export default BookingInputs;








