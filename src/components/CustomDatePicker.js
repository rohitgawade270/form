import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    datePicker:{
        '& .MuiInputBase-root':{
            maxWidth:'140px',
            maxHeight:'50px'
        }
    }
});

export default function CustomDatePicker() {

    
const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker  className={classes.datePicker} label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}