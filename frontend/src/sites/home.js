import Header from "./headerBar";
import '../css/home.css';
import { padding } from "@mui/system";

function Home(){
    return(
        <div id = 'home'>
            <Header/>
            <div style={{display: 'flex',  justifyContent:'center', height: '5vh'}}>
                    <h1 > Welcome to the Branch Management Tool</h1>
                   
            </div>
            <div style={{display: 'flex',  justifyContent:'center', height: '10vh', padding: '10px'}}>
            <img src='iamge.svg' width="500" height="600"/>
            
            </div>
            

            

            <div style={{display: 'flex',  justifyContent:'center', height: '30vh', padding: '10px'}}>
            <h3>Managers can utilize this tool to view various statistics and add new data for their branch</h3>
                   
            </div>
            
                   
            </div>
    
            
        
    ); 
}

export default Home;