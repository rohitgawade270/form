import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const GreyBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f2f2f2",
  padding: theme.spacing(2),
}));

export default function LD_Tab() {
  return (
    <>
      <Box>
        <Button variant="contained" color="success" sx={{ width: "15%" }}>
          Save
        </Button>
      </Box>
      {/* --------------------------------------- */}

      <Box marginTop={1.5}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ width: "100%", display: "flex", flexDirection: "row" }}
          >
            <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" ,height:300}}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                Booking With Line
              </Typography>
              <TextField
                variant="standard"
                size="small"
                id="line-booking-no"
                label="Line Booking No"
                sx={{ width: "6.5rem",marginLeft:"0.5rem" }}
              />
              <Grid item xs={6} sx={{ marginTop: "1.4rem" }}>
                <TextField
                  variant="standard"
                  size="small"
                  id="si-cutoff-date"
                  label="SI Cut-off Date"
                  sx={{ width: "6.5rem" ,marginLeft:"0.5rem"}}
                />
              </Grid>
              <Grid item xs={6} sx={{ marginTop: "1.4rem" }}>
                <TextField
                  variant="standard"
                  size="small"
                  id="pickup-point"
                  label="Pickup Point"
                  sx={{ width: "6.5rem" ,marginLeft:"0.5rem"}}
                />
              </Grid>
            </Grid>
            <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
              <TextField
                variant="standard"
                size="small"
                id="line-booking-date"
                label="Line Booking Date"
                sx={{ width: "6.5rem", marginTop: "1.4rem",marginLeft:"0.5rem" }}
              />

              <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
                <TextField
                  variant="standard"
                  size="small"
                  id="service-contract-number"
                  label="Service Contract Number"
                  sx={{ width: "6.5rem", marginTop: "1.4rem", marginLeft:"0.5rem"}}
                />
              </Grid>
            </Grid>
            <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
              <TextField
                variant="standard"
                size="small"
                id="line-booking-validity"
                label="Line Booking Validity"
                sx={{ width: "6.5rem", marginTop: "1.4rem",marginLeft:"0.5rem" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
