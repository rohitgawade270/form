import { Box, Checkbox, Container, FormControlLabel, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap';
import { Save, XSquareFill, CardChecklist, Grid } from 'react-bootstrap-icons';
import DataGridBox from '../components/DataGridBox';

export default function Form() {

    const app = [
        {
            value: 'FireQube',
            label: 'FireQube',
        },
        {
            value: 'Teravista',
            label: 'Teravista',
        }
    ];

    return (
        // <Container sx={{ marginY: 10 }}>
            <Paper elevation={3} sx={{ padding: 4 ,marginY: 10  }}>
                <Typography variant='h5'>Access Level List</Typography>
                <Typography variant='subtitle2'>Define & update application access levels</Typography>
                <Stack direction={{sm:'column',md:'row'}} gap={2} marginY={2}>
                    <TextField fullWidth id="admin" label="AccessLevelMode" variant="standard" />
                    <TextField fullWidth id="access-level-name" label="AccessLevelName" variant="standard" />
                    <TextField fullWidth id="access-level-desc" label="AccessLevelDescription" multiline rows={2} variant="standard" />
                    <TextField id="select-app" select label="App" defaultValue="FireQube" variant="standard" fullWidth >
                        {app.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormControlLabel  control={<Checkbox size="small" />} label="Active" />
                </Stack>
                {/* <DataGridBox /> */}
                <Stack direction='row' flexWrap='wrap' gap={1}>
                    <Button variant="primary" size='sm'><Typography variant='body1' sx={{marginRight:1}} component='span'><Save size='15' /></Typography> Save</Button>
                    <Button variant="primary" size='sm'><Typography variant='body1' sx={{marginRight:1}} component='span'><XSquareFill size='15' /></Typography> Delete</Button>
                    <Button variant="primary" size='sm'><Typography variant='body1' sx={{marginRight:1}} component='span'><CardChecklist  size='15' /></Typography> Back to List</Button>
                </Stack>
            </Paper>
        // </Container>
    )
}
