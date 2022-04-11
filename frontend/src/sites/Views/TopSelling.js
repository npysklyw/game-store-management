
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from 'axios';
import { TextareaAutosize } from '@mui/base';
import Views from './Views';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";


function TopSelling(){
    const [top, setTop] = useState([]);


        let submit = async function (event) {

            event.preventDefault();
            const response =
                await axios.get("http://localhost:3033/TopGenre",
                { params: {genre: event.target.elements.topSell.value,}}
                ).then(function (response) {
                    console.log(response.data);
                    
                    response.data.forEach(function(row, i) {
                        row.id = i;
                      });

                        console.log(response.data)
                    setTop(response.data)
                    //setRecommend(response.data[0].name)
                    console.log(top)


                })
            
            
            //console.log(event.target.elements.vItemId.values)top
        
            return false;
        }

    return(
       <div>
           <h1>View Top Selling Game in a Genre</h1>
        <div id = 'view-topselling'>
                {/* Insert Employee <br/><br/> */}
                <form onSubmit={submit} >
                    <label for="v-topselling-genre">Genre:</label><br/>
                        <TextField  placeholder="Enter a Genre" type="text" id="v-topselling-genre" name="topSell"/><br/><br/>
                    <div style={{padding:'10px'}}  >
                      <Button  type="submit" variant="outlined">See Top Selling Game for Genre</Button>
                    </div>
                </form>
                {/* <Views/> */}
                <div style={{ height: 400, width: '100%' }}>
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

const columns = [
    { field: 'Name', headerName: 'Title Name', width: 500 },
    { field: 'MAX(revenue)', headerName: 'Revenue(Millions)', width: 500 },
   
];
export default TopSelling;

