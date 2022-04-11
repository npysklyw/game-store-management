
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from 'axios';
import { TextareaAutosize } from '@mui/base';

let submitAdvert = async function (event) {

    event.preventDefault();
    const response =
        await axios.get("http://localhost:3033/InsertAds",
        { params: {date: event.target.elements.date.value,payment: event.target.elements.payment.value,header: event.target.elements.Head.value,branch: event.target.elements.branch.value,}}
        )
    console.log("sda");
    
    //console.log(event.target.elements.vItemId.values)
  
    return false;
  }

function Advert(){
    return(
       <div>
           <h1>Create a New Advertisement</h1>

<div style={{padding:"10px"}}>

<p> To create an Advertisement, the manager must add in some details. Please note the branchID of the given branch the advertisement is
  to be placed, add in the headline of the advertisment. Add in the amount the store received for such an advertisement, along with when this advertisement is to be placed.
  </p>
  

  </div>
<div id = 'insert-advert'>
        {/* Make Advert <br/><br/> */}
        <form onSubmit={submitAdvert}> 
            <label for="branch">Branch Id:</label><br/>
                <TextField placeholder="Add a branch ID" type="text" id="branch" name="branch"/><br/><br/>

            <label for="headline">Headline:</label><br/>
                {/* <TextField  type="text" id="headline" name="headline"/> */}
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

        

    </div>
       </div>
    ); 
}

export default Advert;

