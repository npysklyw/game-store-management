
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from 'axios';


let submitStock= async function (event) {

    event.preventDefault();
    const response =
        await axios.get("http://localhost:5000/updateStock",
        { params: {ID: event.target.elements.vItemId.value,items: event.target.elements.vStockIncrease.value,amount:event.target.elements.vStockAmount.value,branch:event.target.elements.vStockBranch.value}}
        )
    console.log("sda");
    
    //console.log(event.target.elements.vItemId.values)
  
    return false;
  }

function Stock(){
    return(
       <div>
           <h1>Add More Stock to a Store</h1>

<div style={{padding:"10px"}}>

<p> A manager can add item stock to a specific store. 
</p>


</div>
<div id = 'insert-advert'>
    {/* Insert Stock <br/><br/> */}
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

</div>
       </div>
    ); 
}

export default Stock;