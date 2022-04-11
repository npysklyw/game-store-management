
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from 'axios';
import { TextareaAutosize } from '@mui/base';
import Views from './Views';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";


function GamesView(){
    const [top, setTop] = useState([]);


        let submit = async function (event) {

            event.preventDefault();
            const response =
                await axios.get("http://localhost:3033/gamePerGenre",
                { params: {genre: event.target.elements.genreGames.value,}}
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
           <h1>View Games in a Genre</h1>
        <div id = 'view-games-genre'>
                {/* Insert Employee <br/><br/> */}
                <form onSubmit={submit}>
                    <label for="v-game-genre">Genre:</label><br/>
                        <TextField  placeholder="Enter a Genre" type="text" id="v-game-genre" name="genreGames"/><br/><br/>

                    <div style={{padding:'10px'}}  >
                      <Button  type="submit" variant="outlined">See All Games in a Genre</Button>
                    </div>
                </form>



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
    { field: 'name', headerName: 'Title Name', width: 500 },
  { field: 'price', headerName: 'Price', width: 500 },
   
  ];
export default GamesView;

