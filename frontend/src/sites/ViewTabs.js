import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { TextareaAutosize } from '@mui/base';
import TopSelling from './Views/TopSelling';
import { IconButton } from '@mui/material';
import axios from 'axios';
import GamesView from './Views/AllGames';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-v-${index}`}
      aria-labelledby={`vertical-tab-v-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>

        </Box> 
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-v-${index}`,
    'aria-controls': `vertical-tabpanel-v-${index}`,
  };
}

export default function ViewTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [top, setTop] = useState([]);


        let submit = async function (event) {
          console.log("Line62")

            event.preventDefault();
            const response =
                await axios.get("http://localhost:5000/gamePerGenre",
                { params: {genre: event.target.elements.genreGames.value,}}
                ).then(function (response) {
                    console.log(response.data);
                    
                    response.data.forEach(function(row, i) {
                        row.id = i;
                      });

                        console.log(response.data)
                    setTop(response.data)
                    console.log(top)


                })
            
            
            //console.log(event.target.elements.vItemId.values)top
        
            return false;
        }


  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 900}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',fontfamily: "Monospace" }}
      >
        <Tab label="Top Selling for a Genre" {...a11yProps(0)} />
        <Tab label="Games in a Genre" {...a11yProps(1)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        
        <TopSelling/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <GamesView/>
       
                  
      </TabPanel>
      
      
    </Box>
  );
}

