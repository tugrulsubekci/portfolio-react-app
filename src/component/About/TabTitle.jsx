import React from "react";
import "../../styles/styles.css";

function TabTitle(props) {
    return <div className={"tab-links" + (props.isActive ? " active-link" : "")} onClick={props.setActive}>{props.text}</div>
}

export default TabTitle;