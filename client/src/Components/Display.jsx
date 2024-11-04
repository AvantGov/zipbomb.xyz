// depends
import React from 'react'

// components 
import Header from './Header';
import TreeContainer from './TreeContainer';


// css
import '../CSS/Display.css';


const Display = () => {


    return(
        <div className='Display' id='Display'>
            <Header />
            <TreeContainer />
        </div>
    )
}

export default Display;