import { Grid, IconButton, InputAdornment, Paper, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Search } from '@mui/icons-material'


export default function RouteUpdateTab() {






  return (
    <>
      <Stack sx={{ direction: 'column', minHeight: '382px', justifyContent: 'space-between' }}>
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={2}>
            <Grid lg={4} item>
              <Paper elevation={1} sx={{ p: 1 }} >
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Port 1</p>
                <Grid container spacing={2}  >
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField  variant='standard' label="Vessel Voyage" size="small" fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Cut-off Date" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.A" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField type='date' fullWidth variant='standard' label="E.T.A. at Destination" size='small' InputLabelProps={{ shrink: true }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid lg={4} item>
            <Paper elevation={1} sx={{ p: 1 }} >
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Port 2</p>
                <Grid container spacing={2}  >
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField  variant='standard' label="Vessel Voyage" size="small" fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Cut-off Date" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.A" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField type='date' fullWidth variant='standard' label="E.T.A. at Destination" size='small' InputLabelProps={{ shrink: true }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid lg={4} item>
            <Paper elevation={1} sx={{ p: 1 }} >
                <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Port 3</p>
                <Grid container spacing={2}  >
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField  variant='standard' label="Vessel Voyage" size="small" fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Terminal" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="Cut-off Date" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.A" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField variant='filled' fullWidth label="E.T.D" size="small" />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={6}>
                    <TextField type='date' fullWidth variant='standard' label="E.T.A. at Destination" size='small' InputLabelProps={{ shrink: true }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box >
        <Box sx={{ marginTop: 2 }}>
          <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
        </Box>
      </Stack>
    </>
  )
}
