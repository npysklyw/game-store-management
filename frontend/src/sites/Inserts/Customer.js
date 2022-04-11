
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from 'axios';

let submitCustomer = async function (event) {

    event.preventDefault();
    const response =
        await axios.get("http://localhost:3033/addCustomer",
        { params: {name: event.target.elements.cName.value,number: event.target.elements.cNumber.value,branch: event.target.elements.cBranch.value,customerID: event.target.elements.customer.value}}
        )
    console.log("sda");
  
    return false;
  }

function Customer(){
    return(
       <div>
           <h1>Addition of a New Customer</h1>
           <div style={{padding:"10px"}}>

        <p> A manager can add a new customer to the database. 
        </p>
        </div>
        <div id = 'insert-advert'>
                {/* Insert Employee <br/><br/>//'/employee' */}
                <form onSubmit={submitCustomer} >
                    <label for="userData">Name:</label><br/>
                        <TextField  required placeholder="Enter customer name" type="text" id="cName" name="cName"/><br/><br/>

                    <label for="cNumber">Phone Number:</label><br/>
                        <TextField  placeholder="Enter # " type="text" id="cNumber" name="cNumber"/><br/><br/>

                    <label for="customerID">CustomerID:</label><br/>
                        <TextField required  placeholder="Insert customerID of new customer" type="text" id="customerID" name="customer"/><br/><br/>

                    <label for="cBranch">BranchID:</label><br/>
                        <TextField required  placeholder="Insert branch of new customer" type="text" id="cBranch" name="cBranch"/><br/><br/>

                    <div style={{padding:'10px'}}  >
                      <Button  type="submit" variant="outlined">Add Customer</Button>
                    </div>
                </form>

            </div>
       </div>
    ); 
}

export default Customer;