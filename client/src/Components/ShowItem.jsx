// depends 
import React from "react";


// css 
import "../CSS/ShowItem.css"


const ShowItem = (props) => {
    const data = props.props;

    return(
        <div className="ShowItem"> 
            <div className="ShowItem__dateContainer">
                <h2 className="dateContainer__date">{data.date}</h2>
            </div>
            <div className="ShowItem__infoContainer">
                <h2 className="infoContainer__title">{data.title}</h2>
                <p className="infoContainer__location">{data.location}, {data.city}</p>
                {data.information != "" ? <p className="infoContainer__warning">{data.information}</p> : null}
                {data.url != "" ? <a className="infoContainer__link" href={data.url} target="_blank" rel="noopener noreferrer">More Info</a> : null}
            </div>
        </div>
    )
};


export default ShowItem;