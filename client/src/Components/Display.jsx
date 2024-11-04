// depends
import React from 'react'

// components 
import Header from './Header';
import TreeContainer from './TreeContainer';
import ShowContainer from './ShowContainer.jsx';


// css
import '../CSS/Display.css';


const Display = () => {


    return(
        <div className='Display' id='Display'>
            <Header />
            <TreeContainer />
            <ShowContainer />
        </div>
    )
}

export default Display;