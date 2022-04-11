import Header from "./headerBar";
import ViewTabs from "./ViewTabs";
import '../css/view.css';


function View(){
    return(
        <div id = 'view'>
            <Header/>
            <ViewTabs/>
        </div>
    ); 
}

export default View;