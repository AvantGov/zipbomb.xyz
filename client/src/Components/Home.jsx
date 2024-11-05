// depends
import React from "react";

//comps 
import Header from './Header';
import TreeContainer from './TreeContainer';
import ShowContainer from './ShowContainer.jsx';
import About from './About.jsx';
import Trademark from './Trademark.jsx';

// css 
import "../CSS/Home.css";

const Home = () => {


    return(
        <div className="Home" id="Home">
            <Header />
            <TreeContainer />
            <ShowContainer />
            <About />
            <Trademark />
        </div>
    )
};

export default Home;
