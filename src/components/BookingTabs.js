import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GeneralInformationTab from './GeneralInformationTab';
import LineDetailsTab from './LineDetailsTab';
import RouteUpdateTab from './RouteUpdateTab';
import { useMediaQuery, useTheme } from '@mui/material';

export default function BookingTabs() {
  const [value, setValue] = useState('1');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="secondary" variant={`${isSmallScreen ? "fullWidth":"standard"}`} indicatorColor="secondary" aria-label="booking tab">
            <Tab label="General Information" value="1" />
            <Tab label="Line Details" value="2" />
            <Tab label="Route Update" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={{ p: 0}} value="1">
          <GeneralInformationTab  />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="2">
          <LineDetailsTab />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="3">
          <RouteUpdateTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
