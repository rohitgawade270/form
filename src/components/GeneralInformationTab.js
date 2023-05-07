import React, { useState } from 'react'
import { Box, Checkbox, FormControlLabel, Grid, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import data from '../db.json'
import axios from 'axios'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'
import { DataGrid, Column, Editing, Paging } from 'devextreme-react/data-grid';
import { SelectBox } from 'devextreme-react'
import "../dx-styles.css"


export default function GeneralInformationTab({ id, initialVal }) {
    const [baseObj, setbaseObj] = useState(initialVal);
    const dtContainerDetails = [
        { ID: 1, sizeType: "40 HC", noOfContainers: 1 },
        { ID: 2, sizeType: "20 HC", noOfContainers: 2 }
    ]

    const onDateValChange = (fieldName) => (value) => {
        setbaseObj({ ...baseObj, [fieldName]: value });
    }

    const onValChange = (e) => {
        if (e.target.type === 'checkbox')
            setbaseObj({ ...baseObj, [e.target.name]: e.target.checked === true ? 'Y' : 'N' });
        else
            setbaseObj({ ...baseObj, [e.target.name]: e.target.value });
    }

    const { imoClass, imoUnNumber, parkingGroup, pol, pod, fpd, mot, bookingOffice, deliveryMode, stuffingType, stuffingLocation, bookingType, customer, customerLocation, shipper, consianee, cha, salesPerson, overseasAgent, por } = data;
    // const {containerSizeType} = data;


    const saveData = () => {
        axios({
            method: 'put',
            url: `http://localhost:3031/bookings/${id}`,
            data: baseObj
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const [selectedValue, setSelectedValue] = useState("one");
    const editBoxValueChanged = (e) => {
        console.log(e)
        setSelectedValue( e.value);
      };

    const data1 = [
        "one", 
        "two", 
        "three", 
        "four", 
    ]




    return (
        <>
            <div style={{ height: "61vh", overflow: 'auto' }}>
                <Stack direction='row' sx={{ marginBottom: 1 }} gap={1} alignItems='center'>
                    <span style={{ fontWeight: "bold" }}>Booking Type</span>
                    <DropdownButton id="export-btn" title="Export FCL" size="sm" variant='secondary'>
                        <Dropdown.Item className='fs-12' href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item className='fs-12' href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item className='fs-12' href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Stack>
                <Box>
                    <Grid container spacing={1.5}>
                        <Grid item xs={4}>
                            <Paper elevation={1} sx={{ p: 1, marginLeft: 1 }}>
                                <Box>
                                    <p style={{ fontWeight: 'bold' }}>General Information</p>
                                    <Grid container spacing={2}  >
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select variant="standard" fullWidth
                                                value={baseObj.bookingOffice}
                                                name='bookingOffice'
                                                onChange={(evt) => onValChange(evt)}
                                                label='Booking Office' >
                                                {bookingOffice.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid alignSelf='end' item lg={4} sm={4} xs={6}>
                                            <TextField variant='standard' fullWidth size="small"
                                                value={baseObj.bookingNumber}
                                                label="Booking Number"
                                                name="bookingNumber"
                                                onChange={(evt) => onValChange(evt)}
                                            />
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                <DatePicker
                                                    label="Booking Date"
                                                    onChange={onDateValChange('bookingDate')}
                                                    value={dayjs(baseObj.bookingDate)}
                                                    name="bookingDate"
                                                    slotProps={{
                                                        textField: {
                                                            variant: 'standard',
                                                            fullWidth: true,
                                                            InputLabelProps: { shrink: true },
                                                        }
                                                    }}
                                                />
                                            </LocalizationProvider>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='Delivery Mode' variant="standard" fullWidth
                                                value={baseObj.deliveryMode}
                                                onChange={(evt) => onValChange(evt)}
                                                name='deliveryMode'
                                            >
                                                {deliveryMode.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='Stuffing Type' variant="standard" fullWidth
                                                value={baseObj.stuffingType}
                                                onChange={(evt) => onValChange(evt)}
                                                name='stuffingType'
                                            >
                                                {stuffingType.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='Stuffing Location' variant="standard" fullWidth
                                                value={baseObj.stuffingLocation}
                                                onChange={(evt) => onValChange(evt)}
                                                name='stuffingLocation'
                                            >
                                                {stuffingLocation.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        {/* <Grid item lg={4} sm={4} xs={6}>
                                                <TextField select label='Booking Type' variant="standard" fullWidth
                                                    value={baseObj.bookingType}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='bookingType'
                                                >
                                                    {bookingType.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid> */}
                                    </Grid>
                                </Box>
                                <Box sx={{ marginTop: 2 }}>
                                    <p style={{ fontWeight: 'bold' }}>HAZ Details</p>
                                    <Grid container spacing={2}  >
                                        <Grid item xs={4}>
                                            <TextField select label='IMO Class' variant="standard" fullWidth
                                                value={baseObj.hazImoClass}
                                                onChange={(evt) => onValChange(evt)}
                                                name='hazImoClass'
                                            >
                                                {imoClass.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField select label='IMO UN Number' variant="standard" fullWidth
                                                value={baseObj.hazImoUnNumber}
                                                onChange={(evt) => onValChange(evt)}
                                                name='hazImoUnNumber'
                                            >
                                                {imoUnNumber.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField select label='Packing Group' variant="standard" fullWidth
                                                value={baseObj.hazParkingGroup}
                                                onChange={(evt) => onValChange(evt)}
                                                name='hazParkingGroup'
                                            >
                                                {parkingGroup.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ marginTop: 2 }}>
                                    <p style={{ fontWeight: 'bold' }}>Cargo Information</p>
                                    <Grid container spacing={2}  >
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='IMO Class' variant="standard" fullWidth
                                                value={baseObj.cargoImoClass}
                                                onChange={(evt) => onValChange(evt)}
                                                name='cargoImoClass'
                                            >
                                                {imoClass.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField select label='IMO UN Number' variant="standard" fullWidth
                                                value={baseObj.cargoImoUnNumber}
                                                onChange={(evt) => onValChange(evt)}
                                                name='cargoImoUnNumber'
                                            >
                                                {imoUnNumber.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        {/* <Grid item lg={4} sm={4} xs={6}>
                                    <TextField name="imoUnNum" select label='IMO UN Number' variant="standard" fullWidth>
                                        {imoUnNumber.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid> */}
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="cargoParkingGroup" select label='Packing Group' variant="standard" fullWidth
                                                value={baseObj.cargoParkingGroup}
                                                onChange={(evt) => onValChange(evt)}
                                            >
                                                {parkingGroup.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                            <TextField variant='standard' fullWidth label="Gross Weight" size="small"
                                                value={baseObj.grossWeight}
                                                name='grossWeight'
                                                onChange={(evt) => onValChange(evt)}
                                            />
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6} alignSelf='end'>
                                            <TextField variant='standard' fullWidth label="Volume" size="small"
                                                name="volume"
                                                value={baseObj.volume}
                                                onChange={(evt) => onValChange(evt)}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Paper elevation={1} sx={{ p: 1 }}>
                                        <p style={{ fontWeight: 'bold' }}>Parties Involved</p>
                                        <Grid container spacing={0.8}  >
                                            <Grid item xs={12}>
                                                <TextField select label='Customer' variant="standard" fullWidth
                                                    value={baseObj.customer}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='customer'
                                                >
                                                    {customer.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField select label='Customer Location' variant="standard" fullWidth
                                                    value={baseObj.customerLocation}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='customerLocation'
                                                >
                                                    {customerLocation.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <label>Location</label>
                                                <SelectBox items={data1}
                                                    stylingMode="underlined"
                                                    placeholder="Select..."
                                                    searchEnabled={true}
                                                    value={selectedValue}               
                                                    acceptCustomValue={true}
                                                    onValueChanged={editBoxValueChanged} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField select label='Shipper' variant="standard" fullWidth
                                                    value={baseObj.shipper}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='shipper'
                                                >
                                                    {shipper.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField select label='Consianee' variant="standard" fullWidth
                                                    value={baseObj.consianee}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='consianee'
                                                >
                                                    {consianee.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField select label='CHA' variant="standard" fullWidth
                                                    value={baseObj.cha}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='cha'
                                                >
                                                    {cha.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField select label='Sales Person' variant="standard" fullWidth
                                                    value={baseObj.salesPerson}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='salesPerson'
                                                >
                                                    {salesPerson.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField select label='Overseas Agent' variant="standard" fullWidth
                                                    value={baseObj.overseasAgent}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='overseasAgent'
                                                >
                                                    {overseasAgent.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox checked={baseObj.lineBlRequired === 'Y'} size="small" />}
                                                    label="Line BL Required"
                                                    value={baseObj.lineBlRequired}
                                                    onChange={(evt) => onValChange(evt)}
                                                    name='lineBlRequired'
                                                />
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={1} sx={{ p: 1, marginRight: 1 }}>
                                <Box>
                                    <p style={{ fontWeight: 'bold' }}>Route Information</p>
                                    <Grid container spacing={2}  >
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="por" select label='POR' variant="standard" fullWidth
                                                value={baseObj.por}
                                                onChange={(evt) => onValChange(evt)}
                                            >
                                                {por.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="pol" defaultValue='select' select label='POL' variant="standard" fullWidth
                                                value={baseObj.pol}
                                                onChange={(evt) => onValChange(evt)} >
                                                {pol.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="pod" defaultValue='select' select label='POD' variant="standard" fullWidth
                                                value={baseObj.pod}
                                                onChange={(evt) => onValChange(evt)} >
                                                {pod.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="fpd" defaultValue='select' select label='FPD' variant="standard" fullWidth
                                                value={baseObj.fpd}
                                                onChange={(evt) => onValChange(evt)}
                                            >
                                                {fpd.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <TextField name="mot" defaultValue='select' select label='MOT' variant="standard" fullWidth
                                                value={baseObj.mot}
                                                onChange={(evt) => onValChange(evt)}
                                            >
                                                {mot.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={4} sm={4} xs={6}>
                                            <FormControlLabel
                                                control={<Checkbox checked={baseObj.multiCurrency === 'Y'} size="small" />}
                                                label="Multi-currency"
                                                onChange={(evt) => onValChange(evt)}
                                                name="multiCurrency"
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ marginTop: 2 }}>
                                    <p style={{ fontWeight: 'bold' }}>Container details</p>
                                    <DataGrid
                                        dataSource={dtContainerDetails}
                                        keyExpr="ID"
                                        showBorders={true}
                                    >
                                        <Paging enabled={false} />
                                        <Editing
                                            mode="batch"
                                            allowUpdating={true}
                                            allowAdding={true}
                                            allowDeleting={true}
                                        />
                                        <Column dataField="sizeType" caption="Size Type" />
                                        <Column dataField="noOfContainers" caption="No of Containers" />
                                    </DataGrid>

                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box >
            </div>
            <Box sx={{ marginTop: 1.4 }}>
                <Stack direction='row' flexWrap='wrap' gap={1} >
                    <Button variant="primary" size='sm' onClick={saveData} >  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-save paddingRight bootstrapIcon" ></i>Save as New</Button>
                    <Button variant="primary" size='sm'>  <i className="bi bi-x-square paddingRight bootstrapIcon" ></i>Cancel</Button>
                </Stack>
            </Box>
        </>
    )
}
