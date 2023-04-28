import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export default function Form() {

    const [baseObj, setbaseObj] = useState({employeeId:12334,name:"aniket",email:"aniketchate123@gmail.com",phone:9845654567,address:"sakinaka",age:22}); 

    const onValChange = (e) => {
        //console.log(e);
        if(e.target.type === 'checkbox')
          setbaseObj({...baseObj, [e.target.name]: e.target.checked ? true : false});
        else
          setbaseObj({...baseObj, [e.target.name]: e.target.value});
    
        //console.log(e.target);
    }

    function getData(){
        console.log(baseObj);
    }


    return (
        <Box>
            <Paper elevation={3} sx={{ padding: 4, marginY: 10 }}>
                <Typography variant='h5' sx={{fontFamily:'poppins'}}>Employee Details</Typography>
                <Typography variant='subtitle2' sx={{fontFamily:'poppins'}} >Define & update employee details</Typography>
                <Stack direction='row' flexWrap='wrap' gap={2} marginY={2}>
                    <TextField  sx={{width:200}} value={baseObj.employeeId} onChange={(evt) => onValChange(evt)} name="employeeId" label="empId" variant="standard" />
                    <TextField sx={{width:200}} value={baseObj.name} onChange={(evt) => onValChange(evt)} name="name" label="name" variant="standard" />
                    <TextField sx={{width:200}} value={baseObj.email} onChange={(evt) => onValChange(evt)} name="email" type='email' label="email" variant="standard" />
                    <TextField sx={{width:200}} value={baseObj.phone} onChange={(evt) => onValChange(evt)} name="phone" label="phone" variant="standard" />
                    <TextField sx={{width:200}} value={baseObj.address} onChange={(evt) => onValChange(evt)} name="address" label="address" variant="standard" />
                    <TextField sx={{width:200}} value={baseObj.age} onChange={(evt) => onValChange(evt)} name="age" label="age" variant="standard" />
                </Stack>
                <Stack direction='row' flexWrap='wrap' gap={1}>
                <Button onClick={getData} variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
                </Stack>
            </Paper>
        </Box>

    )
}
