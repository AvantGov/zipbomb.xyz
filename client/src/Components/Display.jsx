// depends
import React from 'react'
import {createBrowserRouter,RouterProvider, ScrollRestoration} from "react-router-dom";


// components 
import Home from './Home';
import Goatse from './Goatse';


// css
import '../CSS/Display.css';


const Display = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path:"/goatse",
            element: <Goatse />
        },
        {
            path: "*",
            element: <Home />
        }

    ])


    return(
        <div className='Display' id='Display'>
            <RouterProvider router={router}>
                <ScrollRestoration />
            </RouterProvider>
        </div>
    )
}

export default Display;