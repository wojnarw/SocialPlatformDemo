import React from "react";
import classes from "../styles/PostItem.module.css";

const Panel = (props) => {

    return (
        <div className={classes.card}>
            {props.title && <h2>{props.title}</h2>}
            <p>{props.children}</p>
        </div>
    );
}

export default Panel;