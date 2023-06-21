import { Button } from '@mui/material';
import React, {useEffect, useState} from 'react';
// import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    return (
        <div className='nav-bar'>
            <div className='nav-items-container'>
                <div className='nav-items'> 
                    <a href="/#about">
                        About
                     </a>
                </div>
                <div className='nav-items'> 
                <a href='/#service'>
                    Services
                </a>
                </div>
                <div className='nav-items'>
                <a href='/#project'>
                     Projects
                 </a>
                </div>
                <div className='nav-items'>
                <a href='/#experience'>
                     Experience
                </a>
                </div>
                <div className='nav-items'>
                <a href='/#contact'>
                     Contact
                </a>
                </div>
            </div>
        </div>
    )
}
export default Navbar
