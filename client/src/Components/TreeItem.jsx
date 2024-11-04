// depends 
import React from "react";


//css
import "../CSS/TreeItem.css"


const TreeItem = (props) => {
    const data = props.props
    
    return(
        <a className="link__TreeItem" target="_blank" href={data.url}>
            <div className="TreeItem">
                <img className="TreeItem__imgCont" id={`image_${data.id}`} src={data.img} />
                <div className="TreeItem__contentContainer">
                    <h2 className="containerContainer__title">{data.title}</h2>
                </div>
            </div>
        </a>
    )
}

export default TreeItem;