//depends
import React from 'react';

// utils 
import {_createHydra } from '../utils/_createHydra';


// css 
import '../CSS/Header.css'


const Header = () => {

    return(
        <div className='Header' id='Header'>
            <img className='Header__image' id='img_header' src='ZB_logo_terminalGreen-definedEdge.png' />
        </div>
    )
}

export default Header;