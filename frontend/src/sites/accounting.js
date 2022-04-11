import * as React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from './headerBar';
import '../css/accounting.css';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { TextareaAutosize } from '@mui/base';

function RevenueCertainYear(){
    const [year, setYear] = useState('');
    const [year1, setYear1] = useState('');
    const [sum, setSum] = useState([]);



    const revenue = () => {
        Axios.get(`http://localhost:3033/TotalRevenuePerYear`, {
            params: {
                year: year
            }
        }).then((res)=>{

            res.data.forEach(function(row, i) {
                row.id = i;
              });

            setSum(res.data[0]['SUM(Revenue)'])
            setYear1(year);

        });
    };

    return(
    <div>
        <h1>Revenue of Games Released in a Particiular Year</h1>
            <div id = 'accounting-game-year'>
                <form onSubmit = {(e) => { 
                    e.preventDefault();
                    if (year != ''){
                        revenue();
                    }

                }}>
                    <label for="a-game-year">Year:</label><br/>
                        <TextField  placeholder="Enter a Year" type="text" id="a-game-year" name="a-game-year" onChange = {(e) => {
                                setYear(e.target.value);
                        }}/><br/><br/>

                    <div style={{padding:'10px'}}  >
                        <Button  type="submit" variant="outlined" >See Revenue of Games Released in a Particiular Year</Button>
                    </div>
                </form>
                
                {/*Displays the data */}
                <div style={{display: 'flex',  justifyContent:'center', height: '50vh'}}>
                    <h3>Revenue of Games Released in {year1}: <h1>${sum}</h1> </h3>
                </div>
            </div>
    </div>
    );
}

function SalesBranchYear(){
    const [branchID, setBranchID] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const [top, setTop] = useState([]);
    const [top2, setTop2] = useState([]);

    function vw(v) {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return (v * w) / 100;
      }

    const columns = [
        { field: 'orderID', headerName: 'Order ID', width: vw(10) },
        { field: 'revenue', headerName: 'Revenue', width: vw(10) },
        { field: 'date', headerName: 'Date', width: vw(10) },
        { field: 'branchID', headerName: 'Branch ID', width: vw(10) },
        { field: 'customerID', headerName: 'Customer ID', width: vw(10) }
    ];
    const saleBranch = () => {
        Axios.get(`http://localhost:3033/TotalRevenue`, {
            params: {
                branchID: branchID,
                startTime: startTime,
                endTime: endTime
            }
        }).then((res)=>{

            res.data.forEach(function(row, i) {
                row.id = i;
              });
            setTop(res.data);
            
            for (let i = 0; i< top.length; i++){
                top[i].date = (top[i].date).slice(0,10); // reset the date values
            }

            setTop2(top); //sets new array
            
        });
    };
    return(
        <div>
            <h1>Sales of a Branch in a Year</h1>
            <div id = 'accounting-branch-year'>
                <form onSubmit = {(e) => { 
                    e.preventDefault(); //prevents reloading
                    //Checks for all the parameters
                    if (branchID != '')
                        if (startTime != '' && endTime != ''){
                            if (startTime < endTime)
                                saleBranch();
                            else
                                alert('Start Time is greater than End Time');

                        }
                        else 
                            alert("No startTime or endTime");
                    else
                        alert("No Branch ID Submitted");

                }}>
                    <label for="a-branch-id">Branch ID:</label><br/>
                        <TextField  placeholder="Enter Branch ID" type="text" id="a-branch-id" name="a-branch-id" onChange ={(e) =>{
                        setBranchID(e.target.value);
                    }}/><br/><br/>

                    <label for="a-branch-year-1">Start Date:</label><br/>
                        <TextField  placeholder="Enter a Date" type="Date" id="a-branch-year-1" name="a-branch-year-1" onChange ={(e) =>{
                        setStartTime(e.target.value);
                    }}/><br/><br/>
                    <label for="a-branch-year-2">End Date:</label><br/>
                        <TextField  placeholder="Enter a Date" type="Date" id="a-branch-year-2" name="a-branch-year-2" onChange ={(e) =>{
                        setEndTime(e.target.value);
                    }}/><br/><br/>

                    <div style={{padding:'10px'}}  >
                    <Button  type="submit" variant="outlined">See Sales of a Branch</Button>
                    </div>
                </form>
                <div style={{ height: 400, width: '50vw' }}>
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div style={{ flexGrow: 1 }}>
                            <DataGrid columns={columns} rows={top2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CompareAdBranch(){
    function vw(v) {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return (v * w) / 100;
      }

    const columns = [
        { field: 'branchID', headerName: 'Branch ID', width: vw(12) },
        { field: 'VideoGameRevenue', headerName: 'Video Game Revenue', width: vw(12) },
        { field: 'AdvertRevenue', headerName: 'Advert Revenue', width: vw(12) },

    ];

    const [top, setTop] = useState([]);


    const adBranch = () => {

        Axios.get(`http://localhost:3033/VideoAdRevenue`, {
        }).then((res)=>{
            console.log(res.data);

            res.data.forEach(function(row, i) {
                row.id = i;
              });
            setTop(res.data);
            
        });

    };

    return(
        <div>
            <h1>Compare Game vs Advert Revenue For Different Branches</h1>
            <div id = 'accounting-g-ad-branch'>
                <form onSubmit = {(e) => { 
                    e.preventDefault();
                    adBranch();

                }}>
                    <div style={{padding:'10px'}}  >
                    <Button  type="submit" variant="outlined">See Games vs Ad Revenue</Button>
                    </div>
                </form>
                <div style={{ height: 400, width: '36vw' }}>
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div style={{ flexGrow: 1 }}>
                            <DataGrid columns={columns} rows={top} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



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
    id: `vertical-tab-a-${index}`,
    'aria-controls': `vertical-tabpanel-a-${index}`,
  };
}

export default function AccHome() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Header/>
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
            <Tab label="Game Revenue of Games Released in a Particular Year" {...a11yProps(0)} />
            <Tab label="Sales of a Branch in a Year" {...a11yProps(1)} />
            <Tab label="Game vs Advert Revenue for a Branch" {...a11yProps(2)} />

        </Tabs> 
        <TabPanel value={value} index={0}>
            <RevenueCertainYear/>
        </TabPanel>

        <TabPanel value={value} index={1}>
            <SalesBranchYear/>
        </TabPanel>

        <TabPanel value={value} index={2}>
            <CompareAdBranch/>
        </TabPanel>
        
        
        </Box>
    </div>
  );
}
