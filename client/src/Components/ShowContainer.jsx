// depends 
import React from "react";

// data 
import { upcomingShows } from "../data/upcomingShows";

// comps 
import ShowItem from "./ShowItem";


//css 
import "../CSS/ShowContainer.css"


const ShowContainer = () => {

    return(
        <div className="ShowContainer" id="ShowContainer">
            <div className="ShowContainer__titleContainer">
                <h1 className="titleContainer__title">Upcoming Shows</h1>
            </div>
            {
                upcomingShows.length > 0 ? 
                    upcomingShows.map((item) => {
                        return(
                                <ShowItem props={item} key={item.id}/>
                        )
                    })
                :
                <div className="ShowContainer__nullReturn">
                    <p className="nullReturn__copy">Announcing Soon .. </p>
                </div>
            }
        </div>
    )
};

export default ShowContainer;