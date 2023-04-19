import React from "react";
import {TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import BasicTable from "./Route Update Tab/BasicTable";
import { Button } from "react-bootstrap";

export default function RU_Tab() {
  return (
    <>
      <Box>
      <Button variant="success" style={{ fontSize: '12px' }}  size='md'>Save</Button>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          {/* --------------------------first grid-------------- */}
          <Grid lg={4} item>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "16px", fontWeight: 600 }}
              >
                Booking With Line
              </Typography>
              <Grid container paddingTop={1} spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    label="Line Booking No"
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    label="Line Booking Date"
                    size="small"
                    sx={{ width: "6.5rem" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    label="Line Booking Validity"
                    size="small"
                    sx={{ width: "6.5rem" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="standard"
                    label="SI Cut-off Date"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="standard"
                    label="Service Contract Number"
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    label="Pickup Point"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* -------------------------second grid---- */}
          <Grid lg={4} item>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "16px", fontWeight: 600 }}
              >
                Vessel Information
              </Typography>
              <Grid container paddingTop={1} spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    label="Vessel Voyage"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField variant="filled" label="Terminal" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="filled"
                    label="Cut-off Date"
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField variant="filled" label="E.T.A" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="filled"
                    disabled
                    label="E.T.D"
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    label="E.T.A at Destination"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* --------------------------third grid-------------- */}
          <Grid lg={4} item>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    Transhipment Ports
                  </Typography>
                  <Grid container paddingTop={1} spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        variant="standard"
                        label="Port 1"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ width: "7rem", marginLeft: "1rem" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        variant="standard"
                        label="Port 2"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ width: "7rem", marginLeft: "0.5rem" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="standard"
                        label="Port 3"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ marginLeft: "7rem", width: "7rem" }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12}></Grid>
            </Grid>
            {/* <Paper elevation={3} sx={{  p: 2 }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "16px", fontWeight: 600 }}
              >
                Transhipment Ports
              </Typography>
              <Grid container paddingTop={1} spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    variant="standard"
                    label="Port 1"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: "7rem", marginLeft: "1rem" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="standard"
                    label="Port 2"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: "7rem", marginLeft: "0.5rem" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Port 3"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginLeft: "7rem", width: "7rem" }}
                  />
                </Grid>
              </Grid>
            </Paper> */}

            {/* ------------------------4th grid---------- */}

            <Paper elevation={3} sx={{ p: 2 }}>
              <Grid container sx={{ marginTop: "0.5rem" }}>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Booked Inventory
                  </Typography>
                  <BasicTable />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
