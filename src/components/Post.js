import React from "react";


const Post = (props) => {

    return <div className={classes.post}>
        <h2>{props.author}</h2>
        <span>{props.date}</span><span>{props.views}</span>
        <p>{props.content}</p>
    </div>
}

export default Post;