import * as React from 'react';
import { Box, Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Create from './Create';

export default function Home() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Header section with title and Home button */}
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#f5f5f5",  // light background
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // subtle shadow for elevation
      }}>
        <Typography variant='h3' sx={{ margin: "0", fontWeight: "bold", color: "#333" }} align='center'>
          EMPLOYER DASHBOARD
        </Typography>
        <Button sx={{
          margin: "0",
          backgroundColor: "#007bff",  // Primary button color
          color: "#fff",
          padding: "10px 20px",
          '&:hover': {
            backgroundColor: "#0056b3"  // Darker color on hover
          }
        }} variant="contained">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </Button>
      </Box>

      {/* Tab section */}
      <Box sx={{ width: '100%', typography: 'body1', padding: "20px 40px" }}>
        <TabContext value={value}>
          <Box sx={{
            borderBottom: 1,
            borderColor: 'divider',
            marginBottom: "20px", // Add space between tabs and content
          }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Create Post" value="1" sx={{
                fontWeight: "bold",
                fontSize: "1.1rem", // Larger text for better readability
              }} />
            </TabList>
          </Box>
          
          {/* Tab content */}
          <TabPanel value="1" sx={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"  // Card-style appearance for tab content
          }}>
            <Create />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
