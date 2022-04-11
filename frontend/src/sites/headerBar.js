import React from 'react';
import { Link } from "react-router-dom";
import '../css/header.css';


function Header(){
    return(
        <div id = "navbar">
             <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><div id = 'navbar-title'>BigBase</div></Link>
             <Link to="/insert" style={{ textDecoration: 'none', color: 'white' }}><div id = 'navbar-insert'>Insert</div></Link>
             <Link to="/view" style={{ textDecoration: 'none', color: 'white' }}><div id = 'navbar-view' >View</div></Link>
            <Link to="/recommend" style={{ textDecoration: 'none', color: 'white' }}><div id = 'navbar-recommend' >Recommend</div></Link>
            <Link to="/accounting" style={{ textDecoration: 'none', color: 'white' }}><div id = 'navbar-navbar-recommend' >Accounting</div></Link>
        </div>
    );
}

export default Header;