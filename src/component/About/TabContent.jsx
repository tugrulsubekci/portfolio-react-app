import React from "react";
import "../../styles/styles.css";

function TabContent(props) {
    return <div className={"tab-contents" +(props.isActive ? " active-tab" : "")}>
        <ul>
            {props.items.map((item,index) => <li key={index} ><span>{item.title}</span><br />{item.description}</li>)}
        </ul>
    </div>
}

export default TabContent;