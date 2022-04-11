import Header from '../sites/headerBar';
import '../css/home.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from'axios';
import React, { useState } from 'react';



  
function Recommend() {
    const [recommend, setRecommend] = useState("");

    let submit = async function (event) {



        event.preventDefault();
        const response =
            await axios.get("http://localhost:3033/recomendation",
            { params: {name: event.target.elements.name.value,phone: event.target.elements.phone.value,}}
            ).then(function (response) {
                if (event.target.elements.name.value != '' && event.target.elements.phone.value != '' ){ //if there waS no inputs
                    if (response.data != []){ //if no value then dont print anything
                        console.log(response.data[0].name); 
                        setRecommend(response.data[0].name)
                    }
                }
              })
      
        return false;
      }

    return(
            <div>

            <Header/>
            <div style={{display: 'flex',  justifyContent:'center', height: '10vh'}}>
                    <h1 > Determine A Title For A Specific Customer Based on Phone Number and Name</h1>      
            </div>

            <div style={{display: 'flex',  justifyContent:'center', height: '10vh'}}>
            <p>Enter the phone number and name of a subject: </p>
            </div>
            

            <form onSubmit={submit}>

            <div style={{display: 'flex',  justifyContent:'center', height: '10vh'}}>
            <TextField name="phone" id="filled-basic" label="Phone" variant="filled" />
            </div>

            <div style={{display: 'flex',  justifyContent:'center', height: '10vh'}}>
            <TextField name="name" id="filled-basic" label="name" variant="filled" />             
            </div>

            <div style={{display: 'flex',  justifyContent:'center', height: '10vh'}}>
            <Button type="submit" variant="outlined">Recommend</Button>   
            </div>
            </form>

            <div style={{display: 'flex',  justifyContent:'center', height: '50vh'}}>
            <h3>The database would recommend: {recommend}</h3>
            </div>

        </div>
    ); 
}

export default Recommend;