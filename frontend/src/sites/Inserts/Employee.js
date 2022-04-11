
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from 'axios';

let submitEmployee = async function (event) {

    event.preventDefault();
    const response =
        await axios.get("http://localhost:3033/addEmployeeAddress",
        { params: {name: event.target.elements.eName.value,address: event.target.elements.eAddress.value,branch: event.target.elements.eBranch.value,employeeID: event.target.elements.eID.value}}
        )
    console.log("sda");
  
    return false;
  }

function Employee(){
    return(
       <div>
           <h1>Addition of a new Employee</h1>

           <div style={{padding:"10px"}}>

        <p> A manager can add new employees to the database. 
        </p>
        </div>
        <div id = 'insert-advert'>
                {/* Insert Employee <br/><br/>//'/employee' */}
                <form onSubmit={submitEmployee} >
                <label for="employeeID">EmployeeID:</label><br/>
                        <TextField  required placeholder="Enter employee ID" type="text" id="eID" name="eID"/><br/><br/>

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

            </div>
       </div>
    ); 
}

export default Employee;