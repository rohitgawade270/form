import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styled from '@emotion/styled';
import { Tabs } from '@mui/material/';
import GI_Tab from './GI_Tab';
import LD_Tab from './LD_Tab';
import RU_Tab from './RU_Tab';

export default function LabTabs() {
  const [value, setValue] =useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTabs = styled(Tab)({
    background: '#d2d2d2',
    marginRight:4,
    fontSize:'14px',
    border:'1px solid black',
    borderRadius:'6px 6px 0 0',
  '&.Mui-selected': {
    background: 'gray',
    color:'white'
  }
  });

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginY:2 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList TabIndicatorProps={{style:{backgroundColor:'gray'}}} onChange={handleChange}  aria-label="lab API tabs example">
            <CustomTabs label="General Information" value="1" />
            <CustomTabs label="Line Details" value="2" />
            <CustomTabs  label="Route Update" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={{p:2}} value="1">
            <GI_Tab />
        </TabPanel>
        <TabPanel sx={{p:2}} value="2">
            <LD_Tab />
        </TabPanel>
        <TabPanel sx={{p:2}} value="3">
            <RU_Tab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
