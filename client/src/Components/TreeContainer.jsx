// depends 
import React from "react";

// comps
import TreeItem from './TreeItem';

// data 
import { treeData } from "../data/treeData";

//css 
import "../CSS/TreeContainer.css";

const TreeContainer = () => {

    return(
        <div className="TreeContainer" id="TreeContainer">
            {treeData.map((item) => {
                return(
                    <TreeItem props={item} key={item.id}/>
                )
            })}
        </div>
    )
}

export default TreeContainer; 