import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Employee from './Inserts/Employee';
import Customer from './Inserts/Customer';
import Advert from './Inserts/Advert';
import Stock from './Inserts/Stock';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


// let submitCustomer = async function (event) {

//   event.preventDefault();
//   const response =
//       await axios.get("http://localhost:34503/customer",
//       { params: {branch: event.target.elements.eBranch.value,}}
//       )
//   console.log("sda");

//   return false;
// }


// let submitEmployee = async function (event) {

//   event.preventDefault();
//   const response =
//       await axios.get("http://localhost:34503/employee",
//       { params: {name: event.target.elements.eName.value,address: event.target.elements.eAddress.value,branch: event.target.elements.eBranch.value,}}
//       )
//   console.log("sda");

//   return false;
// }

// let submitAdvert = async function (event) {

//   event.preventDefault();
//   const response =
//       await axios.get("http://localhost:34503/InsertAds",
//       { params: {date: event.target.elements.date.value,payment: event.target.elements.payment.value,header: event.target.elements.Head.value,branch: event.target.elements.branch.value,}}
//       )
//   console.log("sda");
  
//   //console.log(event.target.elements.vItemId.values)

//   return false;
// }

// let submitStock= async function (event) {

//   event.preventDefault();
//   const response =
//       await axios.get("http://localhost:34503/InsertAds",
//       { params: {ID: event.target.elements.vItemId.value,items: event.target.elements.vStockIncrease.value,amount:event.target.elements.vStockAmount.value,branch:event.target.elements.vStockBranch.value}}
//       )
//   console.log("sda");
  
//   //console.log(event.target.elements.vItemId.values)

//   return false;
// }


export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tab label="New Employee" {...a11yProps(0)} />
        <Tab label="Addition of Stock" {...a11yProps(1)} />
        <Tab label="Create an Advertisment" {...a11yProps(2)} />
        <Tab label="Add a New Customer to the System" {...a11yProps(3)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        
        {/* <h1>Addition of a new Employee</h1>
        <div id = 'insert-advert'>
 
                <form onSubmit={submitEmployee} >
                    <label for="userData">Name:</label><br/>
                        <TextField  required placeholder="Enter employee name" type="text" id="eName" name="eName"/><br/><br/>

                    <label for="eAddress">Address:</label><br/>
                        <TextField  placeholder="Enter employee address " type="text" id="eAddress" name="eAddress"/><br/><br/>

                    <label for="eBranch">Branch:</label><br/>
                        <TextField required  placeholder="Insert branch of new employee" type="text" id="eBranch" name="eBranch"/><br/><br/>


                    <div style={{padding:'10px'}}  >
                      <Button  type="submit" variant="outlined">Add employee</Button>
                    </div>
                </form>

            </div> */}
            <Employee/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      {/* <h1>Add More Stock to a Store</h1>

            <div style={{padding:"10px"}}>

      <p> A manager can add item stock to a specific store. 
        </p>
        

        </div>
      <div id = 'insert-advert'>
                <form  onSubmit={submitStock} name="su">
                    <label for="vItemId">Item Id:</label><br/>
                        <TextField  required placeholder="Insert item ID" type="text" id="vItemId" name="vItemId"/><br/><br/>

                    <label for="vStockIncrease">Add Items to Stock:</label><br/>
                        <TextField  placeholder="Insert Stock name " type="text" id="vStockIncrease" name="vStockIncrease"/><br/><br/>

                        <label for="vStockAmount">Add amount to stock:</label><br/>
                        <TextField  placeholder="Add amount " type="text" id="vStockAmount" name="vStockAmount"/><br/><br/>

                        <label for="vStockBranch">Please enter a branch to isnert stock:</label><br/>
                        <TextField required placeholder="Branch # " type="text" id="vStockBranch" name="vStockBranch"/><br/><br/>

                        <div style={{padding:'10px'}}  >
                        <Button type="submit" variant="outlined">Add Stock</Button>
                          </div>
                </form>

                
            </div> */}
            <Stock />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <h1>Create a New Advertisement</h1>

        <div style={{padding:"10px"}}>

        <p> To create an Advertisement, the manager must add in some details. Please note the branchID of the given branch the advertisement is
          to be placed, add in the headline of the advertisment. Add in the amount the store received for such an advertisement, along with when this advertisement is to be placed.
          </p>
          

          </div>
        <div id = 'insert-advert'>
               
                <form onSubmit={submitAdvert}> 
                    <label for="branch">Branch Id:</label><br/>
                        <TextField placeholder="Add a branch ID" type="text" id="branch" name="branch"/><br/><br/>

                    <label for="headline">Headline:</label><br/>
       
                        <TextareaAutosize
                          maxRows={4}
                          name="Head"
                          aria-label="maximum height"
                          placeholder="Maximum 4 rows"
                          defaultValue="Add in an appropriate headline that was sent by the advertiser"
                          style={{ width: 700 }}
                        /><br/><br/>

                    <label for="payment">Payment Recieved:</label><br/>
                        <TextField placeholder="Add payment " type="text" id="payment" name="payment"/><br/><br/>
                        
                    <label for="date">Date:</label><br/>
                        <TextField type="date" id="date" name="date"/>
                        <div style={{padding:'10px'}}  >
                        <Button  type="submit" variant="outlined">Add Advertisement</Button>
                          </div>
                        
                </form>

            </div> */}
            <Advert/>
      </TabPanel>

      <TabPanel value={value} index={3}>
  
        {/* <h1>Addition of a New Customer</h1>
        <div id = 'insert-advert'>
                <form onSubmit={submitCustomer} >
                    <label for="userData">Name:</label><br/>
                        <TextField  required placeholder="Enter employee name" type="text" id="cName" name="cName"/><br/><br/>

                    <label for="cNumber">Phone Number:</label><br/>
                        <TextField  placeholder="Enter # " type="text" id="cNumber" name="cNumber"/><br/><br/>

                    <label for="cBranch">CustomerID:</label><br/>
                        <TextField required  placeholder="Insert branch of new employee" type="text" id="cBranch" name="cBranch"/><br/><br/>


                    <div style={{padding:'10px'}}  >
                      <Button  type="submit" variant="outlined">Add Customer</Button>
                    </div>
                </form>

            </div> */}

            <Customer/>

            
      </TabPanel>
      
    </Box>
  );
}
