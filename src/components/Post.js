import React from "react";
import classes from "../styles/PostItem.module.css";

const Post = (props) => {

    return (
        <div className={classes.card}>
            <h2>{props.author}</h2>
            <div className={classes.postInfo}>
            <span>{props.date}</span> - <span>Views: {props.views}</span></div>
            <p>{props.content}</p>
        </div>
    );
}

export default Post;