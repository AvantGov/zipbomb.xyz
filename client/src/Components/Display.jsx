// depends
import React from 'react'

// components 
import Header from './Header';
import TreeContainer from './TreeContainer';
import ShowContainer from './ShowContainer.jsx';
import About from './About.jsx';
import Trademark from './Trademark.jsx';


// css
import '../CSS/Display.css';


const Display = () => {


    return(
        <div className='Display' id='Display'>
            <Header />
            <TreeContainer />
            <ShowContainer />
            <About />
            <Trademark />
        </div>
    )
}

export default Display;