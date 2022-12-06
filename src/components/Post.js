import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/PostItem.module.css";

const Post = (props) => {

    return (
        <div className={classes.card}>
            <Link className={classes.invisibleLink} to={"author/" + props.author}><h2>{props.author}</h2></Link>
            <div className={classes.postInfo}>
            <span>{props.date}</span> - <span>Views: {props.views}</span></div>
            { //append link if post if was passed
            props.linkId ? <Link className={classes.invisibleLink} to={"post/" + props.linkId}><p>{props.content}</p></Link> : <p>{props.content}</p>}
            
        </div>
    );
}

export default Post;