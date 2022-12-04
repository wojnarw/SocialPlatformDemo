import React from "react";
import classes from "../styles/Card.module.css";

const Post = (props) => {

    return (
        <div className={classes.card}>
            <h2>{props.author}</h2>
            <span>{props.date}</span> - <span>Views: {props.views}</span>
            <p>{props.content}</p>
        </div>
    );
}

export default Post;