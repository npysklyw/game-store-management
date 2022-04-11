import Header from "./headerBar";
import '../css/insert.css'
import * as React from 'react';
import VerticalTabs from "./VerticalTabs";


function Insert(){

    return(
        <div id = 'insert-page'>
            <Header/>
            <VerticalTabs />

        </div>
        
    );
}

export default Insert;